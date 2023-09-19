import { Button, ButtonIn, ILaunchpad, RgbColor } from "launchpad.js"
import FixtureBase from "../fixtures/FixtureBase"

export type GridButton = Button
export enum ButtonEvent { DOWN = 'DOWN', UP = 'UP' }

class Grid {
    private lp: ILaunchpad
    private fixtures: Set<FixtureBase> = new Set()

    constructor(lp: ILaunchpad) {
        this.lp = lp
    }

    addFixture(fixture: FixtureBase) {
        fixture.lp = this.lp
        this.fixtures.add(fixture)
    }
}

export default Grid
