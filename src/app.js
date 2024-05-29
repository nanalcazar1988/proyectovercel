import express from "express"

const app = express()

app.set("port", process.env.PORT || 6000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json({ "message": "Welcom to my messages API"})
})

export default app;