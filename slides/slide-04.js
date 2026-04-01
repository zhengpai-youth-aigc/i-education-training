const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 4,
  title: "闲鱼拼车类支出",
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

function createRow(slide, pres, y, data, theme) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.72, y, w: 8.55, h: 0.48,
    rectRadius: 0.04,
    fill: { color: data.fill },
    line: { color: data.fill },
  });
  slide.addText(data.date, {
    x: 0.9, y: y + 0.13, w: 1.25, h: 0.12,
    fontFace: "Arial", fontSize: 10,
    color: theme.secondary,
  });
  slide.addText(data.account, {
    x: 2.15, y: y + 0.13, w: 0.85, h: 0.12,
    fontFace: "Arial", fontSize: 10, bold: true,
    color: theme.primary,
  });
  slide.addText(data.desc, {
    x: 3.02, y: y + 0.13, w: 4.4, h: 0.12,
    fontFace: "Microsoft YaHei", fontSize: 9.5,
    color: theme.primary,
  });
  slide.addText("-" + data.amount.toFixed(2), {
    x: 7.88, y: y + 0.1, w: 1.0, h: 0.18,
    align: "right",
    fontFace: "Arial", fontSize: 13, bold: true,
    color: theme.primary,
  });
}

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText(slideConfig.title, {
    x: 0.62, y: 0.45, w: 2.6, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 24, bold: true,
    color: theme.primary,
  });
  slide.addText("5 笔与 team / business / 拼车席位相关的自动扣款。", {
    x: 0.64, y: 0.86, w: 4.8, h: 0.22,
    fontFace: "Microsoft YaHei", fontSize: 11,
    color: theme.secondary,
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.72, y: 1.28, w: 2.2, h: 1.18,
    rectRadius: 0.08,
    fill: { color: "FFF8E8" },
    line: { color: "F1D48A" },
  });
  slide.addText("30.28 元", {
    x: 0.92, y: 1.57, w: 1.8, h: 0.28,
    fontFace: "Arial", fontSize: 24, bold: true,
    color: theme.primary,
  });
  slide.addText("拼车类总支出", {
    x: 0.92, y: 1.94, w: 1.8, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10,
    color: theme.secondary,
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.12, y: 1.28, w: 2.2, h: 1.18,
    rectRadius: 0.08,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB" },
  });
  slide.addText("6.06 元", {
    x: 3.32, y: 1.57, w: 1.8, h: 0.28,
    fontFace: "Arial", fontSize: 24, bold: true,
    color: theme.primary,
  });
  slide.addText("平均每笔", {
    x: 3.32, y: 1.94, w: 1.8, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10,
    color: theme.secondary,
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.52, y: 1.28, w: 3.75, h: 1.18,
    rectRadius: 0.08,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB" },
  });
  slide.addText("观察", {
    x: 5.74, y: 1.48, w: 0.6, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary,
  });
  slide.addText("金额高度集中在 4 到 8 元区间，呈现典型的小额重复型订阅特征。", {
    x: 5.74, y: 1.76, w: 3.1, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 10.5,
    color: theme.primary,
  });

  const rows = [
    { date: "03-17", account: "x***9", desc: "团队拼车订阅席位", amount: 6.5, fill: "FFFDF7" },
    { date: "03-12", account: "x***3", desc: "business 拼车 team 团队拼车订阅席位", amount: 5.78, fill: "FFFFFF" },
    { date: "03-12", account: "t***2", desc: "teambusiness 拼车仅需 6.55", amount: 6.55, fill: "FFFDF7" },
    { date: "03-10", account: "x***6", desc: "拍下秒发 team 车位，质保 30 天", amount: 7.45, fill: "FFFFFF" },
    { date: "03-06", account: "t***1", desc: "team 团队 business 套餐", amount: 4.0, fill: "FFFDF7" },
  ];

  rows.forEach((row, index) => createRow(slide, pres, 2.9 + index * 0.52, row, theme));

  addPageBadge(slide, pres, 4, theme);
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
  pres.writeFile({ fileName: "slide-04-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
