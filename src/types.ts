import { ButtonIn } from "launchpad.js"

export type AppLaunchpadProps = {
    debug: boolean
}

export type AppDMXProps = {
    serialPort: string
    serverPort: number
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type Button = ButtonIn & { event: ButtonEvent }

export enum ButtonEvent {
  DOWN = 'DOWN',
  UP = 'UP'
}