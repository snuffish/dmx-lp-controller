import { autoDetect } from 'launchpad.js';
import LedBarRGB from '../fixtures/LedBarRGB';
import { DMX } from '../utils';
import Grid from './Grid';
import LedBarRGB_8MODE from '../fixtures/LedBarRGB_8MODE';

function Application(device: string) {
    console.log(`Connected to ${device}`)
    const grid = new Grid(lp)

    DMX.clear()
    lp.allOff()

    const fixture = new LedBarRGB({ channelMode: 3 })
    grid.addFixture(fixture)

    const fixture2 = new LedBarRGB_8MODE({ channelMode: 3})
    grid.addFixture(fixture2)
}

let lp = autoDetect()
lp.once('ready', Application)
 