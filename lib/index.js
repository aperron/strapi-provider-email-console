'use strict';

module.exports = {
  provider: 'console',
  name: 'Console',

  init: config => {
    return {
      send: (options, cb) => {
        return new Promise((resolve, reject) => {

          // Default values.
          options = options ? options : {};
          options.from = options.from || "no-reply@strapi.io";
          options.replyTo = options.replyTo || options.from;
          options.text = options.text || options.html;
          options.html = options.html || options.text;

          strapi.log.debug('SendEmail mock:',
            '\n\tto:', options.to,
            '\n\tfrom:', options.from,
            '\n\tsubject:', options.subject,
            '\n\ttext:', options.text);
          resolve()
        });
      },
    };
  },
};
