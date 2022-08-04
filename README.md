# logger

## Installation

Use the package manager [npm](https://www.npmjs.com/package/custom-logger-nodejs) to install custom-logger-nodejs

## Usage 

```javascript
import { Logger, colorList } from 'custom-logger-nodejs'

#or

const { Logger, colorList } = require('custom-logger-nodejs')

const logger = new Logger()

logger.info('[INFO]')
logger.log('[LOG]')
logger.error('[ERROR]', 505)

## License
[MIT](https://choosealicense.com/licenses/mit/)