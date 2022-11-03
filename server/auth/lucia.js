import lucia from 'lucia-auth';
import adapter from '@lucia-auth/adapter-mongoose';
import mongoose from 'mongoose';
import SessionSchema from '../models/SessionSchema.js';
import UserSchema from '../models/UserSchema.js';

export const User = mongoose.model('user', UserSchema);

export const Session = mongoose.model('session', SessionSchema);

export const auth = lucia({
	adapter: adapter(mongoose),
	env: 'DEV'
});
