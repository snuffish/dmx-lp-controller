import { autoDetect } from 'launchpad.js';
import LedBarRGB from '../fixtures/LedBarRGB';
import { DMX } from '../utils';
import Grid from './Grid';

function Application(device: string) {
    console.log(`Connected to ${device}`)
    
    DMX.clear()
    lp.allOff()
    
    const grid = new Grid(lp)
    const fixture = new LedBarRGB({ channelMode: 3 })
    grid.addFixture(fixture)
}

let lp = autoDetect()
lp.once('ready', Application)
 
