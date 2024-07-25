import { action, computed, makeAutoObservable, observable } from "mobx";

export class TestStore {
  @observable
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }
}
