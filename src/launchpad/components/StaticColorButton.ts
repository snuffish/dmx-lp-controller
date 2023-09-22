import { ButtonEvent } from "../../types";
import { DMX } from "../../utils";
import { buttonLogOutput } from "../Logger";
import ButtonComponent from "./ButtonComponent";

export default class StaticColorButton extends ButtonComponent {
    onPressed(): void {
        console.log(buttonLogOutput({...this.position, event: ButtonEvent.DOWN}))
        let i = 0
        const dmx = this.color.reduce((acc, val): any => ({ ...acc, [++i]: val}), {})

        DMX.update(dmx)
    } 
}
