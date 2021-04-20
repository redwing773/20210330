document.getElementsByName('h1');
//alert('Im working');
//console.log('dddd');

// array 배열
//const something = "something";
//const daysOfWeek = ["MON","Tue","Wed","Thu","Fri","Sat","Sun",true,1,something];
//console.log(daysOfWeek);

// object 객체
const nicoInf = {
    name : "Nico",
    age : 33,
    gender : "Male",
    favMovies : ["God Father","Oldboy"],
    favFood : [{
        name : "kimchi",
        fatty : false,
    },{
        name : "burger",
        fatty : true,
    }
    ]
};
nicoInf.age = 42;
// console.log(nicoInf.age);
// console.log(nicoInf);

function sayHello (aa1,bb2){
    console.log("hello",aa1,bb2);
    console.log(`hello ${aa1} you are ${bb2} years old`)
};
sayHello('Nicolas',42);
console.log('hi');


const calculator = {
    plus : function(){

    }

}

const plus = calculator.plus(5,5)

const title = document.querySelector('#title');
title.innerHTML = "Hi Bye Hi";
title.style.color = 'red';
document.title = "123";
console.dir('title');





// title.addEventListener('click',handleClick);

const BASE_COLOR = '#34495e';
const OTHER_COLOR = '#7f8c8d';

function handleClick(event){
    // let currentColor = title.style.color;
    // if(true){
    //     title.style.color = 'blue';

    // }

    const CLICKED_CLASS = 'clicked';

    const currentClass = title.className;
    // if(currentClass !== CLICKED_CLASS){
    //     title.className = CLICKED_CLASS;
    // }
    // else{
    //     title.className = 'color';
    // }
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else{
        title.classList.add(CLICKED_CLASS);
    }
    
}


function init(){
    title.addEventListener('click',handleClick);
}
init();

