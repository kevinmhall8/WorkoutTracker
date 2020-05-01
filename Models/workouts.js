const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
        },
        name: {
            type: String,
            trim: true,
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]

}, 
    {
        toJSON: {
            virtuals: true,
        }
    }
);

workoutSchema.virtual("totalDuration").get(function () {
    let total = 0;
    for (var i = 0; i < this.exercises.length; i++) {
        total += this.exercises[i].duration;
    }
    return total;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;