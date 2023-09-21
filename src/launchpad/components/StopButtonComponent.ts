import Color from "../../utils/Color";
import { GridMatrix } from "../Grid";
import ButtonComponent from "./ButtonComponent";

class StopButtonComponent extends ButtonComponent {
    constructor(position: GridMatrix) {
        super(position)
        this.color = Color.RGB.red 
    }
}

export default StopButtonComponent
