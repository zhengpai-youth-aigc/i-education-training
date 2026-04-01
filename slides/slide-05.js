const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "summary",
  index: 5,
  title: "完整明细与结论",
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

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText(slideConfig.title, {
    x: 0.62, y: 0.42, w: 3.0, h: 0.36,
    fontFace: "Microsoft YaHei", fontSize: 24, bold: true,
    color: theme.primary,
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.68, y: 1.02, w: 5.05, h: 3.9,
    rectRadius: 0.08,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB" },
  });
  slide.addText("结论摘要", {
    x: 0.92, y: 1.28, w: 1.0, h: 0.18,
    fontFace: "Microsoft YaHei", fontSize: 11, bold: true,
    color: theme.secondary,
  });

  const bullets = [
    "8 笔账单合计 127.18 元，时间集中在 2026 年 3 月上旬到中旬。",
    "软件会员与工具类支出 78.00 元，是当前最大项，占比约 61.3%。",
    "闲鱼拼车类共 5 笔，合计 30.28 元，说明存在多个小额重复订阅。",
    "单笔最高支出为 CodePlanPlus 月度会员 49.00 元，其次为 WPS 包季 29.00 元。",
    "如果目的是做月度对账，这批记录已经足够支撑一次简明说明和归档。 ",
  ];

  bullets.forEach((text, index) => {
    const y = 1.66 + index * 0.56;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.94, y: y + 0.04, w: 0.14, h: 0.14,
      fill: { color: index < 2 ? theme.accent : theme.primary },
      line: { color: index < 2 ? theme.accent : theme.primary },
    });
    slide.addText(text, {
      x: 1.16, y, w: 4.15, h: 0.28,
      fontFace: "Microsoft YaHei", fontSize: 11,
      color: theme.primary,
    });
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.0, y: 1.02, w: 3.2, h: 1.18,
    rectRadius: 0.08,
    fill: { color: "FFF8E8" },
    line: { color: "F1D48A" },
  });
  slide.addText("建议归档标题", {
    x: 6.24, y: 1.25, w: 1.1, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary,
  });
  slide.addText("2026年3月近期账单明细整理", {
    x: 6.24, y: 1.54, w: 2.5, h: 0.24,
    fontFace: "Microsoft YaHei", fontSize: 13, bold: true,
    color: theme.primary,
  });

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.0, y: 2.42, w: 3.2, h: 2.5,
    rectRadius: 0.08,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB" },
  });
  slide.addText("记录来源", {
    x: 6.24, y: 2.68, w: 0.9, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary,
  });
  slide.addText("用户提供的支付截图", {
    x: 6.24, y: 2.98, w: 2.2, h: 0.2,
    fontFace: "Microsoft YaHei", fontSize: 12,
    color: theme.primary,
  });
  slide.addText("覆盖平台", {
    x: 6.24, y: 3.34, w: 0.9, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary,
  });
  slide.addText("闲鱼 / MiniMax / WPS / 元宝", {
    x: 6.24, y: 3.62, w: 2.2, h: 0.2,
    fontFace: "Microsoft YaHei", fontSize: 12,
    color: theme.primary,
  });
  slide.addText("说明", {
    x: 6.24, y: 4.0, w: 0.65, h: 0.16,
    fontFace: "Microsoft YaHei", fontSize: 10, bold: true,
    color: theme.secondary,
  });
  slide.addText("本 PPT 为提炼版，适合汇报；如需也可继续扩成逐笔截图版。", {
    x: 6.24, y: 4.28, w: 2.5, h: 0.4,
    fontFace: "Microsoft YaHei", fontSize: 11,
    color: theme.primary,
  });

  addPageBadge(slide, pres, 5, theme);
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
  pres.writeFile({ fileName: "slide-05-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
