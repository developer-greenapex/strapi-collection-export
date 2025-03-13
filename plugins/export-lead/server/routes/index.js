module.exports = [
  {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/get-content-type-data",
    handler: "sitemapurl.getDataByContentType",
    config: {
      policies: [],
      auth: false,
    },
  },
];
