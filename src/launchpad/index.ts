import { LaunchpadMK3 } from 'launchpad.js';
//@ts-nocheck
import x, { ILaunchpad, RgbColor, autoDetect } from 'launchpad.js'
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers'
import { lpEmitter } from '../emitter'
import { ButtonEvent } from '../types'
import { DMX } from '../utils'
import BaseComponent from './components/BaseComponent'
import Color from '../utils/Color'
import { BaseLaunchpad } from 'launchpad.js/dist/launchpads/base/BaseLaunchpad';

const Launchpad = () => {
    const lp: LaunchpadMK3 = autoDetect({
        debug: false
    }) as LaunchpadMK3

    console.log(lp.mapButtonFromXy([8,8]))

    const clear = () => lp.allOff()

    const setButtonColor = (component: BaseComponent, color: RgbColor) => {
        lp.setButtonColor(component.position, colorFromRGB(color))
    }

    lp.once('ready', (device: string) =>  DMX.clear() && console.log(`Connected to ${device}`))
        .on('buttonDown', (button: any) => lpEmitter.emit('buttonPressed', button, ButtonEvent.DOWN))
        .on('buttonUp', (button: any) => lpEmitter.emit('buttonPressed', button, ButtonEvent.UP))
    
    // @ts-ignore
    

    lpEmitter
        .on('setButtonColor', setButtonColor)
        .on('clear', clear)

    return {
        clear
    }
}

export default Launchpad
