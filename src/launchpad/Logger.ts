import { Button } from '../emitter'

export const buttonLogOutput = (button: Button) => `[${button.event}] ${JSON.stringify(button)}`