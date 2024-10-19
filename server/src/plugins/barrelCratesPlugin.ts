import { Obstacles } from "@common/definitions/obstacles";
import { weightedRandom } from "@common/utils/random";

import { GamePlugin } from "../pluginManager";

/**
  * Plugin to make crates have a chance to generate a barrel when destroyed
 */
export class BarrelCratesPlugin extends GamePlugin {
    readonly config = {
        chance: 0.3,
        obstacles: ["barrel", "super_barrel", "loot_barrel", "small_refinery_barrel", "large_refinery_barrel"],
        weights:   [    5,           4,             0.5,                  2,                       2           ]
    };

    protected override initListeners(): void {
        this.on("obstacle_did_destroy", ({ obstacle: { game, position, layer }, source }) => {
            if (Math.random() < this.config.chance) {
                const definition = Obstacles.fromString(weightedRandom(this.config.obstacles, this.config.weights));
                const obstacle = game.map.generateObstacle(definition, position, { layer });
                if (!obstacle) return;
                obstacle.damage({ amount: definition.health - 30, source });
                obstacle.scale = 1;
                obstacle.hitbox.scale(2);
            }
        });
    }
}
