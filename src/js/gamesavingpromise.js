import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoaderPromise{
  static load() {  
    return read()
      .then((data) => json(data))
      .then((value) => JSON.parse(value))
      .then(({id, created, userInfo}) => new GameSaving(id, created, userInfo))
      .catch('Failed to read')
  }
}
