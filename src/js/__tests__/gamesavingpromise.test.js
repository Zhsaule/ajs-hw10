import GameSavingLoaderPromise from '../gamesavingpromise';
import read from '../reader';
import json from '../parser';
import GameSaving from '../GameSaving';

jest.mock('../reader');
jest.mock('../parser');

test('Проверка Resolved', async () => {
  const data = new ArrayBuffer(10);
  const value = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const saving = new GameSaving(...Object.values(JSON.parse(value)));

  read.mockResolvedValue(data);
  json.mockResolvedValue(value);

  const result = await GameSavingLoaderPromise.load();
  expect(result).toEqual(saving);
});

test('Проверка Rejected', async () => {
  const error = new Error('Failed to read');
  read.mockRejectedValue(error);

  await expect(GameSavingLoaderPromise.load()).rejects.toEqual(error);
});

