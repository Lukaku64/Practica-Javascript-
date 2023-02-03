function fizzBuzzII(arg1, arg2, final, fizz_num = 3, buzz_num = 5) {
  let i = 1;

  while (i <= final) {
    if (i % fizz_num == 0 && i % buzz_num == 0) {
      console.log(i, `${arg1} ${arg2}`);
    } else if (i % buzz_num == 0) {
      console.log(i, arg2);
    } else if (i % fizz_num == 0) {
      console.log(i, arg1);
    } else {
      console.log(i);
    }
    i++;
  }
}
