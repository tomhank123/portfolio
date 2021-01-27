/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    }
  ],
  actions: [
    {
      type: 'add',
      path: '../../src/containers/{{camelCase name}}/{{camelCase name}}.tsx',
      templateFile: './container/container.tsx.hbs',
      abortOnFail: true
    },
    {
      type: 'add',
      path: '../../src/containers/{{camelCase name}}/index.tsx',
      templateFile: './container/index.ts.hbs',
      abortOnFail: true
    },
  ]
};
