
// @ts-nocheck
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers';
import { autoDetect, Surface, Drawing, colors } from 'launchpad.js';
import { COLORS, DMX, GRID, MATH } from './src/utils';
import { IGrid } from './src/types';
import { UniverseData } from 'dmx-ts';
const { colorFromHex, defaultColors } = colors;

const lp = autoDetect();
const grid = GRID.generateGrid()



const moveSectors = () => {
    
}

lp.once('ready', () => {
    DMX.clear()
})