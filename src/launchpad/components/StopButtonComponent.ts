import { DMX } from "../../utils";
import { Color } from "../Color";
import { GridMatrix } from "../Grid";
import ButtonComponent from "./ButtonComponent";

class StopButtonComponent extends ButtonComponent {
    constructor(position: GridMatrix) {
        super(position)
        this.color = Color.RGB.red 
    }

    override onPressed(): void {
        DMX.clear()
    }
}

export default StopButtonComponent
