const development = {
  server: {
    port: process.env.DEV_PORT,
    endpoint: process.env.DEV_ENDPOINT_SERVER,
  },
  client: {
    endpoint: process.env.DEV_ENDPOINT_CLIENT,
  },
};
const test = {
  server: {
    port: process.env.STAGING_PORT,
    endpoint: process.env.STAGING_ENDPOINT_SERVER,
  },
  client: {
    endpoint: process.env.STAGING_ENDPOINT_CLIENT,
  },
};
const staging = {
  server: {
    port: process.env.STAGING_PORT,
    endpoint: process.env.STAGING_ENDPOINT_SERVER,
  },
  client: {
    endpoint: process.env.STAGING_ENDPOINT_CLIENT,
  },
};
const production = {
  server: {
    port: process.env.PRO_PORT,
    endpoint: process.env.PRO_ENDPOINT_SERVER,
  },
  client: {
    endpoint: process.env.PRO_ENDPOINT_CLIENT,
  },
};

const config = { development, staging, production, test };

module.exports = config[process.env.NODE_ENV || "development"];
