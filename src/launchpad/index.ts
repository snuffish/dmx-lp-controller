import { autoDetect } from 'launchpad.js';
import LedBarRGB from '../fixtures/LedBarRGB';
import { DMX } from '../utils';
import Grid from './Grid';

function Application(device: string) {
    console.log(`Connected to ${device}`)
    const grid = new Grid(lp)

    DMX.clear()
    lp.allOff()

    const fixture = new LedBarRGB({ channelMode: 3 })
    grid.addFixture(fixture)
}

let lp = autoDetect()
lp.once('ready', Application)
 