const logger = require('pino')({
  prettyPrint: {
    translateTime: 'SYS:HH:MM:ss',
    ignore: 'hostname,pid',
  },
});

global.logger = logger;
