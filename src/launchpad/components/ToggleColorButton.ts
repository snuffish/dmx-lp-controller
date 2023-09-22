import { DMX, arrayToMap } from "../../utils";
import ButtonComponent from "./ButtonComponent";

export default class ToggleColorButton extends ButtonComponent {
    onPressed(): void {
        const dmx = arrayToMap(this.color)

        DMX.update(dmx)
    }

    onRelease(): void {
        DMX.clear()
    }
}

