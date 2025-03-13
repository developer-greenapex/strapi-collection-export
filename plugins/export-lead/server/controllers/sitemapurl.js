"use strict";

/**
 *  controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "plugin::sitemap.sitemapurl",
  ({ strapi }) => ({
    async getDataByContentType(ctx) {
      try {
        return await strapi
          .plugin("sitemap")
          .service("sitemapurl")
          .getDataByContentType(ctx.query);
      } catch (err) {
        ctx.throw(500, err);
      }
    },
  })
);
