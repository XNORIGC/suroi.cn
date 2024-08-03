import { Events, GamePlugin } from "../pluginManager";

/*
 * Plugin to log events
 */
export class EventLoggerPlugin extends GamePlugin {
    protected override initListeners(): void {
        Object.keys(Events).filter(key => !["Player_Update", "Player_Input", "Game_Tick"].includes(key)).forEach(eventString => this.on(Events[eventString as keyof typeof Events], () => console.log(eventString)));
    }
}
