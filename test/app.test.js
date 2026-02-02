const assert = require("assert");
const _ = require("lodash");

function run() {
  // Проверяем, что lodash работает и возвращает строку без пробелов
  const v = _.trim("  hello  ");
  assert.strictEqual(v, "hello");
  console.log("OK: basic lodash trim test passed");
}

run();
