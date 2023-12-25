import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoaderAsync{
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const { id, created, userInfo } = JSON.parse(value);
      return new GameSaving(id, created, userInfo);
    } catch (error) {
      throw new Error('Failed to read');
    }
  }
}
