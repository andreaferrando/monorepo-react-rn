class Platform {
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
  
  const instance = new Platform();
  Object.freeze(instance);
  
  export default instance;