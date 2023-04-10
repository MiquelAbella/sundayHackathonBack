const ShoppingItems = require("../models/ShoppingItem");
const User = require("../models/User");

const addShoppingItems = async (req, res) => {
  try {
    const item = new ShoppingItems(req.body);
    await item.save();
    const user = await User.findOne({_id:req.body.userId})
    user.shoppingItems = [...user.shoppingItems, item._id]
    await user.save()
    return res.status(200).json({ ok: true, item: item });
  } catch (error) {
    return res
      .status(303)
      .json({ ok: false, msg: "Something happened", error: error });
  }
};

const getAllShoppingItems = async (req, res) => {
 console.log('here', req.body)
 
  try {
    const items = await User.findOne({email: req.body.email}).populate({
      path: "shoppingItems",
      model: "ShoppingItem"
    });
    console.log(items)
    return res.status(200).json({ ok: true, items: items });
  } catch (error) {
    return res
      .status(303)
      .json({ ok: false, msg: "Something happened", error: error });
  }
};

module.exports = { addShoppingItems, getAllShoppingItems };
