import { Schema, Types } from 'mongoose';
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: [250, 'The reaction body can only be a max of 250 characters long! Got {VALUE}.']
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format on query
    },
}, {
    toJSON: {
        getters: true,
    },
    id: false,
});
export default reactionSchema;
