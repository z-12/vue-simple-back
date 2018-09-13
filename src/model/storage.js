//  模块化的文件
//  封装localStroage本地存储方法

var storage = {

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {
    localStorage.removeItem(key);
  }
}

export default storage;
