import { Layer } from "@common/constants";
import { Vec } from "@common/utils/vector";

import { GamePlugin } from "../pluginManager";

/**
 * Plugin to teleport a player to a map ping when they send one
 */
export class TeleportPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on("player_did_map_ping", ({ player, position }) => {
            if ((position.x + 200) % this.game.map.width <= 400 && (position.y + 200) % this.game.map.height <= 400) {
                player.layer = Layer.Ground;
            } else {
                player.position = Vec.clone(position);
            }
            player.setDirty();
            this.game.grid.updateObject(player);
        });
    }
}
