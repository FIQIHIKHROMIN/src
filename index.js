// config untuk konek ke database
// controllers untuk logic dari apk yang mau dibuat
// public untuk menulis java script yang nanti akan ditempelkan di view ex: put, delete
// viws untuk nyimpan file ejs
// routes untuk menyimpan route

const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 4000

const todosRouter = require("./routes/todos")

app.set("view engine", "ejs")

app.use("/static", express.static(__dirname + "/public"))
app.use(express.urlencoded ({ extended: true}))
app.use(cors())

app.use("/", todosRouter)

app.listen(PORT, () => {
    console.log("app running on port", PORT)
})