import { RgbColor } from "launchpad.js";
import { colorFromRGB } from "launchpad.js/dist/colorHelpers";

export namespace Color {
    export const RGB = {
        off: [0, 0, 0] as RgbColor,
        red: [255, 0, 0] as RgbColor,
        green: [0, 255, 0] as RgbColor,
        blue: [0, 0, 255] as RgbColor,
        orange: [255, 68, 0] as RgbColor,
        
        random: (): RgbColor => {
            const num = Math.round(0xffffff * Math.random());
            const r = num >> 16;
            const g = num >> 8 & 255;
            const b = num & 255;
        
            return [r, g, b]
        }
    }

    export const HEX = {
        random: () => Math.floor(Math.random() * 16777215).toString(16),
        toRGB: (hexValue: string): RgbColor => {
            const bigint = parseInt(hexValue, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
        
            return [r, g, b]
        }
    }

    export const LP = {
        random: () => colorFromRGB(RGB.random())
    }
}