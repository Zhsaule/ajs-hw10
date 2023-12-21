import read from '../reader';

describe('read', () => {
  test('should resolve with the ArrayBuffer', async () => {
    const result = await read();
    expect(result).toBeInstanceOf(ArrayBuffer);
  });

  // Add more test cases to cover different scenarios
});
