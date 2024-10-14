import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    dis: String,
    slug: String,
    subCategory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subCategory",
        },
    ]
},
{timestamps:true}
)

categorySchema.pre("save", async function(next) {
    this.slug = slugify(this.name.toLowerCase());
        next();
})

export const Category = mongoose.model("Category",categorySchema)