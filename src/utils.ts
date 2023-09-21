import { colorFromHex } from 'launchpad.js/dist/colorHelpers';
import type { UniverseData } from 'dmx-ts'
import type { RgbColor } from 'launchpad.js'
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers'
import fetch from 'node-fetch'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const arrayEquals = (arr1: Array<any>, arr2: Array<any>) => JSON.stringify(arr1) == JSON.stringify(arr2)

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
    // const req = await fetch(`${BASE_URL}/dmx/clear`)
}

const hexToRgb = (hex: string): RgbColor => {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b]
}

// const getDarkenHex = () => getDarkenHexColor(randomHex(), -40)

const colorToRGB = (color: RgbColor): RgbColor => {
    return color.map(v => v * 255) as RgbColor
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

export const range = (start: number = 0, stop: number = 8, step: number = 1) =>
    Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step))



/**
const filter1 = (value: number) => value * 2
const filter2 = (value: number) => value * .8
const output = (value: number) => `Output: ${value}`

console.log(pipe(filter1, filter2, output)(10)) ==> Output: 16
 */
export const pipe = (...fns: Function[]) => (val: any) => fns.reduce((prev, fn) => fn(prev), val)


const DMX = {
    update,
    clear,
    strobe
}

const COLORS = {
    hexToRgb,
    randomColor,
    getDarkenRGBColor
}

const LP = {
    colorFromRGB,
    colorFromHex,
    colorToRGB
}

const MATH = {
    randomNumber
}

export {
    DMX,
    COLORS,
    LP,
    MATH
}
