import mongoose from "mongoose";
import slugify from "slugify"

const subscriptionSchema = new mongoose.Schema({
    plan: {
        type: String,
        enum: ["basic", "premium"],
        required:true
    },
    startDate: {
        type: String,
        required: true 
    },
    endDate: {
        type: String,
        required: true 
    },
    isActive: {
        type: Boolean,
        default: true 
    }
},{_id:false})

const vendorModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    storeName: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        unique: true,
    },
    storeDiscription: {
        type: String,
        required:true
    },
    storeImage:{
        type: String,
        required: true
    },
    storeBanner: {
        type: String,
      required: true  
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    products: [
        // { type: mongoose.Schema.Type.ObjectId, ref: "Product" }
    ],
    subscription:subscriptionSchema,    
}, {
    timeseries:true
}
)

vendorModel.pre("save", async function(next) {
    this.slug = slugify(this.storeName.toLowerCase());
        next();
})
export const Vendor = mongoose.model("Vendor",vendorModel)