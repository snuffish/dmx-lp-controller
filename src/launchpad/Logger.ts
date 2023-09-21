import { Button } from "./components/ButtonComponent";

export const buttonLogOutput = (button: Button) => `[${button.event}] ${JSON.stringify(button)}`
