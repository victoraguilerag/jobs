module.exports = {
  reactStrictMode: true,
}
module.exports = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/portfolio' },
    }
  },
}