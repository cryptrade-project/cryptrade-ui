let icons = [
    "photo-camera",
    "adjust",
    "assets",
    "checkmark-circle",
    "chevron-down",
    "clippy",
    "clock",
    "cog",
    "cogs",
    "connected",
    "connect",
    "cross-circle",
    "dashboard",
    "deposit",
    "disconnected",
    "dollar-green",
    "dollar",
    "download",
    "excel",
    "eye",
    "eye-striked",
    "fi-star",
    "folder",
    "grouping",
    "hamburger-x",
    "hamburger",
    "hourglass",
    "key",
    "list",
    "locked",
    "minus-circle",
    "moon",
    "news",
    "plus-circle",
    "power",
    "question-circle",
    "server",
    "settle",
    "share",
    "shuffle",
    "sun",
    "text",
    "thumb-tack",
    "thumb-untack",
    "thumbs-up",
    "times",
    "trade",
    "transfer",
    "unlocked",
    "user",
    "warning",
    "withdraw",
    "filter",
    "info-circle-o",
    "zoom",
    "people",
    "fire",
    "question-in-circle",
    "attention",
    "checkmark",
    "paperclip"
];

let iconsMap = {};
for (let i of icons) iconsMap[i] = require(`./${i}.svg`);

export default iconsMap;
