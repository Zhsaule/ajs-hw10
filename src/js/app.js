// TODO: write your code here
import GameSavingLoaderAsync from "./gamesavingasync";
import GameSavingLoaderPromise from "./GameSavingPromise";

console.log('worked');

//HW9 Promises
console.log('HW9 Promises');
const promiseSaving = GameSavingLoaderPromise.load();
console.log(promiseSaving);
promiseSaving.then((value) => {
  console.log(value);
  // value содержит значение PromiseResult
});


//HW async/await
(async () => {
  try {
    const asyncSaving = await GameSavingLoaderAsync.load();
    console.log('HW9 async/await');
    console.log(asyncSaving);
    // asyncSaving - объект класса GameSaving
  } catch (error) {
    // обработка ошибки
    console.log(error);
  }
})();
  