
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
let i = 1
for (; i <= 100; i++) {
    const box = document.createElement('div');
    box.classList.add('square');
    box.append(i);
    containerDom.append(box);
    if (i % 3 == 0 && i % 5 == 0) {
        box.innerHTML = ("fizzbuzz");  box.classList.add('red') ;box.classList.add('rounded');
    }
    else if (i % 5 == 0) {
        box.innerHTML = ("buzz"); box.classList.add('green'); box.classList.add('rounded');
    }
    else if (i % 3 == 0) {
        box.innerHTML = ("fizz"); box.classList.add('yellow'); box.classList.add('rounded');
    }
    else {
        box.innerHTML = (i); box.classList.add('rounded')
    }

};

const infoDom =  document.querySelector('.info');
const pageInfo = document.querySelector('.pageInfo');
infoDom.addEventListener('click',
function(){
    pageInfo.classList.remove('dnone');
});



const closeDom =  document.querySelector('.close');
closeDom.addEventListener('click',
function(){
    pageInfo.classList.add('dnone');
})
