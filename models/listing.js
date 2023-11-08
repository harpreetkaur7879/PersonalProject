const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: String,
    image: {
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fphotos%2FEsNA2bhBZ-8&psig=AOvVaw3E6dUq2WXiZK4vBuwhkq54&ust=1696278910566000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjk2JTa1YEDFQAAAAAdAAAAABAD",
        set: (v)=> v === "" ? "https://images.app.goo.gl/4EJcFZakrDT2qkVG7":v,
    },
    price: Number,
    location: String,
    country: String,
})
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;