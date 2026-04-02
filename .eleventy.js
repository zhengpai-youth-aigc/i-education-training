module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ public: "." });
  eleventyConfig.addWatchTarget("public/");

  return {
    dir: {
      input: "site",
      includes: "_includes",
      data: "_data",
      output: "docs"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
