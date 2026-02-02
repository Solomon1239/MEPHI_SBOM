const axios = require("axios");
const minimist = require("minimist");
const _ = require("lodash");


async function main() {
  const args = minimist(process.argv.slice(2));
  const url = args.url || "https://example.com";
  const pick = args.pick || "title";

  const res = await axios.get(url, { timeout: 5000 });
  const html = String(res.data || "");

  const match = html.match(/<title>(.*?)<\/title>/i);
  const title = match ? match[1] : "no-title";

  const out = {
    url,
    pickedField: pick,
    title: _.trim(title),
    length: html.length
  };

  console.log(JSON.stringify(out, null, 2));
}

main().catch((e) => {
  console.error("ERROR:", e && e.message ? e.message : e);
  process.exit(1);
});
