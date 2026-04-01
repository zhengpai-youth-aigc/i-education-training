const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "OpenAI Codex";
pres.company = "AI教育培训";
pres.subject = "近期账单明细整理";
pres.title = "Billing Summary March 2026";
pres.lang = "zh-CN";
pres.theme = {
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN",
};

const theme = {
  primary: "1F2430",
  secondary: "5B6472",
  accent: "E5A100",
  light: "F1E6C8",
  bg: "F7F6F2",
};

async function main() {
  const outputDir = path.join(__dirname, "output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (let i = 1; i <= 5; i += 1) {
    const num = String(i).padStart(2, "0");
    const slideModule = require(`./slide-${num}.js`);
    slideModule.createSlide(pres, theme);
  }

  await pres.writeFile({ fileName: path.join(outputDir, "billing-summary-2026-03.pptx") });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
