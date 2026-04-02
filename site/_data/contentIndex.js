const entries = [
  {
    id: "lesson-01",
    url: "lesson-01.html",
    title: "Codex 入门：装好、打开、体验一下",
    navTitle: "第一课 · Codex入门",
    description: "Mac/Windows · 跟着做30分钟 · 做出第一个网页",
    group: "course",
    contentType: "lesson",
    order: 1,
    badge: 1,
    displayBadge: "01",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "lesson-02",
    url: "lesson-02.html",
    title: "上手 Codex：文件夹管理",
    navTitle: "第二课 · 上手 Codex",
    description: "文件夹 + 线程 · 组织项目 · 实战入门",
    group: "course",
    contentType: "lesson",
    order: 2,
    badge: 2,
    displayBadge: "02",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "lesson-03",
    url: "lesson-03.html",
    title: "AI提问入门：问得好才能答得好",
    navTitle: "第三课 · AI提问",
    description: "4步提问法 · 3个实战场景 · 万能模板",
    group: "course",
    contentType: "lesson",
    order: 3,
    badge: 3,
    displayBadge: "03",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "lesson-04",
    url: "lesson-04.html",
    title: "Agent是什么？为什么一定要做？",
    navTitle: "第四课 · Agent",
    description: "通俗解释 · 面向零基础 · 无技术术语",
    group: "course",
    contentType: "lesson",
    order: 4,
    badge: 4,
    displayBadge: "04",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "lesson-05",
    url: "lesson-05.html",
    title: "Skills是什么？怎么用？",
    navTitle: "第五课 · Skills",
    description: "Skills入门 · 实战案例 · 安装与使用",
    group: "course",
    contentType: "lesson",
    order: 5,
    badge: 5,
    displayBadge: "05",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "lesson-06",
    url: "lesson-06.html",
    title: "国产 vs 国外大模型对比",
    navTitle: "第六课 · 模型对比",
    description: "2026年3月最新 · 各模型优势 · 推荐场景 · 选型指南",
    group: "course",
    contentType: "lesson",
    order: 6,
    badge: 6,
    displayBadge: "06",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "lesson-07",
    url: "lesson-07.html",
    title: "学习渠道",
    navTitle: "学习渠道",
    description: "公众号 · B站UP主 · 学习平台推荐",
    group: "resource",
    contentType: "resource",
    order: 7,
    badge: 7,
    displayBadge: "资源",
    trackProgress: true,
    showInSidebar: true,
    showInCatalog: false,
    searchable: true,
    catalogVariant: "lesson"
  },
  {
    id: "rtk-install-guide",
    url: "rtk-install-guide.html",
    title: "RTK 安装与配置教程",
    navTitle: "RTK 安装与配置教程",
    description: "重点讲 Windows · 二进制安装 · Claude Code 初始化",
    group: "resource",
    contentType: "tool",
    order: 8,
    badge: "工具",
    displayBadge: "工具",
    trackProgress: false,
    showInSidebar: true,
    showInCatalog: true,
    searchable: true,
    catalogVariant: "non-lesson"
  }
];

const sortedEntries = entries.slice().sort((left, right) => left.order - right.order);
const byId = Object.fromEntries(sortedEntries.map((entry) => [entry.id, entry]));
const byUrl = Object.fromEntries(sortedEntries.map((entry) => [entry.url, entry]));

module.exports = {
  entries: sortedEntries,
  byId,
  byUrl,
  sidebarGroups: [
    {
      id: "course",
      title: "课程",
      items: sortedEntries.filter((entry) => entry.showInSidebar && entry.group === "course")
    },
    {
      id: "resource",
      title: "资源",
      items: sortedEntries.filter((entry) => entry.showInSidebar && entry.group === "resource")
    }
  ],
  searchableEntries: sortedEntries.filter((entry) => entry.searchable),
  catalogEntries: sortedEntries.filter((entry) => entry.showInCatalog),
  progressEntries: sortedEntries.filter((entry) => entry.trackProgress)
};
