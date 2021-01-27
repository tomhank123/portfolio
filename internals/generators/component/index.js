/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'newComponent',
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
      path: '../../src/components/{{camelCase name}}/{{camelCase name}}.tsx',
      templateFile: './component/component.tsx.hbs'
    },
    {
      type: 'add',
      path: '../../src/components/{{camelCase name}}/index.tsx',
      templateFile: './component/index.ts.hbs'
    },
    {
      type: 'add',
      path: '../../src/components/{{camelCase name}}/styles/{{camelCase name}}.ts',
      templateFile: './component/styles/component.ts.hbs'
    },
    {
      type: 'append',
      path: '../../src/components/index.ts',
      pattern: `/* PLOP_COMPONENTS_EXPORT */`,
      template: `export { default as {{pascalCase name}} } from './{{camelCase name}}';`
    },
  ]
};
