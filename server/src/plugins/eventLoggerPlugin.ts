import { Events, GamePlugin } from "../pluginManager";

/*
 * Plugin to log events
 */
export class EventLoggerPlugin extends GamePlugin {
    protected override initListeners(): void {
        (Object.keys(Events) as Array<keyof typeof Events>).filter(key => !["player_update", "player_input", "game_tick"].includes(key)).forEach(eventString => this.on(eventString, () => console.log(eventString)));
    }
}
