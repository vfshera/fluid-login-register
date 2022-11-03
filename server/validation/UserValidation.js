import { Joi } from 'express-validation';

export const LoginValidation = {
	body: Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string()
			.regex(/[a-zA-Z0-9]{3,30}/)
			.required()
	})
};
export const RegisterValidation = {
	body: Joi.object({
		username: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string()
			.regex(/[a-zA-Z0-9]{3,30}/)
			.required(),
		password_confirm: Joi.string()
			.regex(/[a-zA-Z0-9]{3,30}/)
			.required()
	})
};
