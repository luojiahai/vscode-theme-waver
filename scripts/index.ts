import fs from "fs-extra";
import getTheme from "./theme";

console.log("begin");

fs.mkdir("./themes", { recursive: true }).then(() =>
  Promise.all([
    fs.writeJSON(
      "./themes/waver-light-color-theme.json",
      getTheme({
        color: "light",
        name: "Waver Light",
      }),
      { spaces: 2 }
    ),
    fs.writeJSON(
      "./themes/waver-dark-color-theme.json",
      getTheme({
        color: "dark",
        name: "Waver Dark",
      }),
      { spaces: 2 }
    ),
  ])
);

console.log("end");
