import { type LootDefinition } from "@common/definitions/loots";
import { type ReferenceTo } from "@common/utils/objectDefinitions";

export type WeightedItem =
    (
        { readonly item: ReferenceTo<LootDefinition> | null } |
        { readonly tier: string }
    ) &
    {
        readonly count?: number
        readonly spawnSeparately?: boolean
        readonly weight: number
    };

export interface LootTable {
    readonly min: number
    readonly max: number
    readonly loot: ReadonlyArray<WeightedItem | readonly WeightedItem[]>
}

// TODO Refactor loot table system
export const LootTables: Record<string, LootTable> = {
    ground_loot: {
        min: 1,
        max: 1,
        loot: [
            { tier: "equipment", weight: 1 },
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 1 },
            { tier: "guns", weight: 0.9 },
            { tier: "scopes", weight: 0.3 }
        ]
    },
    regular_crate: {
        min: 1,
        max: 1,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "equipment", weight: 1 },
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 0.5 },
            { tier: "scopes", weight: 0.3 },
            { tier: "throwables", weight: 0.3 },
            { tier: "melee", weight: 0.04 }
        ]
    },
    hazel_crate: {
        min: 1,
        max: 1,
        loot: [
            [{ item: "firework_launcher", weight: 1 }],
            [{ item: "1st_birthday", weight: 1 }]
        ]
    },
    viking_chest: {
        min: 1,
        max: 1,
        loot: [
            [
                { item: "firework_launcher", weight: 1 }
            ],
            [
                { tier: "viking_chest_guns", weight: 1 }
            ],
            [
                { tier: "viking_chest_guns", weight: 1 }
            ],
            [
                { tier: "special_equipment", weight: 0.65 },
                { tier: "viking_chest_guns", weight: 0.5 },
                { tier: "special_scopes", weight: 0.3 }
            ],
            [
                { tier: "special_equipment", weight: 0.65 },
                { tier: "special_scopes", weight: 0.3 }
            ]
        ]
    },
    river_chest: {
        min: 1,
        max: 1,
        loot: [
            [
                { tier: "river_chest_guns", weight: 1 }
            ],
            [
                { tier: "river_chest_guns", weight: 1 }
            ],
            [
                { tier: "special_equipment", weight: 0.65 },
                { tier: "river_chest_guns", weight: 0.5 },
                { tier: "special_scopes", weight: 0.3 }
            ],
            [
                { tier: "special_equipment", weight: 0.65 },
                { tier: "special_scopes", weight: 0.3 }
            ]
        ]
    },
    aegis_crate: {
        min: 3,
        max: 5,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_healing_items", weight: 0.15 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_scopes", weight: 0.3 }
        ]
    },
    flint_crate: {
        min: 3,
        max: 5,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_healing_items", weight: 0.15 },
            { tier: "special_scopes", weight: 0.3 }
        ]
    },
    grenade_box: {
        min: 1,
        max: 1,
        loot: [
            { item: "frag_grenade", weight: 1, count: 2 },
            { item: "smoke_grenade", weight: 1, count: 2 }
        ]
    },
    melee_crate: {
        min: 2,
        max: 2,
        loot: [
            { tier: "melee", weight: 1 }
        ]
    },
    grenade_crate: {
        min: 3,
        max: 4,
        loot: [
            { tier: "throwables", weight: 1 }
        ]
    },
    tango_crate: {
        min: 1,
        max: 1,
        loot: [
            [
                { item: "frag_grenade", weight: 1 },
                { item: "8x_scope", weight: 0.1 },
                { item: "15x_scope", weight: 0.0025 }
            ],
            [
                { item: "firework_launcher", spawnSeparately: true, weight: 60 },
                { item: "pp19", spawnSeparately: true, count: 2, weight: 30 },
                { item: "15x_scope", spawnSeparately: true, count: 3, weight: 3.5 },
                { item: "tango_51", spawnSeparately: true, count: 4, weight: 0.1 },
                { item: "tango_51", spawnSeparately: true, count: 5, weight: 0.0000001 }
            ]
        ]
    },
    lux_crate: {
        min: 1,
        max: 1,
        loot: [
            [
                { item: "firework_launcher", weight: 1 }
            ],
            [
                { tier: "scopes", weight: 1 }
            ]
        ]
    },
    gold_rock: {
        min: 1,
        max: 1,
        loot: [
            { item: "firework_launcher", weight: 1 }
        ]
    },
    loot_tree: {
        min: 1,
        max: 1,
        loot: [
            [
                { item: "model_37", weight: 1 },
                { item: "m3k", weight: 1 },
                { item: "vepr12", weight: 0.2 }
            ],
            [{ item: "hatchet", weight: 1 }],
            [{ item: "lumberjack", weight: 1 }],
            [{ item: "basic_helmet", weight: 1 }],
            [{ item: "basic_pack", weight: 1 }],
            [{ item: "12g", count: 15, weight: 1 }]
        ]
    },
    loot_barrel: {
        min: 1,
        max: 1,
        loot: [
            [{ item: "firework_launcher", weight: 1 }],
            [{ item: "sr25", weight: 1 }],
            [
                { item: "frag_grenade", weight: 1, count: 3 },
                { item: "smoke_grenade", weight: 1, count: 3 }
            ],
            [
                { tier: "equipment", weight: 1 },
                { tier: "scopes", weight: 1 },
                { tier: "healing_items", weight: 1 }
            ]
        ]
    },
    pumpkin: {
        min: 1,
        max: 1,
        loot: [
            { item: "s_g17", weight: 0.95 },
            { item: "usas12", weight: 0.05 }
        ]
    },
    birthday_cake: {
        min: 1,
        max: 1,
        loot: [
            { tier: "special_guns", weight: 0.25 },
            { tier: "special_equipment", weight: 0.25 },
            { item: "1st_birthday", weight: 0.25 },
            { item: "firework_rocket", weight: 0.2 },
            { item: "firework_launcher", weight: 0.01 }
        ]
    },
    blueberry_bush: {
        min: 1,
        max: 1,
        loot: [
            { tier: "special_equipment", weight: 1 },
            { tier: "healing_items", weight: 1 },
            { tier: "scopes", weight: 1 }
        ]
    },
    warehouse: {
        min: 1,
        max: 1,
        loot: [
            { tier: "special_guns", weight: 1 },
            { tier: "special_scopes", weight: 0.25 },
            { tier: "special_equipment", weight: 0.65 }
        ]
    },
    large_drawer: {
        min: 1,
        max: 1,
        loot: [
            { tier: "guns", weight: 1 },
            { tier: "equipment", weight: 0.65 },
            { tier: "scopes", weight: 0.3 }
        ]
    },
    small_drawer: {
        min: 1,
        max: 1,
        loot: [
            { tier: "ammo", weight: 1 },
            { tier: "healing_items", weight: 0.8 },
            { tier: "guns", weight: 0.3 }
        ]
    },
    small_table: {
        min: 1,
        max: 1,
        loot: [
            { tier: "healing_items", weight: 1 },
            { tier: "ammo", weight: 1 }
        ]
    },
    box: {
        min: 1,
        max: 1,
        loot: [
            { tier: "ammo", weight: 1.2 },
            { tier: "healing_items", weight: 1 },
            { tier: "equipment", weight: 1 },
            { tier: "guns", weight: 0.5 },
            { tier: "scopes", weight: 0.3 }
            { tier: "knawa", weight: 0.8 }
        ]
    },
    bookshelf: {
        min: 1,
        max: 3,
        loot: [
            { tier: "knawa", weight: 1.1 },
            { tier: "scopes", weight: 0.4 },
            { tier: "guns", weight: 1 },
            { tier: "healing_items", weight: 0.6 }
        ]
    },
    fridge: {
        min: 2,
        max: 3,
        loot: [
            { item: "cola", weight: 1 }
        ]
    },
    cooler: {
        min: 2,
        max: 3,
        loot: [
            { item: "cola", weight: 1 }
        ]
    },
    washing_machine: {
        min: 1,
        max: 2,
        loot: [
            { item: "lemon", weight: 1 },
            { item: "flamingo", weight: 1 },
            { item: "verified", weight: 0.5 },
            { item: "no_kil_pls", weight: 0.5 },
            { item: "basic_outfit", weight: 0.001 }
            { tier: "knawa", weight: 1.75 }
        ]
    },
    toilet: {
        min: 9,
        max: 12,
        loot: [
            { tier: "healing_items", weight: 3 },
            { tier: "scopes", weight: 1 },
            { tier: "guns", weight: 2 }
            { tier: "knawa", weight: 5.75 }
        ]
    },
    used_toilet: {
        min: 7,
        max: 14,
        loot: [
            { tier: "guns", weight: 1.76 },
            { tier: "equipment", weight: 0.23 },
            { tier: "scopes", weight: 4.35 },
            { tier: "special_guns", weight: 2.2 },
            { tier: "healing_items", weight: 3.75 }
            { tier: "knawa", weight: 5.75 }
        ]
    },
    porta_potty_toilet_open: {
        min: 2,
        max: 5,
        loot: [
            { tier: "guns", weight: 1.25 },
            { tier: "healing_items", weight: 1 },
            { tier: "equipment", weight: 0.9 },
            { tier: "special_guns", weight: 0.8 },
            { tier: "special_scopes", weight: 0.35 }
        ]
    },
    porta_potty_toilet_closed: {
        min: 2,
        max: 3,
        loot: [
            { tier: "healing_items", weight: 3 },
            { tier: "scopes", weight: 1 },
            { tier: "guns", weight: 0.5 }
        ]
    },
    gun_mount_mcx_spear: {
        min: 1,
        max: 2,
        loot: [
            { item: "deathray", weight: 1 }
        ]
    },
    gun_mount_stoner_63: {
        min: 1,
        max: 3,
        loot: [
            { item: "verified", weight: 1 }
        ]
    },
    gun_mount_maul: {
        min: 1,
        max: 1,
        loot: [
            { item: "heap_sword", weight: 1 }
        ]
    },
    gun_mount_hp18: {
        min: 1,
        max: 2,
        loot: [
            { item: "gas_can", weight: 1 }
            { item: "heap_sword", weight: 2 }
        ]
    },
    gas_can: {
        min: 1,
        max: 1,
        loot: [
            { item: "tactical_helmet", weight: 1 }
        ]
    },
    airdrop_crate: {
        min: 1,
        max: 6,
        loot: [
            [
                { tier: "airdrop_equipment", weight: 1 }
            ],
            [
                { tier: "airdrop_scopes", weight: 1 }
            ],
            [
                { tier: "airdrop_healing_items", weight: 1 }
            ],
            [
                { tier: "airdrop_skins", weight: 1 }
            ],
            [
                { tier: "airdrop_melee", weight: 1 }
            ],
            [
                { tier: "ammo", weight: 1 }
            ],
            [
                { tier: "airdrop_guns", weight: 1 }
            ],
            [
                { item: "tactical_helmet", count: 3, weight: 2 },
                { item: null, weight: 1 }
            ],
            [
                { item: "barrett", count: 2, weight: 1 },
            ]
        ]
    },
    gold_airdrop_crate: {
        min: 1,
        max: 8,
        loot: [
            [
                { tier: "airdrop_equipment", weight: 1 }
            ],
            [
                { tier: "airdrop_scopes", weight: 1 }
            ],
            [
                { tier: "airdrop_healing_items", weight: 1 }
            ],
            [
                { tier: "airdrop_skins", weight: 1 }
            ],
            [
                { tier: "airdrop_melee", weight: 1 }
            ],
            [
                { tier: "knawa", weight: 1 }
            ],
            [
                { tier: "gold_airdrop_guns", weight: 1 }
            ],
            [
                { item: "frag_grenade", count: 3, weight: 1 }
            ]
        ]
    },
    flint_stone: {
        min: 1,
        max: 9,
        loot: [
            { tier: "gold_airdrop_guns", weight: 1 }
            { tier: "airdrop_melee", weight: 1 }
            { tier: "knawa", weight: 1 },
            { tier: "special_guns", weight: 1 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_healing_items", weight: 0.65 },
            { tier: "special_scopes", weight: 0.3 },
            { item: "radio", weight: 0.1 }
        ]
    },
    christmas_tree: {
        min: 4,
        max: 9,
        loot: [
            { tier: "special_winter_skins", weight: 1 },
            { tier: "special_guns", weight: 1 },
            { tier: "special_equipment", weight: 0.65 },
            { tier: "special_healing_items", weight: 0.65 },
            { tier: "special_scopes", weight: 0.3 },
            { item: "radio", weight: 0.1 }
        ]
    },
    gun_case: {
        min: 1,
        max: 10,
        loot: [
            { tier: "special_guns", weight: 1 }
        ]
    },
    ammo_crate: {
        min: 1,
        max: 10,
        loot: [
            { tier: "ammo", weight: 10 },
            { item: "127mm", count: 10, weight: 0.1 },
            { item: "cola", weight: 15 }
            { tier: "special_equipment", weight: 0.65 },
            { tier: "knawa", weight: 0.65 },
            { item: "firework_rocket", count: 10, weight: 2 },
            { tier: "throwables", weight: 1 }
        ]
    },
    rocket_box: {
        min: 1,
        max: 1,
        loot: [
            { item: "firework_rocket", count: 10, weight: 2 },
            { tier: "ammo", weight: 1 },
            { item: "curadell", weight: 0.02 }
        ]
    },
    confetti_grenade_box: {
        min: 1,
        max: 2,
        loot: [
            [
                { tier: "knawa", weight: 1 }
            ],
            [
                { item: "confetti_grenade", count: 3, weight: 1 }
            ]
        ]
    },
    cabinet: {
        min: 2,
        max: 4,
        loot: [
            [
                { tier: "knawa", weight: 1 }
            ],
            [
                { item: "frag_grenade", count: 3, weight: 1 }
            ]
        ]
    },
    briefcase: {
        min: 1,
        max: 3,
        loot: [
            { item: "arena_closer", weight: 3 },
            { item: "barrett", weight: 3 },
            { item: "vepr12", weight: 1 },
            { item: "stoner_63", weight: 0.2 },
            { item: "negev", weight: 4.15 },
            { item: "mg5", weight: 0.15 },
            { item: "deathray", weight: 2 }
        ]
    },
    mobile_home_sink: {
        min: 1,
        max: 1,
        loot: [
            { tier: "healing_items", weight: 1.2 },
            { tier: "ammo", weight: 1 }
        ]
    },
    birch_tree: {
        min: 1,
        max: 3,
        loot: [
            { tier: "knawa", weight: 1.2 },
            { tier: "ammo", weight: 1 }
        ]
    },
    sea_traffic_control_floor: {
        min: 1,
        max: 3,
        loot: [
            { item: "developr_swag", weight: 2 }
            { item: "arena_closer", weight: 3 },
            { item: "mg5", weight: 2.15 },
        ]
    },
    sea_traffic_control_outside: {
        min: 1,
        max: 1,
        loot: [
            { item: "hasanger", weight: 1 }
        ]
    },
    tugboat_red_floor: {
        min: 1,
        max: 1,
        loot: [
            { item: "leia", weight: 1 }
        ]
    },
    rock: {
        min: 1,
        max: 2,
        loot: [
            { tier: "guns", weight: 1.3 },
            { tier: "special_guns", weight: 1.5 },
            { tier: "ammo", weight: 1.9 },
            { tier: "airdrop_melee", weight: 1.9 },
            { item: "hasanger", weight: 1.9 },
            { tier: "throwables", weight: 1.3 }
            { item: "arena_closer", weight: 0.1 },
        ]
    },
    potted_plant: {
        min: 1,
        max: 1,
        loot: [
            { tier: "ammo", weight: 1 },
            { tier: "healing_items", weight: 0.5 },
            { tier: "equipment", weight: 0.3 }
        ]
    }
};

