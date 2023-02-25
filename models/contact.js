const { Schema, model } = require("mongoose")

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
     favorite: {
        type: Boolean,
        default: false,
    },
}, {versionKey: false, timestamps: true})

// contactSchema.post("save", (error, data, next) => {
//     const { code, name } = error
//     error.status = (name === "MongoServerError" && code === 11000) ? 409 : 400
//     next()
// })

const ContactModel = model("contact", contactSchema)

module.exports = ContactModel