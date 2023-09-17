import { Color } from "./src/launchpad/Color"
import createGrid, { Grid } from "./src/launchpad/Grid"

/**
const filter1 = (value: number) => value * 2
const filter2 = (value: number) => value * .8
const output = (value: number) => `Output: ${value}`

console.log(pipe(filter1, filter2, output)(10)) ==> Output: 16
 */
const pipe = (...fns: Function[]) => (val: any) => fns.reduce((prev, fn) => fn(prev), val)

