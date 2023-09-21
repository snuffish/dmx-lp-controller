// @ts-nocheck
import { ILaunchpad } from "launchpad.js"
import FixtureBase from "../fixtures/FixtureBase"
import { Button } from "./components/BaseComponent"

type Size = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type GridMatrix = Button & [Size, Size]
export type GridButton = Button

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
