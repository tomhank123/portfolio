module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a dumb/presentation component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/{{camelCase name}}.tsx',
        templateFile: 'config/generator/component/component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/index.tsx',
        templateFile: 'config/generator/component/index.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{camelCase name}}/styles/{{camelCase name}}.ts',
        templateFile: 'config/generator/component/styles/component.ts.hbs'
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_COMPONENTS_EXPORT */`,
        template: `export { default as {{pascalCase name}} } from './{{camelCase name}}';`
      },
    ]
  })

  plop.setGenerator('container', {
    description: 'Create a container, with Bussiness logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your container name?',
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/containers/{{camelCase name}}/{{camelCase name}}.tsx',
        templateFile: 'config/generator/container/container.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/containers/{{camelCase name}}/index.tsx',
        templateFile: 'config/generator/container/index.ts.hbs'
      },
    ]
  })
}
