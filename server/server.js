import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db.js';
import { auth, User } from './auth/lucia.js';
import { handleMiddleware } from '@lucia-auth/express';

import { LoginValidation, RegisterValidation } from './validation/UserValidation.js';
import { validate, ValidationError } from 'express-validation';

dotenv.config();
connect();

const app = express();

app.use(handleMiddleware(auth));

app.use(express.json());
// change this
app.use(cors({ origin: '*' }));

app.get('/api/users', async (req, res) => {
	const users = await User.find();
	res.status(200).json(users);
});

app.post('/api/login', validate(LoginValidation, { keyByField: true }, {}), async (req, res) => {
	res.status(200).json(req.body);
});

app.post(
	'/api/register',
	validate(RegisterValidation, { keyByField: true }, {}),
	async (req, res) => {
		const { password_confirm, ...credentials } = req.body;

		if (password_confirm !== credentials.password) {
			res.status(400).json({ message: 'Password mismatch' });
		}

		res.status(200).json(req.body);
	}
);

app.use(function (err, req, res, next) {
	if (err instanceof ValidationError) {
		return res.status(err.statusCode).json(err);
	}

	return res.status(500).json(err);
});

app.listen(process.env.PORT, () => {
	console.log(`App listening on  http://localhost:${process.env.PORT}`);
});
