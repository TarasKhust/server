import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
const password = 'random_password';
// @ts-ignore
const hash = await bcrypt.hash(password, saltOrRounds);

// @ts-ignore
const salt = await bcrypt.genSalt();

// @ts-ignore
const isMatch = await bcrypt.compare(password, hash);