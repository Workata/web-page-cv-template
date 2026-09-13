const { chromium } = require("playwright");
const path = require("path");
const exportFolderPath = process.env.EXPORTED_CV_FOLDER_PATH || "./cv";

const now = new Date();
const pad = n => String(n).padStart(2, '0');
const timestamp =
  `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}` +
  `_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;


(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("file://" + path.resolve("web_page_cv/index.html"));

  await page.pdf({
    path: `${exportFolderPath}/cv_${timestamp}.pdf`,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0"
    }
  });

  await browser.close();
})();
