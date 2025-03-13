"use strict";

/**
 *  service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "plugin::sitemap.sitemapurl",
  ({ strapi }) => ({
    async getDataByContentType(query) {
      if (!query.contentType) {
        return [];
      }
      let data = await strapi.entityService.findMany(query.contentType);
      return data;
    },
  })
);
