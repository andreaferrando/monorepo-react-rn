class Storage {
    constructor(){
      this._data = [];
    }
  
    add(item){
      this._data.push(item);
    }
  
    get(){
      return this._data[0]
    }
  }
  
  const instance = new Storage();
  Object.freeze(instance);
  
  export default instance;