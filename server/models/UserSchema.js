import { Schema } from 'mongoose';

export default new Schema(
	{
		username: {
			type: String,
			required: [true, 'Username is required!']
		},
		email: {
			type: String,
			required: [true, 'Email is required!']
		},
		password: {
			type: String,
			required: [true, 'Password is required!']
		}
	},
	{ timestamps: true }
);
