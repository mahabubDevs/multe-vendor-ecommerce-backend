import mongoose from "mongoose";

const productVariationSchema = new mongoose.model({
    color: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        min: 0,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
},{_id:false});

const productSchema = new mongoose.model({
    name: {
        type: String,
        required: true
    },
    discription: String,
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vendor",
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true,
    },
    image: [String],
    variations: [productVariationSchema],
    ratingAverage: {
        type: Number,
        default: 0
    },
    ratingQuentity: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        },
    ]
},
    { timestamps: true }
);

export const Product = mongoose.model("Product",productSchema)