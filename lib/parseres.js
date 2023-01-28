botinfo = {
  botname: "᚛ᷝ ͣ ͫㄥㄖ丂乇尺 ͭ ͪ᚜ͤ",
  unicode: {
    head: "⬣",
    list: "⬡",
    body: "┃",
    upper: "┏",
    down: "┗",
    line: "━",
    wings: ["𓆩 ", " 𓆪"],
    needed: ["<", ">"],
    optional: ["(", ")"],
  },
};

module.exports = function parseResult(json, options = {}) {
  let { list, head, upper, down, line } = botinfo.unicode;
  let opts = {
    unicode: true,
    ignoreVal: [null, undefined],
    ignoreKey: [],
    title: options.title || botinfo.botname,
    headers: `${head}${line.repeat(4)}${list} _*%title*_`,
    body: `${list} *%key*: _%value_`,
    footer: head + line + line + line + list + "\n",
    ...options,
  };
  let { unicode, ignoreKey, title, headers, ignoreVal, body, footer } = opts;

  let obj = Object.entries(json);
  let tmp = [];
  for (let [_key, val] of obj) {
    if (ignoreVal.indexOf(val) !== -1) continue;
    let key = _key[0].toUpperCase() + _key.slice(1);
    let type = typeof val;
    if (ignoreKey && ignoreKey.includes(_key)) continue;
    switch (type) {
      case "boolean":
        tmp.push([key, val ? "Ya" : "Tidak"]);
        break;
      case "object":
        if (Array.isArray(val)) {
          tmp.push([key, val.join(", ")]);
        } else {
          tmp.push([
            key,
            parseResult(val, {
              ignoreKey,
              unicode: false,
            }),
          ]);
        }
        break;
      default:
        tmp.push([key, val]);
        break;
    }
  }
  if (unicode) {
    let text = [
      headers.replace(/%title/g, title),
      tmp
        .map((v) => {
          return body.replace(/%key/g, v[0]).replace(/%value/g, v[1]);
        })
        .join("\n"),
      footer,
    ];
    return text.join("\n").trim();
  }
  return tmp;
};
