
  const containerDom = document.querySelector('.container');

/*for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    }
    else if (i % 5 == 0) {
        console.log("buzz");
    }
    else if (i % 3 == 0) {
        console.log("fizz")
    }
    else {
        console.log(i);
    }
};*/

for(let i = 1; i <= 100; i++){
    const box = document.createElement('div');
    box.classList.add('square');
    box.append(i);
    containerDom.append(box);
    if (i % 3 == 0 && i % 5 == 0) {
       box.innerHTML = ("fizzbuzz");
    }
    else if (i % 5 == 0) {
        box.innerHTML = ("buzz");
    }
    else if (i % 3 == 0) {
      box.innerHTML = ("fizz")
    }
    else {
        box.innerHTML = (i);
    }

}
  
   