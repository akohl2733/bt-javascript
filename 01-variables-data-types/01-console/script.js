console.log(true, 'Hello', 20);

const x = 100;

console.log(x);

console.error("Alert");

console.warn("Warning");

console.table({name: 'Andrew', email: 'akohl2733@gmail.com'})

console.group('simple');
console.log(x);
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green;'

console.log('%cHello World', styles);