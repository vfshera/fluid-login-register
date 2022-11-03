import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
	try {
		const conn = mongoose.connect(process.env.MONGO_URL);

		console.log(`Connected to MongoDB`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

export default connect;
