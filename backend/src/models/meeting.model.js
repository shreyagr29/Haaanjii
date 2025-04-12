import mongoose, {Schema} from "mongoose";

const meetingSchema = new Schema({
    user_id: {type: String},
    meetingCode: {type: String, required: true},
    date: {type: Date, default: Date.now, required: true}
});

const Meeting = mongoose.Model("Meeting", meetingSchema);

export {Meeting};