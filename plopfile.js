export default function(plop) {
    plop.setGenerator('header', {
      description: 'Generate a new header component',
      prompts: [{
        type: 'input',
        name: 'name',
        message: 'Enter the name of the header component:'
      }],
      actions: [{
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.jsx',
        templateFile: 'templates/Header/Header.jsx'
      }, {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.scss',
        templateFile: 'templates/Header/Header.scss'
      }]
    });

  plop.setGenerator('navmobile', {
    description: 'Generate a new navmobile component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter the name of the navmobile component:'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.jsx',
      templateFile: 'templates/Navmobile/NavMobile.jsx'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.scss',
      templateFile: 'templates/Navmobile/NavMobile.scss'
    }]
  });

  plop.setGenerator('navDesktop', {
    description: 'Generate a new desktop navigation component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter the name of the desktop navigation component:'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.jsx',
      templateFile: 'templates/NavDesktop/NavDesktop.jsx'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.scss',
      templateFile: 'templates/NavDesktop/NavDesktop.scss'
    }]
  });

  plop.setGenerator('section', {
    description: 'Generate a new section component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter the name of the section component:'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.jsx',
      templateFile: 'templates/Section/Section.jsx'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.scss',
      templateFile: 'templates/Section/Section.scss'
    }]
  });

  plop.setGenerator('footer', {
    description: 'Generate a new section component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Enter the name of the section component:'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.jsx',
      templateFile: 'templates/Footer/Footer.jsx'
    }, {
      type: 'add',
      path: 'src/components/{{name}}/{{name}}.scss',
      templateFile: 'templates/Footer/Footer.scss'
    }]
  });
}