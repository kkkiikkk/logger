# logger

## Installation

Use the package manager [npm](https://www.npmjs.com/package/custom-logger-nodejs) to install custom-logger-nodejs

## Usage 

```nodejs
import loggerOptions from 'custom-logger-nodejs'

const { Logger, colorList } = loggerOptions

const logger = new Logger()

logger.info('[INFO]')
logger.log('[LOG]')
logger.error('[ERROR]', 505)