export const LootTiers: Record<string, readonly WeightedItem[]> = {
    guns: [
        { item: "usas12", weight: 1 },
        { item: "gauze", weight: 1.75 },
        { item: "pp19", weight: 1.7 },
        { item: "developr_swag", weight: 1.5 },
        { item: "ice_pick", weight: 1 },
        { item: "hp18", weight: 5.25 },
        { item: "micro_uzi", weight: 1 },
        { item: "tactical_vest", weight: 1 },
        { item: "model_37", weight: 0.95 },
        { item: "aug", weight: 0.7 },
        { item: "m3k", weight: 0.9 },
        { item: "m16a4", weight: 0.1 },
        { item: "arx160", weight: 0.1 },
        { item: "flues", weight: 0.1 },
        { item: "lewis_gun", weight: 0.05 },
        { item: "vss", weight: 1.62 },
        { item: "mg36", weight: 1.1 },
        { item: "sr25", weight: 1.01 },
        { item: "mini14", weight: 1.1 },
        { item: "medikit", weight: 1.005 },
        { item: "mosin", weight: 1.005 },
        { item: "tablets", weight: 1.4 },
        { item: "negev", weight: 2 },
        { item: "mg5", weight: 3 },
        { item: "tango_51", weight: 0.002 }
    ],
    healing_items: [
        { item: "gauze", count: 5, weight: 3 },
        { item: "cola", weight: 2 },
        { item: "tablets", weight: 1 },
        { item: "medikit", weight: 1 }
    ],
        knawa: [
        { item: "g19", weight: 1 },
        { item: "m1895", weight: 1 },
        { item: "mp40", weight: 1 },
        { item: "saf_200", weight: 1 },
        { item: "cz75a", weight: 1 },
        { item: "hp18", weight: 1 },
        { item: "micro_uzi", weight: 1 },
        { item: "ak47", weight: 1 },
        { item: "model_37", weight: 1 },
        { item: "aug", weight: 1 },
        { item: "m3k", weight: 1 },
        { item: "m16a4", weight: 1 },
        { item: "arx160", weight: 1 },
        { item: "flues", weight: 1 },
        { item: "vss", weight: 1 },
        { item: "mg36", weight: 1 },
        { item: "sr25", weight: 1 },
        { item: "mini14", weight: 1 },
        { item: "mcx_spear", weight: 1 },
        { item: "cz600", weight: 1 },
        { item: "vepr12", weight: 1 },
        { item: "stoner_63", weight: 1 },
        { item: "radio", weight: 1 },
        { item: "mosin", weight: 1 },
        { item: "firework_launcher", weight: 1 }, // ! temporary
        { item: "vector", weight: 1 },
        { item: "negev", weight: 1 },
        { item: "mg5", weight: 1 },
        { item: "tango_51", weight: 1 }
        { item: "gauze", count: 5, weight: 1 },
        { item: "cola", weight: 1 },
        { item: "tablets", weight: 1 },
        { item: "medikit", weight: 1 }
        { item: "2x_scope", weight: 1 },
        { item: "4x_scope", weight: 1 },
        { item: "8x_scope", weight: 1 },
        { item: "15x_scope", weight: 1 }
        { item: "basic_helmet", weight: 1 },
        { item: "regular_helmet", weight: 1 },
        { item: "tactical_helmet", weight: 1 },
        { item: "basic_vest", weight: 1 },
        { item: "regular_vest", weight: 1 },
        { item: "tactical_vest", weight: 1 },
        { item: "basic_pack", weight: 1 },
        { item: "regular_pack", weight: 1 },
        { item: "tactical_pack", weight: 1 }
        { item: "deathray", weight: 1 }
        { item: "12g", count: 10, weight: 1 },
        { item: "556mm", count: 60, weight: 1 },
        { item: "762mm", count: 60, weight: 1 },
        { item: "firework_rocket", count: 5, weight: 1 }, // ! temporary
        { item: "9mm", count: 60, weight: 1 }
        { item: "frag_grenade", count: 2, weight: 1 },
        { item: "smoke_grenade", count: 2, weight: 1 },
        { item: "confetti_grenade", count: 3, weight: 1 } // ! temporary
        { item: "lewis_gun", weight: 1 },
        { item: "baseball_bat", weight: 1 },
        { item: "kbar", weight: 1 }
        { item: null, weight: 1 },
        { item: "stardust", weight: 1 },
        { item: "aurora", weight: 1 },
        { item: "nebula", weight: 1 },
        { item: "ghillie_suit", weight: 1 },
        { item: "basic_outfit", weight: 1 }
        { item: "m1_garand", weight: 1 },
        { item: "acr", weight: 1 },
        { item: "pp19", weight: 1 },
        { item: "barrett", weight: 1 },
        { item: "model_89", weight: 1 },
        { item: "coal", weight: 1 },
        { item: "henrys_little_helper", weight: 1 },
        { item: "candy_cane", weight: 1 }
        { item: "christmas_tree", weight: 1 },
        { item: "gingerbread", weight: 1 }
        { item: "s_g17", weight: 1 }
        { item: "usas12", weight: 1 },
        { item: "seax", weight: 1 }
        { item: "gas_can", weight: 1 }
        { item: "heap_sword", weight: 1 },
        { item: "maul", weight: 1 }
        { item: "ice_pick", weight: 1 }
        { item: "revitalizer", weight: 1 },
        { item: "hasanger", weight: 1 }
        { item: "leia", weight: 1 }
        { item: "limenade", weight: 1 },
        { item: "katie", weight: 1 }
        { item: "eipi", weight: 1 }
        { item: "123op", weight: 1 },
        { item: "radians", weight: 1 }
        { item: "developr_swag", weight: 1 }
        { item: "designr_swag", weight: 1 },
        { item: "composr_swag", weight: 1 }
        { item: "hazel_jumpsuit", weight: 1 }
        { item: "the_amateur", weight: 1 },
        { item: "the_pro", weight: 1 }
        { item: "forest_camo", weight: 1 }
        { item: "desert_camo", weight: 1 },
        { item: "arctic_camo", weight: 1 }
        { item: "bloodlust", weight: 1 }
        { item: "tomato", weight: 1 },
        { item: "greenhorn", weight: 1 }
        { item: "blue_blood", weight: 1 }
        { item: "silver_lining", weight: 1 }
        { item: "pot_o_gold", weight: 1 },
        { item: "gunmetal", weight: 1 }
        { item: "algae", weight: 1 }
        { item: "twilight_zone", weight: 1 }
        { item: "bubblegum", weight: 1 },
        { item: "sunrise", weight: 1 }
        { item: "sunset", weight: 1 }
        { item: "stratosphere", weight: 1 }
        { item: "mango", weight: 1 }
        { item: "snow_cone", weight: 1 },
        { item: "aquatic", weight: 1 }
        { item: "floral", weight: 1 }
        { item: "sunny", weight: 1 }
        { item: "ashfall", weight: 1 },
        { item: "volcanic", weight: 1 }
        { item: "solar_flare", weight: 1 }
        { item: "beacon", weight: 1 },
        { item: "wave_jumpsuit", weight: 1 }
        { item: "full_moon", weight: 1 }
        { item: "swiss_cheese", weight: 1 }
        { item: "target_practice", weight: 1 },
        { item: "zebra", weight: 1 }
        { item: "tiger", weight: 1 }
        { item: "bee", weight: 1 },
        { item: "armadillo", weight: 1 }
        { item: "printer", weight: 1 }
        { item: "distant_shores", weight: 1 }
        { item: "lemon", weight: 1 },
        { item: "flamingo", weight: 1 }
        { item: "peachy_breeze", weight: 1 }
        { item: "deep_sea", weight: 1 },
        { item: "basic_outfit", weight: 1 }
        { item: "peppermint", weight: 1 }
        { item: "spearmint", weight: 1 }
        { item: "coal", weight: 1 }
        { item: "verified", weight: 1 }
        { item: "no_kil_pls", weight: 1 }
        { item: "1st_birthday", weight: 1 }
        { item: "arena_closer", weight: 1 }
    ],
    scopes: [
        { item: "maul", weight: 1 },
        { item: "basic_vest", weight: 0.5 },
        { item: "tablets", weight: 0.2 },
        { item: "15x_scope", weight: 1.1 }
    ],
    equipment: [
        { item: "pp19", weight: 0.5 },
        { item: "regular_helmet", weight: 0.9 },
        { item: "tactical_helmet", weight: 1 },

        { item: "basic_vest", weight: 1 },
        { item: "s_g17", weight: 0.2 },
        { item: "tactical_vest", weight: 0.5 },

        { item: "s_g17", weight: 0.4 },
        { item: "regular_pack", weight: 0.3 },
        { item: "designr_swag", weight: 0.1 }
    ],
    ammo: [
        { item: "usas12", count: 1, weight: 0.75 },
        { item: "tactical_pack", count: 1, weight: 1 },
        { item: "basic_vest", count: 60, weight: 1 },
        { item: "9mm", count: 60, weight: 1 }
    ],
    throwables: [
        { item: "usas12", count: 1, weight: 0.75 },
        { item: "tactical_pack", count: 1, weight: 1 },
        { item: "basic_vest", count: 60, weight: 1 },
        { item: "acr", count: 2, weight: 1 }
        { item: "revitalizer", count: 1, weight: 1 },
        { item: "basic_vest", count: 60, weight: 1 },
        { item: "acr", count: 2, weight: 1 }
    ],
    special_guns: [
        { item: "cola", weight: 2.25 },
        { item: "regular_pack", weight: 1.1 },
        { item: "vector", weight: 1.05 },
        { item: "hp18", weight: 1 },
        { item: "gas_can", weight: 1 },
        { item: "model_37", weight: 1 },
        { item: "m3k", weight: 0.8 },
        { item: "s_g17", weight: 0.4 },
        { item: "model_89", weight: 1.8 },
        { item: "algae", weight: 0.75 },
        { item: "deathray", weight: 1.75 },
        { item: "usas12", weight: 0.5 },
        { item: "revitalizer", weight: 1.5 },
        { item: "g19", weight: 0.45 },
        { item: "sr25", weight: 0.05 },
        { item: "tango_51", weight: 7 }
    ],
    special_healing_items: [
        { item: "cola", weight: 3 },
        { item: "15x_scope", weight: 1 },
        { item: "medikit", weight: 1 },
        { item: "gauze", count: 5, weight: 3 }
    ],
    special_scopes: [
        { item: "s_g17", weight: 1 },
        { item: "basic_helmet", weight: 1 },
        { item: "8x_scope", weight: 1 },
        { item: "15x_scope", weight: 1 }
    ],
    special_equipment: [
        { item: "basic_helmet", weight: 1 },
        { item: "regular_helmet", weight: 0.3 },
        { item: "kbar", weight: 0.03 },

        { item: "s_g17", weight: 1 },
        { item: "regular_vest", weight: 0.3 },
        { item: "tactical_vest", weight: 0.03 },

        { item: "basic_pack", weight: 1 },
        { item: "regular_pack", weight: 0.3 },
        { item: "tactical_pack", weight: 0.03 }
    ],
    melee: [
        { item: "15x_scope", weight: 3 },
        { item: "basic_helmet", weight: 0.5 },
        { item: "kbar", weight: 2 }
    ],
    airdrop_equipment: [
        { item: "tactical_helmet", weight: 1 },
        { item: "tactical_vest", weight: 1 },
        { item: "tactical_pack", weight: 1 }
    ],
    airdrop_scopes: [
        { item: "kbar", weight: 1 },
        { item: "8x_scope", weight: 0.5 },
        { item: "15x_scope", weight: 0.0025 }
    ],
    airdrop_healing_items: [
        { item: "gauze", count: 5, weight: 1.5 },
        { item: "medikit", weight: 1 },
        { item: "cola", weight: 1 },
        { item: "tablets", weight: 1 }
    ],
    airdrop_skins: [
        { item: "ghillie_suit", weight: 2 }
    ],
    airdrop_melee: [
        { item: null, weight: 1 },
        { item: "tactical_pack", weight: 0.1 },
        { item: "crowbar", weight: 0.1 },
        { item: "sickle", weight: 0.1 },
        { item: "kbar", weight: 0.1 }
    ],
    airdrop_guns: [
        { item: "leia", weight: 1 },
        { item: "sr25", weight: 1 },
        { item: "pp19", weight: 0.95 },
        { item: "mosin", weight: 0.95 },
        { item: "tango_51", weight: 0.9 },
        { item: "mg5", weight: 0.9 },
        { item: "radio", weight: 0.1 }
    ],
    gold_airdrop_guns: [
        { item: "m1_garand", weight: 1.1 },
        { item: "acr", weight: 1 },
        { item: "pp19", weight: 1 },
        { item: "g19", weight: 0.9 }
    ],
    winter_skins: [
        { item: "peppermint", weight: 1 },
        { item: "spearmint", weight: 1 },
        { item: "coal", weight: 1 },
        { item: "henrys_little_helper", weight: 1 },
        { item: "candy_cane", weight: 1 }
    ],
    special_winter_skins: [
        { item: "christmas_tree", weight: 1 },
        { item: "gingerbread", weight: 1 }
    ],
    viking_chest_guns: [
        { item: "mg36", weight: 0.725 },
        { item: "cz600", weight: 0.7 },
        { item: "vepr12", weight: 0.6 },
        { item: "leia", weight: 0.6 },
        { item: "mosin", weight: 0.5 },
        { item: "vector", weight: 0.4 },
    ],
    river_chest_guns: [
        { item: "m16a4", weight: 0.01 },
        { item: "stoner_63", weight: 0.01 },
        { item: null, weight: 2 },
        { item: "g19", weight: 1.99 }
    ]
};
