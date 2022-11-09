# Task01.v2-zaitsava
Evolution Bootcamp task

## Task: 5 Tests, README, commit -> push -> merge
1. Create a tests file named ‘rectangle.test.js’ is the ‘tests’ folder. Write tests for the functions provided in the 'rectangle.js' file. You need to write at least one test for each function to verify the 'happy path'.

2.	Run the command ‘yarn add @babel/preset-env --dev’ in order to add babel/preset-env as development dependency.
After that, check the 'package.json' file if the development dependency was added:

```json
  "devDependencies": {
    "@babel/preset-env": "^7.20.2"
}
```

Add file 'babel.config.cjs' with the following content to the task folder:

```text
   module.exports = {
      presets: [
      [
         '@babel/preset-env',
         {
            targets: {
            node: 'current'
            }
         }
      ]
      ]
   };
```


3. Run 'yarn' or 'yarn install' command in order to set up all project dependencies.

4. Run 'yarn test' command to run your tests and check the result.

