const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    shoppingItems: [{
        type: Schema.Types.ObjectId,
        ref: "ShoppingItem"
      }]
})

module.exports = model("User", UserSchema)