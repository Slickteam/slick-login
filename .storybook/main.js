module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-essentials"
  ],
  babel: async (options) => ({
    ...options,
    "plugins": [
      [ "@babel/plugin-proposal-decorators", { "decoratorsBeforeExport": true } ],
      "@babel/plugin-proposal-class-properties"
    ]  }),
}