module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-sejmou`
  extends: ['sejmou'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
