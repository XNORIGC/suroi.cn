import { Throwables } from "@common/definitions/throwables";

import { GamePlugin } from "../pluginManager";

/**
 * Plugin to give the player infinite throwables
 */
export class InfiniteThrowablesPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on("game_tick", game => {
            try {
                game.livingPlayers.forEach(player => Throwables.definitions.forEach(({ idString }) => player.inventory.items.getItem(idString) === 0 && player.giveThrowable(idString, 1)!));
            } catch { }
        });
    }
}
