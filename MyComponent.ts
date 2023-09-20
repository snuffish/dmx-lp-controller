import Emitter from "./src/Emitter"

class MyComponent {
    constructor() {
        setTimeout(() => {
            Emitter.emit('play', {})
        }, 2000)
    }

    private sendEvent() {

    }
}

export default MyComponent