export const configuration = () => {
  return {
	environment: process.env.NODE_ENV,
	port: process.env.PORT,
  };
};

export const database = (): object => {
  return {
	databaseConfig: {
		host: process.env.POSTGRES_HOST,
		username: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DATABASE,
		port: process.env.POSTGRES_PORT,
	},
  };
};

export const databaseConfigDev = (): object => {
  return {
	databaseConfigDev: {
		host: process.env.POSTGRES_HOST_DEV,
		username: process.env.POSTGRES_USER_DEV,
		password: process.env.POSTGRES_PASSWORD_DEV,
		database: process.env.POSTGRES_DATABASE_DEV,
		port: process.env.POSTGRES_PORT_DEV,
	},
  };
};
