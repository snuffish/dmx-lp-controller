import Launchpad from './launchpad'
import ButtonComponent from './launchpad/components/ButtonComponent'
import SliderComponent from './launchpad/components/SliderComponent'
import StaticColorButton from './launchpad/components/StaticColorButton'
import ToggleColorButton from './launchpad/components/ToggleColorButton'
import { DMX } from './utils'
import Color from './utils/Color'

const lp = Launchpad()
lp.clear()

new SliderComponent(0)
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


