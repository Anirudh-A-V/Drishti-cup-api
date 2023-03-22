const express = require('express')
const res = require('express/lib/response')
const scoreboard = require('../models/scoreboard')
const router = express.Router()
const Scoreboard = require('../models/scoreboard')

router.get('/', async (req, res) => {
    var score = new Scoreboard({})
    Scoreboard.find().then((score) => {
        res.send({ score });
    }, (err) => {
        res.status(400).send(err);
    });

})



router.get('/:id', getScore, async (req, res) => {
    res.json(res.scoreboard)
})

router.post('/', async (req, res) => {
    const scoreboard = new Scoreboard({
        game: req.body.game,
        person: req.body.person
    })

    try {
        const newScoreboard = await scoreboard.save()
        res.status(201).json(newScoreboard)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


router.patch('/:id', getScore, async (req, res) => {
    if (req.body.game != null) {
        res.scoreboard.game = req.body.game
    }
    // if(req.body.score!=null)
    // {
    //     res.scoreboard.score=req.body.score
    // }
    try {
        const updateScoreboard = await res.scoreboard.save()
        res.json(updateScoreboard)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getScore, async (req, res) => {
    try {
        await res.scoreboard.remove()
        res.json({ message: 'Deleted Scoreboard' })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})


async function getScore(req, res, next) {
    let scoreboard
    try {
        scoreboard = await Scoreboard.findById(req.params.id)
        if (scoreboard == null) {
            return res.status(404).json({ message: 'Scoreboard not found' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.scoreboard = scoreboard
    next()
}


module.exports = router