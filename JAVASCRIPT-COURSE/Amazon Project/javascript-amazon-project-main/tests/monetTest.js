import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

//basic test case
if(formatCurrency(2095) === '20.95') {
  console.log('passed formatCurrency(2095)');
} else {
  console.log('failed formatCurrency(2095)');
}

console.log('works with 0');
//edge cases
if(formatCurrency(0) === '0.00') {
  console.log('passed formatCurrency(0)');
} else {
  console.log('failed formatCurrency(0)');
}

console.log('rounds up to the nearest cent')
if(formatCurrency(2000.5) === '20.01') {
  console.log('passed formatCurrency(2000.5)');
} else {
  console.log('failed formatCurrency(2000.5)');
}

if(formatCurrency(2000.4) === '20.00') {
  console.log('passed formatCurrency(2000.4)');
} else {
  console.log('failed formatCurrency(2000.4)');
}