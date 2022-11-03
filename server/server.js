import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db.js';
import User from './models/User.js';

import { LoginValidation, RegisterValidation } from './validation/UserValidation.js';
import { validate, ValidationError } from 'express-validation';

dotenv.config();
connect();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/users', async (req, res) => {
	const users = await User.find();
	res.status(200).json(users);
});

app.get('/api/login', validate(RegisterValidation), async (req, res) => {
	res.status(200).json(req.body);
});

app.use(function (err, req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(err.statusCode).json(err);
	}

	return res.status(500).json(err);
});

app.listen(process.env.PORT, () => {
	console.log(`App listening on  http://localhost:${process.env.PORT}`);
});
