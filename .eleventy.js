const fs = require("fs");
const slugify = require('slugify')


module.exports = (function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/sass")
  eleventyConfig.addPassthroughCopy("src/assets/");

  eleventyConfig.addFilter("slugify", slugify)

  return {
    dir: {
      input: 'src',
      output: 'public',
      // These values are both relative to your input directory above.
      data: '_data',
      includes: "_includes",
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
});