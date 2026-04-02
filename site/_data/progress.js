const contentIndex = require("./contentIndex");

module.exports = {
  storageKey: "ai-course-progress",
  total: contentIndex.progressEntries.length,
  entries: contentIndex.progressEntries.map((entry) => ({
    id: entry.id,
    url: entry.url,
    badge: entry.badge,
    displayBadge: entry.displayBadge,
    title: entry.title
  }))
};
