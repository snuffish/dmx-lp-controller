import { RgbColor } from "launchpad.js"
import { Grid } from "./launchpad/Grid"

export type AppLaunchpadProps = {
    debug: boolean
}

export type AppDMXProps = {
    serialPort: string
    serverPort: number
}