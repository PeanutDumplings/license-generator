import { select, input } from "@inquirer/prompts";
import licenses from "./licenses.ts";
import fs from "node:fs";
import path from "node:path";
import chalk from "chalk";

const choice = await select({
  message: "Choose a license",
  choices: [
    { name: "MIT License", value: "mit" },
    { name: "GNU General Public License v3", value: "gnu_gpl_v3" },
    { name: "GNU Affero General Public License v3", value: "gnu_agpl_v3" },
    { name: "GNU Lesser General Public License v3", value: "gnu_lgpl_v3" },
    { name: "Mozilla Public License v2", value: "mozilla_pl_v2" },
    { name: "Apache License v2", value: "apache_l_v2" },
    { name: "Boost Software License v1", value: "boost_l_v1" },
    { name: "The Unlicense", value: "the_unlicense" },
  ],
});

const license = licenses.filter((c) => c.name === choice)[0].license;

for (const variable of license.variables) {
  if (variable.name === "the year") {
    const value = await input({
      message: `Enter ${variable.name}`,
      default: new Date().getFullYear().toString(),
    });
    license.content = license.content.replace(variable.value, value);
    continue;
  }

  const value = await input({
    message: `Enter ${variable.name}`,
  });
  license.content = license.content.replace(variable.value, value);
}

const filepath = path.join(process.cwd(), "LICENSE");
fs.writeFileSync(filepath, license.content);

console.log(
  chalk.greenBright(
    `License created successfully${
      license.variables.length > 0
        ? `\nPlease take a look at it and make changes if necessary`
        : ""
    }`
  )
);

process.exit(0);
