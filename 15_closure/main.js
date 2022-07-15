/*********************17_closer***********************************/
/*1*/

/*export*/
//const makeCounter = () => {
//  let count = 0;
//  return function () {
//    return count++;
//  };
//};
//
//const counter1 = makeCounter();
//const counter2 = makeCounter();
//
//console.log(counter1()); //0
//console.log(counter1()); //1
//console.log(counter2()); //0
//console.log(counter1()); //2
//console.log(counter2()); //1


/******************************************************************/
/*1h*Фабрика*калькуляторів/
/*expor*/ 
//const createCalculator = () => {
//  let memory = 0;
//
//  function add(num) {
//    memory += num;
//  }
//
//  function decrease(num) {
//    memory -= num;
//  }
//
//  function reset(num) {
//    memory = 0;
//  }
//
//  function getMemo() {
//    return memory;
//  }
//
//  return {
//    add,
//    decrease,
//    reset,
//    getMemo,
//  };
//};
//
//const calculator = createCalculator();
//const calculatorNext = createCalculator();
//
//console.log(calculator.getMemo(10)); // 0
//console.log(calculator.add(3));
//console.log(calculator.getMemo(4)); // 3
//console.log(calculator.decrease(5));
//console.log(calculatorNext.add(5));
//console.log(calculatorNext.getMemo(10)); // 5
//console.log(calculator.getMemo(110)); // -2
//console.log(calculator.reset(2));
//console.log(calculator.getMemo(4)); // 0

/******************************************************************/
/*2h***Logger***/

///*export*/ const createLogger = () => {
//  const result = [];
//
//  function warn(str) {
//    result.push({ message: str, type: 'warn', dateTime: new Date() });
//  }
//
//  function error(str) {
//    result.push({ message: str, type: 'error', dateTime: new Date() });
//  }
//  function log(str) {
//    result.push({ message: str, type: 'log', dateTime: new Date() });
//  }
//
//  function getRecords(str) {
//    if (str === 'log') {
//      return result
//        .filter(el => el.type === 'log')
//        .sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
//    }
//    if (str === 'error') {
//      return result
//        .filter(el => el.type === 'error')
//        .sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
//    }
//    if (str === 'warn') {
//      return result
//        .filter(el => el.type === 'warn')
//        .sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
//    }
//    return result.sort((firstEl, secondEl) => secondEl.dateTime - firstEl.dateTime);
//  }
//
//  return { warn, error, log, getRecords };
//};
//
//// // examples
//const logger1 = createLogger();
//logger1.log('User logged in');
//logger1.warn('User is tring to ented restricted page');
//logger1.log('User logged out');
//logger1.error('Unexpected error on the site');
//
//console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
//console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
//console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
//console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]
//
//const logger2 = createLogger();
//logger2.warn('Opps, something is happenning');
//logger2.getRecords('error'); // ===> []
//logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
//logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
//
//const logger3 = createLogger();
//logger3.getRecords('error'); // ===> []
//logger3.getRecords(); // ===> []

/******************************************************************/

//if (!Number.isInteger(num)) {
//    return null;
//  }