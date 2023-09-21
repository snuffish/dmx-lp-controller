import Launchpad from './launchpad'
import ButtonComponent from './launchpad/components/ButtonComponent'
import StaticColorButton from './launchpad/components/StaticColorButton'
import ToggleColorButton from './launchpad/components/ToggleColorButton'
import { DMX } from './utils'
import Color from './utils/Color'

const lp = Launchpad()
lp.clear()

const toggleColorButton = new ToggleColorButton([0,8]).setRandomColor()
const staticColorButton = new StaticColorButton([1,8]).setRandomColor()

const stopBtn = new ButtonComponent([8,8])
stopBtn.color = Color.RGB.red
stopBtn.onPressed = () => DMX.clear()


