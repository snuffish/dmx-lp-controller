import { DMX } from "../../utils";
import ButtonComponent from "./ButtonComponent";

export default class StaticColorButton extends ButtonComponent {
    onPressed(): void {
        let i = 0
        const dmx = this.color.reduce((acc, val): any => ({ ...acc, [++i]: val}), {})

        DMX.update(dmx)
    } 
}
