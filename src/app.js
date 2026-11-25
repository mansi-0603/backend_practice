const express = require('express');

const app = express()
app.use(express.json());


const note = []

app.get("/note", (req, res) => {

    res.status(200).json({
        message: "notes fetched! ",
        notes: note
    })

});

app.post("/note", (req, res) => {

    note.push(req.body)

    res.status(201).json({
        message: "post creation done!"
    })

})

app.delete("/note/:idx", (req, res) => {

    const index = req.params.idx;

    if (index >= 0 && index < note.length) {

        note.splice(index, 1)

        res.status(200).json({
            message: "note deleted"
        })

    } else {
        res.status(404).json({
            message: "note not found."
        })
    }


})


app.patch('/note/:id', (req, res) => {
    const idx = req.params.id;

    if(!note[idx]){
        
        res.status(404).json({
            message: "note not found"
        })
        return
    }
    const title = req.body.title;

    note[idx].title = title;

    res.status(200).json({
        message: "note updated!"
    })
})

module.exports = app;