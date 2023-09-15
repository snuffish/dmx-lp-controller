// @ts-nocheck
import { autoDetect, colors } from 'launchpad.js';
const { colorFromHex, colorFromRGB } = colors;
import fetch from 'node-fetch'

const lp = autoDetect();

// // just a basic color setup
// const noteColors = {
//   54: colorFromHex('#23c3b6'),
//   55: colorFromHex('#3a0280'),
//   44: colorFromHex('#fff1c2'),
//   // dark colors are shown as dimmed lights on the launchpad
//   45: colorFromHex('#4b2e53'),
// };

let DMX_OFF = {}
for (let address = 0; address <= 512; address++) {
    DMX_OFF[address] = 0
}

const BLUE = [21, 21, 191]
const GREEN = [52, 191, 21]
const RED = [142, 27, 83]
const YELLOW = [177, 196, 37]

const keyMap = {
    54: {
        color: GREEN
    },
    55: {
        color: BLUE
    },
    44: {
        color: RED
    },
    45: {
        color: YELLOW
    }
}

const getColor = (color: any) => colorFromRGB(color)

const sendDMX = (data: any) => {
    fetch('http://localhost:3000/api/dmx', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}

lp.once('ready', (name) => {
  console.log(`Connected to ${name}`);

  lp.setButtonColor(54, getColor(keyMap[54].color))
  lp.setButtonColor(55, getColor(keyMap[55].color))
  lp.setButtonColor(44, getColor(keyMap[44].color))
  lp.setButtonColor(45, getColor(keyMap[45].color))

//   for (const note of Object.keys(noteColors)) {
//     lp.setButtonColor(note, noteColors[note]);
//   }
});

// set to true to pulse instead
const pulse = true;
const flashColor = 5;
const states = {};

lp.on('buttonDown', (button) => {
  const { nr } = button;
  console.log(`Pressed => ${nr}`);

  if (nr == 19) {
    sendDMX(DMX_OFF)
  }
  
  try {
    const rgb = keyMap[nr].color
    
    const dmxData = {
        1: rgb[0],
        2: rgb[1],
        3: rgb[2]
    }

    sendDMX(dmxData)

  } catch (err) {}

//   // we are currently flashing
//   if (states[note]) {
//     const offColor = note in noteColors ? noteColors[note] : [0, 0, 0];

//     // reset the color to stop flashing
//     lp.setButtonColor(note, offColor);
//   } else if (pulse) {
//     lp.pulse(note, flashColor);
//   } else {
//     lp.flash(note, flashColor);
//   }

//   states[note] = !states[note];
});
