import { select, input } from "@inquirer/prompts";
import mit from "./templates/mit.ts";
import { licenses } from "./templates/licenses.ts";

const choice = await select({
  message: "Choose a license",
  choices: [
    { name: "MIT License", value: "mit" },
    { name: "Apache License 2.0", value: "apache" },
    { name: "GPL-3.0", value: "gpl-3.0" },
  ],
});

const license = licenses.filter((c) => c.name === choice)[0].license;

// console.log(licenses[license].license.content);

// for (const variable of mit.variables) {
//   if (variable.name === "the year") {
//     const value = await input({
//       message: `Enter ${variable.name}`,
//       default: new Date().getFullYear().toString(),
//     });
//     mit.content = mit.content.replace(variable.value, value);
//     continue;
//   }

//   const value = await input({
//     message: `Enter ${variable.name}`,
//   });
//   mit.content = mit.content.replace(variable.value, value);
// }
