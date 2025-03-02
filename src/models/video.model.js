import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    duration: {
      type: Number
    },
    views: {
      type: Number,
      default: 0
    },
    isPublished: {
      type: Boolean,
      default: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    videoFile: {
      type: String,
      required: true
    },
    videoFilePublicId: {
      type: String
    },
    thumbnail: {
      type: String,
      required: true
    },
    thumbnailPublicId: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
