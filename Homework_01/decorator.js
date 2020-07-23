function pause(func, t) {
  t *= 1000;
  setTimeout(func, t);
}

function cons() {
  return console.log('А вот и функция выполнилась');
}

pause(cons, 5);
