import { autoDetect, colors, RgbColor } from 'launchpad.js'
const { colorFromHex, colorFromRGB } = colors;

const lp = autoDetect()


lp.once('ready', ( name: string ) =>{
    console.log(`Connected to ${name}`)  
})

lp.on('buttonDown', ( button: any) => {
    
})