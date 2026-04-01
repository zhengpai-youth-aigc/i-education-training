const pptxgen = require("pptxgenjs");

const slideConfig = {
  type: "content",
  index: 3,
  title: "重点账单",
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

function createItem(slide, pres, item, index, theme) {
  const y = 1.28 + index * 1.18;
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.65, y, w: 8.7, h: 0.92,
    rectRadius: 0.06,
    fill: { color: "FFFFFF" },
    line: { color: "E5E7EB", width: 1 },
  });
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.86, y: y + 0.18, w: 0.9, h: 0.52,
    rectRadius: 0.07,
    fill: { color: item.tagBg },
    line: { color: item.tagBg },
  });
  slide.addText(item.tag, {
    x: 0.86, y: y + 0.34, w: 0.9, h: 0.12,
    align: "center",
    fontFace: "Microsoft YaHei", fontSize: 9.5, bold: true,
    color: item.tagColor,
  });
  slide.addText(item.name, {
    x: 1.96, y: y + 0.18, w: 3.9, h: 0.2,
    fontFace: "Microsoft YaHei", fontSize: 14, bold: true,
    color: theme.primary,
  });
  slide.addText(item.desc, {
    x: 1.96, y: y + 0.47, w: 4.6, h: 0.18,
    fontFace: "Microsoft YaHei", fontSize: 10,
    color: theme.secondary,
  });
  slide.addText(item.date, {
    x: 6.65, y: y + 0.2, w: 1.25, h: 0.16,
    align: "right",
    fontFace: "Arial", fontSize: 10,
    color: theme.secondary,
  });
  slide.addText("-" + item.amount.toFixed(2), {
    x: 7.98, y: y + 0.24, w: 1.08, h: 0.28,
    align: "right",
    fontFace: "Arial", fontSize: 20, bold: true,
    color: theme.primary,
  });
}

function createSlide(pres, theme) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText(slideConfig.title, {
    x: 0.62, y: 0.45, w: 2.0, h: 0.35,
    fontFace: "Microsoft YaHei", fontSize: 24, bold: true,
    color: theme.primary,
  });
  slide.addText("金额相对较高或代表性较强的 3 笔支出。", {
    x: 0.64, y: 0.86, w: 4.4, h: 0.22,
    fontFace: "Microsoft YaHei", fontSize: 11,
    color: theme.secondary,
  });

  const items = [
    {
      tag: "软件服务",
      tagBg: "EEF2F7",
      tagColor: "1F2430",
      name: "CodePlanPlus 月度会员",
      desc: "收款方：上海稀宇科技有限公司 / MiniMax 开放平台",
      date: "2026-03-14",
      amount: 49.0,
    },
    {
      tag: "办公会员",
      tagBg: "FFF1F1",
      tagColor: "B42318",
      name: "WPS 超级会员包季自动续费",
      desc: "收款方：珠海金山办公软件有限公司",
      date: "2026-03-12",
      amount: 29.0,
    },
    {
      tag: "充值消费",
      tagBg: "FFF8E8",
      tagColor: "8A5A00",
      name: "元宝充值",
      desc: "商户：小鼠标垫 / 收款方：淮安瑞之梦网络科技有限公司",
      date: "2026-03-09",
      amount: 18.9,
    },
  ];

  items.forEach((item, index) => createItem(slide, pres, item, index, theme));

  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.4, y: 4.78, w: 2.95, h: 0.42,
    rectRadius: 0.08,
    fill: { color: theme.primary },
    line: { color: theme.primary },
  });
  slide.addText("3 笔合计 96.90 元，占总支出的 76.2%", {
    x: 6.5, y: 4.92, w: 2.74, h: 0.12,
    align: "center",
    fontFace: "Microsoft YaHei", fontSize: 10,
    color: "FFFFFF",
  });

  addPageBadge(slide, pres, 3, theme);
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
  pres.writeFile({ fileName: "slide-03-preview.pptx" });
}

module.exports = { createSlide, slideConfig };
