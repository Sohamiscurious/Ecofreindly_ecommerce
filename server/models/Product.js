const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_id: { type: Number, required: false, },
    product_name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    biodegradable_score: { type: Number, required: true },
    carbon_footprint_score: { type: Number, required: true },
    quantity: { type: Number, required: true },
    product_description: { type: String, required: true },
    product_image: { type: String, required: true },
    product_lifespan: { type: String, required: true },
    certifications: { type: Array },
    government_awards: { type: Array },
    materials: { type: Array },
    material_sourcing: { type: String, required: true },
    color: { type: Array },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
