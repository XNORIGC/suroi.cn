import { type TeamMode } from "@common/constants";
import type { ModeName } from "@common/definitions/modes";

export const Config = {
    regions: {
        /* bjcustom: {
            name: "Beijing (Custom)",
            flag: "🇨🇳 ",
            mainAddress: "https://suroi.camvan.xyz:7000",
            gameAddress: "wss://suroi.camvan.xyz:7000/game/<gameID>",
            offset: 1
        },
        */hkcustom: {
            name: "Beijing (Custom)",
            flag: "🇭🇰 ",
            mainAddress: "https://as.suroi.io:7001",
            gameAddress: "wss://as.suroi.io:7001/game/<gameID>",
            offset: 1
        }
    },
    defaultRegion: "hkcustom"
} satisfies ConfigType as ConfigType;

export interface ConfigType {
    readonly regions: Record<string, Region>
    readonly defaultRegion: string
}

export interface Region {
    /**
     * The human-readable name of the region, displayed in the server selector.
     */
    readonly name: string

    /**
     * An emoji flag to display alongside the region name.
     */
    readonly flag?: string

    /**
     * The address of the region's main server.
     */
    readonly mainAddress: string

    /**
     * Pattern used to determine the address of the region's game servers.
     * The string `<gameID>` is replaced by the `gameID` given by the /getGame API, plus {@linkcode offset}.
     * For example, if `gameID` is 0, `gameAddress` is `"wss://na.suroi.io/game/<gameID>"`, and `offset` is 1, the resulting address will be wss://na.suroi.io/game/1.
     */
    readonly gameAddress: string

    /**
     * Number to increment `gameID` by when determining the game address. See {@linkcode gameAddress} for more info.
     */
    readonly offset: number
}

export interface ServerInfo {
    readonly protocolVersion: number
    readonly playerCount: number
    readonly teamMode: TeamMode
    readonly teamModeSwitchTime: number
    readonly mode: ModeName
    readonly modeSwitchTime: number
}
