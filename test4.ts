import { colorFromRGB } from 'launchpad.js/dist/colorHelpers';

// @ts-nocheck
import { autoDetect, Surface, Drawing, colors } from 'launchpad.js';
import { COLORS, GRID, MATH } from './src/utils';
import { IGrid } from './src/types';
const { colorFromHex, defaultColors } = colors;

const lp = autoDetect();
const grid = GRID.generateGrid()

for (let pad of grid.values()) {
    pad.rgb = COLORS.randomRGB()
}

console.log(Object.keys(defaultColors))
const changeColors = () => {
    for (let pad of grid.values()) {
        lp.setButtonColor(pad.xy, colorFromRGB(COLORS.randomRGB()))
    }
}

const flashButtons = () => {
    let i = 0
    for (let pad of grid.values()) {
        if (i % 5 === 0) {
            lp.pulse(pad.xy, COLORS.randomColor())
        }
        i++
    }
}

const dimmerButtons = () => {


}

lp.once('ready', (name) => {
    const ratio = 2
    const noice = MATH.randomNumber(0.1,0.2)

    setInterval(changeColors, ratio * 500 * noice)
    setInterval(flashButtons, ratio * 175 * noice)
    // setInterval(dimmerButtons, 250)
})

