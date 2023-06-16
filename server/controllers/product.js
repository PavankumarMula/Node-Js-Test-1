const Product = require("../model/productModel");

exports.showProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    res.json(allProducts);
  } catch (error) {
    console.log(error);
  }
};

exports.addProduct = (req, res) => {
  const { title, price, quantity } = req.body;
  Product.create({
    title,
    price,
    quantity,
  });
  res.json("Product Added Sucessfully");
};

exports.editProduct = async (req, res) => {
  const { title, price, quantity } = req.body;
  const id = req.params.prodId;
  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    // updating the product
    product.title = title;
    product.price = price;
    product.quantity = quantity;
    await product.save();
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//deleting a product
exports.deleteProduct=async(req,res)=>{
    const id=req.params.prodId;
    try {
        const product=await Product.findByPk(id);
        if(!product){
            return res.status(404).json("error not found");
        }
        await product.destroy();
        return res.status(200).json("product deleted sucesfullt")
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
}