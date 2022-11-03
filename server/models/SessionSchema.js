import { Schema } from 'mongoose';

export default new Schema(
	{
		_id: {
			type: String
		},
		user_id: {
			type: String,
			required: true
		},
		expires: {
			type: Number,
			required: true
		},
		idle_expires: {
			type: Number,
			required: true
		}
	},
	{ _id: false }
);
