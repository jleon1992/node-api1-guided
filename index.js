const express = require('express')
const shortid = require('shortid');

const server = express()

server.use(express.json())


let lessons = [
    { id: 1, name: "Node" },
    { id: 2, name: "JSON" },
    { id: 3, name: "HTML" },
];

let hubs = [
    { id: 1, name: 'New hub', lessonId: 1, cohort: 'Web32'},
    { id: 2, name: 'Json hub', lessonId: 2, cohort: 'Web33'},
    { id: 3, name: 'HTML hub', lessonId: 3, cohort: 'Web34'}
]

// Show a list of lessons
server.get('/api/lessons', (req, res) => {
    res.status(200).json(lessons)
})

// Show a list of lessons
server.post('/api/lessons', (req, res) => {
    const lesson = req.body

    lessons.push(lesson)

    res.status(201).json(lessons)
})


server.get('/api/lessons/:id', (req, res) => {
    const id = req.params.id

    let found1 = lessons.find(lesson => lesson.id == id)

    res.status(200).json(found1)
})

// Update lesson
server.patch('/api/lessons/:id', (req, res) => {

    const id = req.params.id

    const changes = req.body;

    let found1 = lessons.find(lesson => lesson.id == id)

    console.log(found1)
    if (found1) {
        Object.assign(found1, changes);

        res.status(200).json(lessons);
    } else {
        res.status(404).json({ message: `There is no lesson with id ${id}` });
    }
})

// Delete lesson
server.delete('/api/lessons/:id', (req, res) => {
    const id = req.params.id

    lessons = lessons.filter(lesson => lesson.id != id)
    console.log(lessons)
    res.status(204).end()
})



// Show a list of hubs
server.get('/api/hubs', (req, res) => {
    res.status(200).json(hubs)
})

// Add a hub
server.post('/api/hubs', (req, res) => {
    const hub = req.body

    hubs.push(hub)

    res.status(201).json(hubs)
})


server.get('/api/hubs/:id', (req, res) => {
    const id = req.params.id

    let found1 = hubs.find(hub => hub.id == id)

    res.status(200).json(found1)
})

// Update hub
server.patch('/api/hubs/:id', (req, res) => {

    const id = req.params.id

    const changes = req.body;

    let found1 = hubs.find(hub => hub.id == id)

    console.log(found1)
    if (found1) {
        Object.assign(found1, changes);

        res.status(200).json(hubs);
    } else {
        res.status(404).json({ message: `There is no hub with id ${id}` });
    }
})

// Delete hub
server.delete('/api/hubs/:id', (req, res) => {
    const id = req.params.id

    hubs = hubs.filter(hub => hub.id != id)
    console.log(hubs)
    res.status(204).end()
})

const port = 8000
server.listen(port, () => console.log('server running...'))