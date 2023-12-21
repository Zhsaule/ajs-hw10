// TODO: write your code here
import GameSavingLoaderAsync from "./gamesavingasync";
import GameSavingLoaderPromise from "./gamesavingpromise";

console.log('worked');

//HW9 Promises
GameSavingLoaderPromise.load()
  .then((saving) => {
    // saving - объект класса GameSaving
    console.log('HW9 Promises');
    console.log(saving);
  })
  .catch((error) => {
    // обработка ошибки
    console.log(error);
  });

  
//HW async/await
(async () => {
  try {
    const saving = await GameSavingLoaderAsync.load();
    console.log('HW9 async/await');
    console.log(saving);
    // saving - объект класса GameSaving
  } catch (error) {
    // обработка ошибки
    console.log(error);
  }
})();
  