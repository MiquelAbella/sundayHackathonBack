const ShoppingItems = require("../models/ShoppingItem");

const addShoppingItems = async (req, res) => {
  try {
    const item = new ShoppingItems(req.body);
    await item.save();
    return res.status(200).json({ ok: true, item: item });
  } catch (error) {
    return res
      .status(303)
      .json({ ok: false, msg: "Something happened", error: error });
  }
};

const getAllShoppingItems = async (req, res) => {
  try {
    const items = await ShoppingItems.find();
    return res.status(200).json({ ok: true, items: items });
  } catch (error) {
    return res
      .status(303)
      .json({ ok: false, msg: "Something happened", error: error });
  }
};

module.exports = { addShoppingItems, getAllShoppingItems };
