import { Ammos } from "@common/definitions/ammos";
import { Badges } from "@common/definitions/badges";
import { Emotes } from "@common/definitions/emotes";
import { Explosions } from "@common/definitions/explosions";
import { Guns } from "@common/definitions/guns";
import { Melees } from "@common/definitions/melees";
import { Skins } from "@common/definitions/skins";
import { Throwables } from "@common/definitions/throwables";
import { parse } from "hjson";
import { readdirSync, readFileSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";

export const REFERENCE_LANGUAGE = "en";

export const LANGUAGES_DIRECTORY = "../languages/";

const files = readdirSync(LANGUAGES_DIRECTORY).filter(file => file.endsWith(".hjson"));

const keyFilter = (key: string): boolean => !(
    ["name", "flag", "mandatory", "no_space", "no_resize", "html_lang"].includes(key)
    || [Ammos, Badges, Emotes, Explosions, Guns, Melees, Skins, Throwables].some(d => d.hasString(key))
    || ["deathray", "developr_vest", "32x_scope", "msg_lost_connection", "region_hk", "username_input"].includes(key)
    || (key.startsWith("settings_") && ((a, f) => f(a))(key.slice("settings_".length), (key: string) => ["brightness", "colorful_bullets", "saturate", "self_deception_ping"].includes(key) || key.startsWith("menu_music")))
    || key.startsWith("news_") || key.startsWith("time_")
);

const ValidKeys: readonly string[] = Object.keys(parse(readFileSync(`${LANGUAGES_DIRECTORY + REFERENCE_LANGUAGE}.hjson`, "utf8")) as Record<string, unknown>)
    .filter(keyFilter);

export type TranslationManifest = {
    readonly name: string
    readonly flag: string
    readonly percentage: string
    /** Loading the language is required on client */
    readonly mandatory?: boolean
    readonly no_resize?: boolean
    readonly no_space?: boolean
    readonly html_lang?: string
};
export type TranslationsManifest = Record<string, TranslationManifest>;

export async function validateTranslations(): Promise<void> {
    let reportBuffer = `# Translation File Reports

This file is a report of all errors and missing keys in the translation files of this game. Last generated ${new Date(Date.now()).toUTCString()}

`;

    for (
        const [filename, content] of await Promise.all(
            files.filter(file => file !== `${REFERENCE_LANGUAGE}.hjson`)
                .map(
                    async(file): Promise<[string, Record<string, string>]> => [file, parse(await readFile(LANGUAGES_DIRECTORY + file, "utf8"))]
                )
        )
    ) {
        const keys = Object.keys(content).filter(keyFilter);

        let languageReportBuffer = `## ${content.flag} <span lang="${content.html_lang ?? ""}">${content.name}</span> (${Math.round(100 * keys.length / ValidKeys.length)}% Complete) - ${filename}\n\n`;

        // Find invalid keys
        const invalidKeys = keys.filter(k => !ValidKeys.includes(k)).map(key => `- Key \`${key}\` is not a valid key`).join("\n");
        if (invalidKeys.length > 0) {
            languageReportBuffer += `### Invalid Keys\n\n${invalidKeys}\n\n`;
        } else { languageReportBuffer += "### (No Invalid Keys)\n\n"; }

        // Find undefined keys
        const undefinedKeys = ValidKeys.filter(k => !keys.includes(k)).map(key => `- Key \`${key}\` is not defined`).join("\n");
        if (undefinedKeys.length > 0) {
            languageReportBuffer += `### Undefined Keys\n\n${undefinedKeys}\n\n`;
        } else { languageReportBuffer += "### (No Undefined Keys)\n\n"; }

        reportBuffer += languageReportBuffer;
    }

    await writeFile("../README.md", reportBuffer);
    await buildTypings(ValidKeys);
}

export async function buildTranslations(): Promise<void> {
    const languages: Record<string, Record<string, string>> = {};

    await Promise.all(
        files.map(async file => {
            languages[file.slice(0, -".hjson".length)] = parse(await readFile(LANGUAGES_DIRECTORY + file, "utf8")) as Record<string, string>;
        })
    );

    const manifest: TranslationsManifest = {};

    const filePromises: Array<Promise<void>> = [];
    for (const [language, content] of Object.entries(languages)) {
        manifest[language] = {
            name: content.name,
            flag: content.flag,
            mandatory: Boolean(content.mandatory),
            no_resize: Boolean(content.no_resize),
            no_space: Boolean(content.no_space),
            html_lang: content.html_lang,
            percentage: `${Math.round(100 * Object.keys(content).filter(keyFilter).length / ValidKeys.length)}%`
        };

        filePromises.push(writeFile(`../../client/public/translations/${language}.json`, JSON.stringify(content)));
    }

    await Promise.all([
        ...filePromises,
        writeFile("../../client/src/translationsManifest.json", JSON.stringify(manifest))
    ]);
}

export async function buildTypings(keys: readonly string[]): Promise<void> {
    let buffer = `// WARN: DO NOT EDIT THIS FILE! THIS FILE WAS GENERATED ON ${new Date(Date.now()).toUTCString()}\n`;
    buffer += "/* eslint-disable */\n";
    buffer += "export type TranslationKeys=";
    buffer += [
        ...keys,
        ...Guns.definitions.map(({ idString }) => idString),
        ...Melees.definitions.map(({ idString }) => idString),
        ...Throwables.definitions.map(({ idString }) => idString)
    ].map(key => `"${key}"`).join("|");
    buffer += ";";

    await writeFile("../../client/src/typings/translations.ts", buffer);
}
