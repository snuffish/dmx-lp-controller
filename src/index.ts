import Launchpad from './launchpad'
import BaseComponent from './launchpad/components/BaseComponent'
import ButtonComponent from './launchpad/components/ButtonComponent'
import SliderComponent from './launchpad/components/SliderComponent'
import StaticColorButton from './launchpad/components/StaticColorButton'
import ToggleColorButton from './launchpad/components/ToggleColorButton'
import { DMX } from './utils'
import Color from './utils/Color'

const lp = Launchpad()
lp.clear()

const slider = new SliderComponent(0)
console.log(slider instanceof BaseComponent)
new SliderComponent(2)
new SliderComponent(4)
new SliderComponent(6)

// new StaticColorButton([0,8]).setRandomColor()
new ToggleColorButton([1,8]).setRandomColor()
// new ToggleColorButton([2,8]).setRandomColor()
// new ToggleColorButton([3,8]).setRandomColor()
// new StaticColorButton([4,8]).setRandomColor()
// new ToggleColorButton([5,8]).setRandomColor()
// new ToggleColorButton([6,8]).setRandomColor()
// new ToggleColorButton([7,8]).setRandomColor()




const stopBtn = new ButtonComponent([8,8])
stopBtn.color = Color.RGB.red
stopBtn.onPressed = () => DMX.clear()


