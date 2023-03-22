const mongoose = require('mongoose')

const scoreboardSchema = new mongoose.Schema({
    "game": {
        type: String,
        required: true
    },

    "person": [{
        "name": { type: String },
        "pno": { type: String }
    }
    ]
});

module.exports = mongoose.model('Scoreboard', scoreboardSchema)