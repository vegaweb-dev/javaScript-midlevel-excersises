function testInput(re, str) {
    const midstring = re.test(str) ? 'contains' : 'does not contain';
    console.log(`${str} ${midstring} ${re.source}`);
  }

 console.log( testInput(/hola/,'holamundo'))