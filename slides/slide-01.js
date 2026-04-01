const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "cover",
  index: 1,
  title: "近期账单明细整理",
};

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 5.625,
    fill: { color: theme.bg },
    line: { color: theme.bg },
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.65, y: 0.72, w: 1.6, h: 0.38,
    rectRadius: 0.08,
    fill: { color: theme.light },
    line: { color: theme.light },
  });
  slide.addText("2026.03", {
    x: 0.65, y: 0.78, w: 1.6, h: 0.2,
    fontFace: "Arial", fontSize: 14, bold: true,
    color: theme.primary, align: "center",
  });

  slide.addText(slideConfig.title, {
    x: 0.7, y: 1.32, w: 5.3, h: 0.85,
    fontFace: "Microsoft YaHei", fontSize: 28, bold: true,
    color: theme.primary,
  });
  slide.addText("根据用户提供的 8 张支付截图整理，适合直接用于汇报或归档。", {
    x: 0.72, y: 2.12, w: 4.9, h: 0.42,
    fontFace: "Microsoft YaHei", fontSize: 12,
    color: theme.secondary,
  });

  slide.addShape(pres.shapes.LINE, {
    x: 0.72, y: 2.72, w: 2.1, h: 0,
    line: { color: theme.accent, width: 2.5 },
  });

  slide.addText("内容结构", {
    x: 0.72, y: 3.02, w: 1.2, h: 0.28,
    fontFace: "Microsoft YaHei", fontSize: 12, bold: true,
    color: theme.primary,
  });
  slide.addText("总金额概览 / 分类拆分 / 重点账单 / 闲鱼拼车明细 / 结论建议", {
    x: 0.72, y: 3.32, w: 4.8, h: 0.48,
    fontFace: "Microsoft YaHei", fontSize: 14,
    color: theme.secondary,
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.25, y: 0.72, w: 2.95, h: 4.15,
    rectRadius: 0.12,
    fill: { color: "FFF8E8" },
    line: { color: "F2D58A", width: 1 },
  });

  slide.addText("8", {
    x: 6.55, y: 1.15, w: 2.3, h: 0.6,
    fontFace: "Arial", fontSize: 34, bold: true,
    color: theme.primary, align: "center",
  });
  slide.addText("笔账单记录", {
    x: 6.55, y: 1.75, w: 2.3, h: 0.28,
    fontFace: "Microsoft YaHei", fontSize: 13,
    color: theme.secondary, align: "center",
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.7, y: 2.28, w: 2.05, h: 0.78,
    rectRadius: 0.08,
    fill: { color: theme.primary },
    line: { color: theme.primary },
  });
  slide.addText("127.18", {
    x: 6.78, y: 2.44, w: 1.9, h: 0.28,
    fontFace: "Arial", fontSize: 20, bold: true,
    color: "FFFFFF", align: "center",
  });
  slide.addText("总支出（元）", {
    x: 6.78, y: 2.73, w: 1.9, h: 0.18,
    fontFace: "Microsoft YaHei", fontSize: 9,
    color: "E5E7EB", align: "center",
  });

  slide.addText("时间范围", {
    x: 6.58, y: 3.44, w: 0.95, h: 0.2,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.primary,
  });
  slide.addText("2026-03-06 至 2026-03-17", {
    x: 6.58, y: 3.68, w: 2.1, h: 0.32,
    fontFace: "Arial", fontSize: 11,
    color: theme.secondary,
  });

  slide.addText("主要类型", {
    x: 6.58, y: 4.14, w: 0.95, h: 0.2,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.primary,
  });
  slide.addText("软件会员 / 拼车订阅 / 充值消费", {
    x: 6.58, y: 4.38, w: 2.1, h: 0.32,
    fontFace: "Microsoft YaHei", fontSize: 11,
    color: theme.secondary,
  });

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
  pres.writeFile({ fileName: "slide-01-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
