import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoaderAsync{
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      const saving = JSON.parse(value)
      return new GameSaving(...Object.values(saving));
    } catch (error) {
      throw new Error('Failed to read');
    }
  }
}
