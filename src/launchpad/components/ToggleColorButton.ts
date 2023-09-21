import { DMX, arrayToMap } from "../../utils";
import ButtonComponent from "./ButtonComponent";

export default class ToggleColorButton extends ButtonComponent {
    onPressed(): void {
        let i = 0
        const dmx = arrayToMap(this.color)

        DMX.update(dmx)
    }

    onRelease(): void {
        DMX.clear()
    }
}

