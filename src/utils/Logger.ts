import { Button } from "../types";

export const buttonLogOutput = (button: Button) => `[${button.event}] ${JSON.stringify(button)}`
