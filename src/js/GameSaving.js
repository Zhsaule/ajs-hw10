export default class GameSaving {
  constructor(id, created, userInfo) {
    this.id = id; // id сохранения
    this.created = created; // timestamp создания
    this.userInfo = userInfo; // информация о пользователе
  }
}