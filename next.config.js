/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
          'net': false, 
          'tls':false
        }
      }
      return config
    },
  }
}
