const {Schema, model} = require('mongoose');

const ShoppingItemSchema = Schema({
    title:{
        type: String,
        required: true
    },

})

module.exports = model("ShoppingItem", ShoppingItemSchema)