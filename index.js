const rewire = require('rewire');

const lib = rewire('./lib');
const obj = lib.__get__('obj');
obj.key = '123';
obj.key2 = '321';

lib();
