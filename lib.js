const obj = {
  key: 'value',
};

console.log('immediate', obj);

setTimeout(() => console.log('delayed', obj), 1000);

module.exports = function () {
  console.log('manully triggered', obj);
};

