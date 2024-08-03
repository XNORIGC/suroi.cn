import { Throwables } from "@common/definitions";

import { Events, GamePlugin } from "../pluginManager";

/**
 * Plugin to give the player infinite throwables
 */
export class InfiniteThrowablesPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on(Events.Game_Tick, game => {
            game.livingPlayers.forEach(player => Throwables.definitions.forEach(({ idString }) => player.inventory.items.getItem(idString) == 0 && player.giveThrowable(idString, 1)));
        });
    }
}
