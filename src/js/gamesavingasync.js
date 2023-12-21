import read from './reader';
import json from './parser';

export default class GameSavingLoaderAsync {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return JSON.parse(value);
    } catch (error) {
      throw new Error('Failed to read');
    }
  }
}
