const fs = require('fs');

module.exports = function (plop) {
  plop.setGenerator('add-wdio-config-and-dependencies', {
    description: 'Add WebDriverIO related devDependencies and wdio.win32.conf.ts file',

    // Define prompts as an empty array since we're adding everything automatically
    prompts: [],

    actions: [
      {
        type: 'modify',
        path: 'package.json',
        transform: (content) => {
          const packageJson = JSON.parse(content);

          // Define the devDependencies you want to add
          const devDependenciesToAdd = {
            "@types/jasmine": "5.1.4",
            "@wdio/appium-service": "^8.40.0",
            "@wdio/cli": "^8.40.0",
            "@wdio/globals": "^8.40.0",
            "@wdio/jasmine-framework": "^8.40.0",
            "@wdio/json-reporter": "^8.40.0",
            "@wdio/local-runner": "^8.40.0",
            "@wdio/spec-reporter": "^8.40.0",
            "appium": "^2.11.2",
            "appium-windows-driver": "^2.12.18",
            "plop": "^4.0.1",
            "ts-node": "^10.7.0",
            "typescript": "^4.9.4",
            "webdriverio": "^8.40.0"
          };

          // Add the devDependencies to the package.json object
          packageJson.devDependencies = packageJson.devDependencies || {};
          for (const [key, value] of Object.entries(devDependenciesToAdd)) {
            packageJson.devDependencies[key] = value;
          }

          // Return the updated package.json content as a string
          return JSON.stringify(packageJson, null, 2);
        }
      },
      {
        type: 'add',
        path: 'wdio.win32.conf.ts',
        templateFile: 'plop-templates/wdio.win32.conf.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'tsconfig.json',
        templateFile: 'plop-templates/tsconfig.json.hbs',
        skipIfExists: true // Skip if tsconfig.json already exists
      },
      {
        type: 'modify',
        path: 'tsconfig.json',
        transform: (content) => {
          const tsConfig = JSON.parse(content);

          tsConfig.compilerOptions = tsConfig.compilerOptions || {};
          tsConfig.compilerOptions.types = tsConfig.compilerOptions.types || [];

          const typesToAdd = ["@types/jasmine", "@wdio/globals/types", "@wdio/jasmine-framework", "node"];

          tsConfig.compilerOptions.types = Array.from(new Set([...tsConfig.compilerOptions.types, ...typesToAdd]));

          return JSON.stringify(tsConfig, null, 2);
        },
        skip: () => {
          // Check if tsconfig.json exists before trying to modify it
          if (!fs.existsSync('tsconfig.json')) {
            return 'File does not exist, so it cannot be modified.';
          }
        }
      },
      {
        type: 'add',
        path: 'src/specs/ExampleSpec.spec.ts',
        templateFile: 'plop-templates/specs/ExampleSpec.spec.ts.hbs',
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'src/pages/ExamplePageObject.ts',
        templateFile: 'plop-templates/pages/ExamplePageObject.ts.hbs',
        abortOnFail: true
      },
    ]
  });
};