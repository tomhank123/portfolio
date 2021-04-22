/* eslint-disable */
export function seedDatabase(firebase) {
  function getUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  firebase
    .firestore()
    .collection('projects')
    .add({
      id: getUUID(),
      node: {
        frontmatter: {
          date: '2021-04-19',
          title: 'Portfolio',
          tech: ['React JS', 'Styled Components', 'Firebase (Firestore & Auth)'],
          github: 'https://github.com/tomhank123/portfolio',
          external: 'https://github.com/tomhank123/portfolio',
          ios: null,
          android: null,
          company: '',
          cover:
            'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
        },
        html:
          "<p>A FreeCodeCamp Project. This site will display random quotes using the <a href='https://forismatic.com/ru/' target='_blank' rel='nofollow noopener noreferrer'>Forismatic API</a>. You can see the code and learn to work with API and front end. If you want, you can tweet the quotes. It will take you to a new page where you won't need to edit the post, because it brings only quotes below 140 characters.</p>",
      },
    });

  // firebase
  //   .firestore()
  //   .collection('projects')
  //   .add({
  //     id: getUUID(),
  //     node: {
  //       frontmatter: {
  //         date: '2020-09-15',
  //         title: 'Portfolio',
  //         tech: ['React JS', 'React Boilerplate', 'Styled Components'],
  //         github: 'https://github.com/ductran-94-dev',
  //         external: 'https://github.com/ductran-94-dev',
  //         ios: null,
  //         android: null,
  //         company: '',
  //         cover:
  //           'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
  //       },
  //       html:
  //         "<p>A FreeCodeCamp Project. This site will display random quotes using the <a href='https://forismatic.com/ru/' target='_blank' rel='nofollow noopener noreferrer'>Forismatic API</a>. You can see the code and learn to work with API and front end. If you want, you can tweet the quotes. It will take you to a new page where you won't need to edit the post, because it brings only quotes below 140 characters.</p>",
  //     },
  //   });

  // firebase
  //   .firestore()
  //   .collection('projects')
  //   .add({
  //     id: getUUID(),
  //     node: {
  //       frontmatter: {
  //         date: '2020-09-15',
  //         title: 'Random Quote Machine',
  //         tech: ['React JS', 'Typescript', 'Styled Components'],
  //         github: 'https://github.com/ductran-94-dev',
  //         external: 'https://github.com/ductran-94-dev',
  //         ios: null,
  //         android: null,
  //         company: '',
  //         cover:
  //           'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
  //       },
  //       html:
  //         "<p>A FreeCodeCamp Project. This site will display random quotes using the <a href='https://forismatic.com/ru/' target='_blank' rel='nofollow noopener noreferrer'>Forismatic API</a>. You can see the code and learn to work with API and front end. If you want, you can tweet the quotes. It will take you to a new page where you won't need to edit the post, because it brings only quotes below 140 characters.</p>",
  //     },
  //   });

  // firebase
  //   .firestore()
  //   .collection('projects')
  //   .add({
  //     id: getUUID(),
  //     node: {
  //       frontmatter: {
  //         date: '2020-08-02',
  //         title: 'Markdown Previewer',
  //         tech: ['React JS', 'Typescript', 'Styled Component'],
  //         github: 'https://github.com/ductran-94-dev',
  //         external: 'https://github.com/ductran-94-dev',
  //         ios: null,
  //         android: null,
  //         company: '',
  //         cover:
  //           'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
  //       },
  //       html:
  //         '<p>A FreeCodeCamp project. The goal is to create a dynamic Markdown previewer, made with React and SCSS. This app will use the Marked node package for the translation. The required user stories are: I can type GitHub-flavored Markdown into a text area, and I can see a preview of the output of my markdown that is updated as I type.</p>',
  //     },
  //   });

  // firebase
  //   .firestore()
  //   .collection('projects')
  //   .add({
  //     id: getUUID(),
  //     node: {
  //       frontmatter: {
  //         date: '2020-07-16',
  //         title: 'Drum Machine',
  //         tech: ['React JS', 'Typescript', 'Styled Component'],
  //         github: 'https://github.com/ductran-94-dev',
  //         external: 'https://github.com/ductran-94-dev',
  //         ios: null,
  //         android: null,
  //         company: '',
  //         cover:
  //           'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
  //       },
  //       html:
  //         "<p>A FreeCodeCamp Project. A drum machine built with React.js and free samples found on pretty sketchy drum kit websites. Read more about this project on <a href='https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-drum-machine' target='_blank' rel='nofollow noopener noreferrer'>FreeCodeCamp</a>.</p>",
  //     },
  //   });

  // firebase
  //   .firestore()
  //   .collection('projects')
  //   .add({
  //     id: getUUID(),
  //     node: {
  //       frontmatter: {
  //         date: '2020-03-27',
  //         title: 'JavaScript Calculator',
  //         tech: ['React JS', 'Typescript', 'Styled Component'],
  //         github: 'https://github.com/ductran-94-dev',
  //         external: 'https://github.com/ductran-94-dev',
  //         ios: null,
  //         android: null,
  //         company: '',
  //         cover:
  //           'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
  //       },
  //       html:
  //         "<p>A FreeCodeCamp project. This is a pocket calculator. The user can enter calculations and view the output. They are able to input positive or negative values, and decimal or non-decimal values. The calculator follows the <a href='https://www.mathsisfun.com/operation-order-bodmas.html' target='_blank' rel='nofollow noopener noreferrer'>BODMAS</a> order of operations rule: multiplication and division operators have precedence over addition and subtraction operators. The user can cancel their last entry using the 'CE' button, and can cancel their entire input using the 'C' button.</p>",
  //     },
  //   });

  // firebase
  //   .firestore()
  //   .collection('projects')
  //   .add({
  //     id: getUUID(),
  //     node: {
  //       frontmatter: {
  //         date: '2020-01-10',
  //         title: '25 + 5 Clock',
  //         tech: ['React JS', 'Typescript', 'Styled Component'],
  //         github: 'https://github.com/ductran-94-dev',
  //         external: 'https://github.com/ductran-94-dev',
  //         ios: '',
  //         android: '',
  //         company: '',
  //         cover:
  //           'https://webdoctor.vn/wp-content/uploads/2017/10/Cach-chon-background-khi-thiet-ke-website.png',
  //       },
  //       html:
  //         "<p>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by <a href='https://francescocirillo.com/pages/pomodoro-technique' target='_blank' rel='nofollow noopener noreferrer'>Pomodoro Technique</a> which is a time management method developed by Francesco Cirillo.</p>",
  //     },
  //   });
}
