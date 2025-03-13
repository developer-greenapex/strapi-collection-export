// @ts-nocheck
import { request } from "@strapi/helper-plugin";

const adminRequests = {
  getAllContentTypes: async () => {
    try {
      const response = await request("/content-type-builder/content-types", {
        method: "GET",
      });

      // Filter content types based on the Content Manager availability
      const contentManagerTypes = response.data.filter((type) => {
        const pluginOptions = type.schema.pluginOptions || {};
        const contentManager = pluginOptions["content-manager"] || {};

        return (
          contentManager.visible !== false &&
          type.schema.kind === "collectionType"
        ); // Filter by visibility
      });

      return contentManagerTypes;
    } catch (err) {
      console.error("Error fetching content types:", err);
      return [];
    }
  },
  getDataByContentType: async (contentType) => {
    return await request(
      `/sitemap/get-content-type-data?contentType=${contentType}`,
      {
        method: "GET",
      }
    );
  },
};

export default adminRequests;
