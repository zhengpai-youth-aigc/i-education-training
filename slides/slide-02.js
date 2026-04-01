const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 2,
  title: "总体概览",
};

function addPageBadge(slide, pres, num, theme) {
  slide.addShape(pres.shapes.OVAL, {
    x: 9.3, y: 5.1, w: 0.4, h: 0.4,
    fill: { color: theme.accent },
    line: { color: theme.accent },
  });
  slide.addText(String(num), {
    x: 9.3, y: 5.13, w: 0.4, h: 0.18,
    align: "center", valign: "mid",
    fontFace: "Arial", fontSize: 10, bold: true,
    color: "FFFFFF",
  });
}

function createMetricCard(slide, pres, x, title, value, note, theme) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y: 1.35, w: 2.45, h: 1.25,
    rectRadius: 0.08,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB", width: 1 },
    shadow: { type: "outer", color: "D9DDE3", blur: 1, angle: 45, distance: 1, opacity: 0.15 },
  });
  slide.addText(title, {
    x: x + 0.2, y: 1.58, w: 2.0, h: 0.18,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary,
  });
  slide.addText(value, {
    x: x + 0.2, y: 1.9, w: 1.95, h: 0.32,
    fontFace: "Arial", fontSize: 22, bold: true,
    color: theme.primary,
  });
  slide.addText(note, {
    x: x + 0.2, y: 2.22, w: 2.0, h: 0.18,
    fontFace: "Microsoft YaHei", fontSize: 9,
    color: theme.secondary,
  });
}

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText(slideConfig.title, {
    x: 0.6, y: 0.45, w: 2.2, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 24, bold: true,
    color: theme.primary,
  });
  slide.addText("这 8 笔账单主要集中在软件会员和闲鱼拼车类支出。", {
    x: 0.62, y: 0.88, w: 5.0, h: 0.24,
    fontFace: "Microsoft YaHei", fontSize: 11,
    color: theme.secondary,
  });

  createMetricCard(slide, pres, 0.6, "总支出", "127.18", "单位：元", theme);
  createMetricCard(slide, pres, 3.2, "记录数量", "8", "截图内有效账单", theme);
  createMetricCard(slide, pres, 5.8, "时间跨度", "12 天", "2026-03-06 到 2026-03-17", theme);

  slide.addText("按类型拆分", {
    x: 0.62, y: 3.05, w: 1.5, h: 0.22,
    fontFace: "Microsoft YaHei", fontSize: 12, bold: true,
    color: theme.primary,
  });

  const categories = [
    { label: "软件会员与工具", amount: 78.0, color: "1F2430" },
    { label: "闲鱼拼车订阅", amount: 30.28, color: "E5A100" },
    { label: "充值消费", amount: 18.9, color: "6B7280" },
  ];
  const total = 127.18;

  categories.forEach((item, index) => {
    const y = 3.42 + index * 0.58;
    const pct = item.amount / total;
    slide.addText(item.label, {
      x: 0.64, y, w: 2.0, h: 0.18,
      fontFace: "Microsoft YaHei", fontSize: 11,
      color: theme.primary,
    });
    slide.addText(item.amount.toFixed(2) + " 元", {
      x: 2.7, y, w: 0.9, h: 0.18,
      fontFace: "Arial", fontSize: 11, bold: true,
      color: theme.primary, align: "right",
    });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 3.82, y: y + 0.02, w: 3.5, h: 0.14,
      rectRadius: 0.04,
      fill: { color: "E5E7EB" },
      line: { color: "E5E7EB" },
    });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 3.82, y: y + 0.02, w: 3.5 * pct, h: 0.14,
      rectRadius: 0.04,
      fill: { color: item.color },
      line: { color: item.color },
    });
    slide.addText((pct * 100).toFixed(1) + "%", {
      x: 7.48, y, w: 0.72, h: 0.18,
      fontFace: "Arial", fontSize: 10,
      color: theme.secondary, align: "right",
    });
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.1, y: 1.38, w: 1.1, h: 3.6,
    rectRadius: 0.08,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB", width: 1 },
  });
  slide.addText("高频词", {
    x: 8.25, y: 1.62, w: 0.8, h: 0.18,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary, align: "center",
  });
  ["team", "拼车", "会员", "自动扣款"].forEach((word, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.28, y: 2.02 + i * 0.62, w: 0.72, h: 0.3,
      rectRadius: 0.06,
      fill: { color: i % 2 === 0 ? "FFF6DD" : "EEF2F7" },
      line: { color: i % 2 === 0 ? "F1D48A" : "D7DEE8" },
    });
    slide.addText(word, {
      x: 8.28, y: 2.09 + i * 0.62, w: 0.72, h: 0.12,
      align: "center",
      fontFace: "Microsoft YaHei", fontSize: 8.5,
      color: theme.primary,
    });
  });

  addPageBadge(slide, pres, 2, theme);
  return slide;
}

if (require.main === module) {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_16x9";
  const theme = {
    primary: "1F2430",
    secondary: "5B6472",
    accent: "E5A100",
    light: "F1E6C8",
    bg: "F7F6F2",
  };
  createSlide(pres, theme);
  pres.writeFile({ fileName: "slide-02-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
