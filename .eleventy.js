module.exports = function (eleventyConfig) {
  const passthroughPublicFiles = [
    "styles.css",
    "brand-logo.svg",
    "screenshots",
    "lesson-07.html",
    "rtk-install-guide.html",
    "student-guide.html",
    "codex-first-lesson.html"
  ];

  passthroughPublicFiles.forEach((file) => {
    eleventyConfig.addPassthroughCopy({ [`public/${file}`]: file });
  });

  eleventyConfig.addWatchTarget("public/");
  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value);
  });

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
