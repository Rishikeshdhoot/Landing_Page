import baseConfig from './base';
import localConfig from './local';

const config = {
	...baseConfig,
	...localConfig
}
export default config