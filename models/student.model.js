const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    rollno:{
        type: Number,
        required: true,
        trim: true,
        maxlength: 4,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        trim: true
    },  
    department: {
        type: String,
        trim: true
    },
    phone_number: {
        type: Number,
        trim: true,
        maxlength: 10,
        required: true
    }
},
{
    timestamps: true
}
);

const student = mongoose.model('student',studentSchema);
module.exports = student;