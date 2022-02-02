## Node Version
node version > 14.0.0

## React
npx create-react-app {name}
cd {name}

## Instrument
npm i @cypress/instrument-cra
update "package.json"
```
  "scripts": {
    "start": "react-scripts -r @cypress/instrument-cra start",
```

## Cypress
npm install -D cypress
npx cypress open

# Code Coverage
npm i -D @cypress/code-coverage babel-plugin-istanbul istanbul-instrumenter-loader nyc

.babelrc
```
{
  "presets": [
    "react-app"
  ],
  "plugins": [
    "istanbul"
  ]
}
```

.nycrc
```
{
  "reporter": [
    "text",
    "cobertura",
    "lcov",
    "json"
  ],
  "exclude": [
    "cypress/"
  ]
}
```

add to cypress/support/index.js
```
import '@cypress/code-coverage/support'
```

add to the module.exports of cypress/plugins/index.js
```
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)

  return config
```

npx nyc --clean cypress run


# Cucumber
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
- npm i -D cypress-cucumber-preprocessor
If @cypress-cucumber-preprocessor gets installed, delete.

## Standard
npm i -D standard gherkin-lint
