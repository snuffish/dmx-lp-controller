



class Grid {
    private matrix = new Map<string, number>()

    constructor() {
        this.setupMatrix()
    }

    setupMatrix() {
        for (let x = 0; x <= 8; x++) {
            for (let y = 0; y <= 8; y++) {
                if ((x === 0 && y === 8) || x === 8 && y === 0)
                    continue
                
                this.matrix.set(`${x}x${y}`, 0)
            }
        }
    }
}

const grid = new Grid()

