const fs = require("fs");
const path = require("path");
const { getChildFolders, getFolderMdFilenames } = require("./util");

const getContestChildren = (dirname) => {
  const p = path.resolve(__dirname, `../../contest/${dirname}`);
  return getChildFolders(p)
    .filter((d) => fs.existsSync(path.join(p, d, "README.md")))
    .sort((a, b) => (a < b ? 1 : -1))
    .map((d) => d + "/");
};

const getContestLeetCode = () => {
  fs.readdirSync(path.resolve(__dirname, "../../contest/leetcode"), {
    withFileTypes: true,
  })
    .filter((f) => f.isFile() && f.name.endsWith(".md"))
    .map((f) => f.name.substring(0, f.name.lastIndexOf(".")));
};

module.exports = {
  // "/contest/leetcode/": [
  //   "",
  //   {
  //     title: "周赛",
  //     collapsable: false,
  //     children: getFolderMdFilenames(
  //       path.resolve(__dirname, "../../contest/leetcode")
  //     ).filter((f) => f.startsWith("weekly")),
  //   },
  //   {
  //     title: "双周赛",
  //     collapsable: false,
  //     children: getFolderMdFilenames(
  //       path.resolve(__dirname, "../../contest/leetcode")
  //     ).filter((f) => f.startsWith("biweekly")),
  //   },
  // ],
  // "/contest/atcoder/": [
  //   "",
  //   {
  //     title: "AtCoder Beginner Contest",
  //     collapsable: false,
  //     children: getContestChildren("atcoder"),
  //   },
  // ],
  "/contest/leetcode/": [
    "",
    {
      title: "周赛",
      collapsable: false,
      children: [
        "weekly-contest-210",
        "weekly-contest-211",
        "weekly-contest-212",
        "weekly-contest-214",
        "weekly-contest-220",
        "weekly-contest-221",
        "weekly-contest-222",
        "weekly-contest-224",
        "weekly-contest-227",
      ],
    },
    {
      title: "双周赛",
      collapsable: false,
      children: ["biweekly-contest-45"],
    },
  ],
  "/contest/atcoder/": [
    "",
    {
      title: "AtCoder Beginner Contest",
      collapsable: false,
      children: ["abc191/", "abc190/", "abc189/"],
    },
  ],
};
console.log(JSON.stringify(getContestLeetCode()));