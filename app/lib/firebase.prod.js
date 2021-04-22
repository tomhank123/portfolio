/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from './seed';

const config = {
  apiKey: 'AIzaSyAkIvtDhaJkQekrwRvUr9YAZhTtGJQU4tM',
  authDomain: 'portfolio-b9425.firebaseapp.com',
  projectId: 'portfolio-b9425',
  storageBucket: 'portfolio-b9425.appspot.com',
  messagingSenderId: '343264800010',
  appId: '1:343264800010:web:e7c19560388d3528609ef3',
  measurementId: 'G-DP8RTFYZ01',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
