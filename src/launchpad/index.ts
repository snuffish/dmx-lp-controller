import { ILaunchpad, RgbColor, autoDetect } from 'launchpad.js';
import { colorFromRGB } from 'launchpad.js/dist/colorHelpers';
import { lpEmitter } from '../emitter';
import { ButtonEvent } from '../types';
import BaseComponent from './components/BaseComponent';

const Launchpad = () => {
     const lp:  ILaunchpad = autoDetect({
        debug: true
    })

    const clear = () => lp.allOff()

    const setButtonColor = (component: BaseComponent, color: RgbColor) => {
        lp.setButtonColor(component.position, colorFromRGB(color))
    }

    lp.once('ready', (device: string) => console.log(`Connected to ${device}`))
        .on('buttonDown', (button: any) => lpEmitter.emit('buttonPressed', button, ButtonEvent.DOWN))
        .on('buttonUp', (button: any) => lpEmitter.emit('buttonPressed', button, ButtonEvent.UP))
        .on('buttonDown', button => console.log(button))
    

    lpEmitter
        .on('setButtonColor', setButtonColor)
        .on('clear', clear)

    return {
        clear
    }
}

export default Launchpad
