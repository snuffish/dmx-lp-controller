import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Running!')
})

app.post('/dmx/update', (req, res) => {
    // Update the DMX-output

    res.sendStatus(200)
})

app.get('/dmx/clear', (req, res) => {
    // Clear the DMX-output to 0,0,0...
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})