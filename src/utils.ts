import { colorFromHex } from 'launchpad.js/dist/colorHelpers';
import type { UniverseData } from 'dmx-ts'
import type { RgbColor } from 'launchpad.js'
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers'
import fetch from 'node-fetch'
import { GridButton, IGrid } from './types';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

const sendRequest = async (route: string, data: any) => {
    const req = await fetch(`${BASE_URL}${route}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

const update = async (data: UniverseData) => {
    await sendRequest('/dmx/update', data)
}

const clear = async () => {
    const req = await fetch(`${BASE_URL}/dmx/clear`)
}

const hexToRgb = (hex: string): RgbColor => {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b]
}

const randomHex = (): string => Math.floor(Math.random() * 16777215).toString(16)

const getDarkenHex = () => getDarkenHexColor(randomHex(), -40)

const randomRGB = (): RgbColor => {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;

    return [r, g, b]
}

const colorToRGB = (color: RgbColor): RgbColor => {
    return color.map(v => v * 255) as RgbColor
}

const getGridButton = (grid: IGrid, xy: GridButton['xy']): GridButton | false => {
    console.log("GRID => ", grid)
    for (let item of grid) {
        if (JSON.stringify(item.xy) == JSON.stringify(xy))
            return item
    }

    return false
}

const randomColor = (): number => randomNumber()
    
const randomNumber = (min: number = 0, max: number = 127): number => Math.round(Math.random() * (max - min) + min);

const getDarkenHexColor = (hex: string, amount: number): any => {
    var num = parseInt(hex, 16);
    var r = (num >> 16) + amount;
    var b = ((num >> 8) & 0x00FF) + amount;
    var g = (num & 0x0000FF) + amount;
    var newColor = g | (b << 8) | (r << 16);
    return newColor.toString(16);
}

function getDarkColor(amountDarker: number = 20): string {
    var color = '';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * amountDarker);
    }
    return color;
}

const getDarkenRGBColor = (): RgbColor => {
    return hexToRgb(getDarkColor(80))
}
  

const generateGrid = (): IGrid => {
    let grid: IGrid = new Set()

    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 8; y++) {
            grid.add({
                xy: [x, y],
                rgb: [0,0,0]
            })
        }
    }

    return grid;
}

const strobe = (enabled: boolean, speed: number) => {
    if (enabled) {
        DMX.update({
            2: speed
        })
    } else {
        DMX.update({
            2: 0
        })
    }
}

const DMX = {
    update,
    clear,
    strobe
}

const COLORS = {
    hexToRgb,
    randomHex,
    randomRGB,
    randomColor,
    getDarkenRGBColor
}

const LP = {
    colorFromRGB,
    colorFromHex,
    colorToRGB
}

const GRID = {
    generateGrid,
    getGridButton
}

const MATH = {
    randomNumber
}

export {
    DMX,
    COLORS,
    LP,
    GRID,
    MATH
}
