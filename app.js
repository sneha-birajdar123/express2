import express from "express"
const app = express()
const PORT = 5000
app.use(express.json())


app.get("/", (req, res) => {
    try {
        res.status(200).json({message : "Hello fatimah"})
    } catch (error) {
        console.log(error);
    }
})

app.post("/api/register", (req, res) => {
    try {
        let userInput = req.body
        console.log(userInput);
        res.status(200).json(userInput)
    } catch (error) {
        console.log(error);
    }
})

// using PUT api

app.put("/api/users/:id", (req, res) => {
    try {
        let userID = req.params.id
        console.log(userID);
        res.status(200).json(userID)
    } catch (error) {
        console.log(error);
    }
})

app.get("/link/:url", (req, res) => {
    try {
        let userUrl = req.params.url
        console.log(userUrl);
        res.status(200).redirect(`https://${userUrl}`)
    } catch (error) {
        console.log(error);
    }
})

app.get("/search", (req, res) => {
    try {
        let query = req.query
        console.log(query);
        res.status(200).json(query)
    } catch (error) {
        console.log(error);
    }
})


app.listen(PORT, () => {
    console.log(`The server is up and running at ${PORT}`);

})