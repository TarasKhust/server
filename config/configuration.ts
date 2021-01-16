import * as yaml from 'js-yaml';
import { join } from 'path';
import * as fs from 'fs';

const YAML_CONFIG_FILENAME = 'config.yml';

export const yamlConfig = () => {
  return yaml.load(
    fs.readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  );
};

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
