import { dmxnet } from 'dmxnet'

const net = new dmxnet({
    log: { level: 'info' }, // Winston logger options
    oem: 0, // OEM Code from artisticlicense, default to dmxnet OEM.
    // esta: 0, // ESTA Manufacturer ID from https://tsp.esta.org, default to ESTA/PLASA (0x0000)
    sName: "Text", // 17 char long node description, default to "dmxnet"
    lName: "Long description", // 63 char long node description, default to "dmxnet - OpenSource ArtNet Transceiver"
    hosts: ["127.0.0.1"] // Interfaces to listen to, all by default
  })