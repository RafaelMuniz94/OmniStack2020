function getTime() {
  let date = new Date();
  return `${date.getHours()}:${
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
  }:${date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`}`;
}
 
module.exports = {
  getTime,
};
