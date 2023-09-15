type ColorTuple = [number, number, number]

type Position = {
    nr: number,
    x: number,
    y: number
}

type Color = {
    rgb: ColorTuple,
    midi: ColorTuple
}

type ButtonProps = {
    position: Position,
    color: Color
}

export default class Button {
    private position: Position
    private color: Color

    constructor(lp: any, props: ButtonProps) {
        this.position = props.position
        this.color = props.color
    }

    setColor(color: ColorTuple) {

    }
}
