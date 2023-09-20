<<<<<<< HEAD
import { ILaunchpad, autoDetect } from 'launchpad.js'
import Emitter from '../Emitter'
import { DMX } from '../utils'
import { Color } from './Color'
import ButtonComponent from './components/ButtonComponent'
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers'

class Launchpad {
    private _lp: ILaunchpad;
    private _grid: Set<any> = new Set()

    constructor() {
        DMX.clear()
        this._lp = autoDetect()
        this.setupListeners()
    }

    public clear() {
        this._lp.allOff()
        return true
    }

    private setupListeners() {
        this._lp.once('ready', (device: string) => this.clear() && Emitter.emit('lpReady', device))

        Emitter.on('addButton', (component: ButtonComponent) => {
            this._grid.add(component)
            this._lp.setButtonColor(component.position, Color.LP.random())
        })

        this._lp.on('buttonDown', button => Emitter.emit('componentPressed', button))

        Emitter.on('setButtonColor', (component: any) => {
            const [r, g, b] = component.color
            DMX.update({ 1: r, 2: g, 3: b })
        })
    }
}

export default Launchpad
=======
// import { autoDetect } from 'launchpad.js';
// import LedBarRGB from '../fixtures/LedBarRGB';
// import { DMX } from '../utils';
// import Grid from './Grid';

// function Application(device: string) {
//     console.log(`Connected to ${device}`)
    
//     DMX.clear()
//     lp.allOff()
    
//     const grid = new Grid(lp)
//     const fixture = new LedBarRGB({ channelMode: 3 })
//     grid.addFixture(fixture)
// }

// let lp = autoDetect()
// lp.once('ready', Application)
 
class Launchpad {

}

export default Launchpad
>>>>>>> 343cb0067e2f659eb1ca1b34c681d150275d1388
