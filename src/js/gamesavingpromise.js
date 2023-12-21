import read from './reader';
import json from './parser';

// export default class GameSavingLoaderPromise {
//   static load() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const data = await read();
//         const value = await json(data);
//         const saving = JSON.parse(value);
//         resolve(saving);
//       } catch (error) {
//         reject('Failed to read the file');
//       }
//     });
//   }
// }
export default class GameSavingLoaderPromise {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => {
          return json(data);
        })
        .then((value) => {
          const saving = JSON.parse(value);
          resolve(saving);
        })
        .catch(() => {
          reject(new Error('Failed to read'));
        });
    });
  }
}