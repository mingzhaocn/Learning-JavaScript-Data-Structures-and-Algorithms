/**
 * Created by songmz on 2017/5/9.
 */
const baseConverter = require('./algorithm/baseConverter');

/* 进制转换 */
const convertedString = baseConverter(1024, 2);
console.log('1024(10) -> ?(2) : ', convertedString);

/* 汉诺塔 */
