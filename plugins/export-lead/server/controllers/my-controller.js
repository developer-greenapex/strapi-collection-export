"use strict";

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("sitemap")
      .service("myService")
      .getWelcomeMessage();
  },
});
