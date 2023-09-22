import { ButtonEvent } from "../../types";
import { DMX, arrayToMap } from "../../utils";
import { buttonLogOutput } from "../Logger";
import ButtonComponent from "./ButtonComponent";

export default class StaticColorButton extends ButtonComponent {
    onPressed(): void {
        console.log(buttonLogOutput({...this.position, event: ButtonEvent.DOWN}))
        const dmx = arrayToMap(this.color, 1)
        DMX.update(dmx)
    } 
}
