import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoaderPromise{
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((data) => {
          return json(data);
        })
        .then((value) => {
          const saving = JSON.parse(value);
          resolve(new GameSaving(...Object.values(saving)));
        })
        .catch(() => {
          reject(new Error('Failed to read'));
        });
    });
  }
}
