class Storage {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
  }

  get() {
    return this.data[0];
  }
}

const instance = new Storage();
Object.freeze(instance);

export default instance;
