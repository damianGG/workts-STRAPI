'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('media-permission')
      .service('myService')
      .getWelcomeMessage();
  },
});
