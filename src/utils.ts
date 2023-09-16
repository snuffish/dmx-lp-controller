import { colorFromHex } from 'launchpad.js/dist/colorHelpers';
import type { UniverseData } from 'dmx-ts'
import type { RgbColor } from 'launchpad.js'
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers'
import fetch from 'node-fetch'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

const sendRequest = async (route: string, data: any) => {
    const headers = new Map()

    const reqObj = {
        headers
    }

    headers.set('Content-Type', 'application/json')


    const req = await fetch(`${BASE_URL}${route}}`, {
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

const clear = async() => {
    const req= await fetch(`${BASE_URL}/dmx/clear`)
}

const hexToRgb = (hex: string): RgbColor => {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b]
}

const randomHex = (): string => Math.floor(Math.random() * 16777215).toString(16)

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

const DMX = {
    update,
    clear
}

const COLORS = {
    hexToRgb,
    randomHex,
    randomRGB
}

const LP = {
    colorFromRGB,
    colorFromHex,
    colorToRGB
}

export {
    DMX,
    COLORS,
    LP
}
