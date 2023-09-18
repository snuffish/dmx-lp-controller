import { allXy, range } from "launchpad.js/dist/internal/utils"
import { LP, arrayEquals } from "../utils"
import { ILaunchpad, RgbColor } from "launchpad.js"
import { Color } from "./Color"
import { colorFromRGB } from "launchpad.js/dist/colorHelpers"

let grid: Grid.Item[]

export namespace Grid {
    export type Item = {
        xy: [number, number],
        color: {
            rgb: RgbColor
            setColor: Function
        },
        onTrigger?: Function,
        clear: Function
    }

    export type Button = { xy: Item['xy'], rgb: RgbColor }
    export namespace Button {
        export enum Event { DOWN = 'DOWN', UP = 'UP' }
    }

    export const getItem = (position: string | Item['xy']): Item | undefined => {
        let posArr = typeof position === 'string' ? position.split('x').map(v => parseInt(v)) : position
        return grid.find((item: Item) => arrayEquals(posArr, item.xy))
    }

    export namespace Panel.Right {
        export const STOP_SOLO_MUTE = () => getItem('8x8')
    }

    export namespace Panel.Top {
        export const SESSION = () => getItem('4x0')
        export const DRUMS = () => getItem('5x0')
        export const KEYS = () => getItem('6x0')
        export const USER = () => getItem('7x0')
    }
}

const CreateGrid = (lp: ILaunchpad): Grid.Item[] => {
    grid = allXy(9, 9).map(([x, y]) => {
        let data: Grid.Item
        data = {
            xy: [x, y],
            color: {
                rgb: Color.RGB.off,
                setColor: (color: RgbColor) => {
                    data.color.rgb = color
                    lp.setButtonColor(data.xy, colorFromRGB(color))
                }
            },
            clear: () => data.color.setColor(Color.RGB.off)
        }

        return data
    })

    return grid

}

export default CreateGrid
