// var id = prompt('아이디 입력');
// var password = prompt('비밀번호 입력');
// if(id == 'asdf' && password === '1234'){
// 
    
//     if(password == '1234'){
//         alert(id+' 로그인 완료');
//         alert(id);
//     }else{
//         alert('비밀번호 불일치');
//     }
// } else{
//     alert('아이디 또는 비밀번호 불일치');
// }



// for (let i = 0; i < 10; i++) {
    // document.write('hi for['+i+']<br>');
    // if(i === 5){
        // break;
        // continue;
        // for(var j = 0;j <10;j++){
            // document.write('cording'+i+j+'<br>');
        // }
    // }
// }

// var a = 0;
// while(a < 3){
//     document.write('hi while['+a+']<br>');
//     a = a + 1;
// }

// document.write('hii<br>');

// while()

// 04.13
// function numbering(e) {
//     // document.write('<h2>asdf</h2>');
//     i = 0;
//     while(i < e){
//         document.write(i+'<br>');
//         i += 1;
//     }
// }

// numbering(5);
// numbering(10);

// function get_mem1() {
//     return 'egoing';
//     return 'egoing'; //이건 리턴 뒤라서 무시됨

// }
// function get_mem2() {
//     return 'k88';
// }

// alert(get_mem1());
// alert(get_mem2());

// function get_arg(arg,arg2){ //매개변수 파라미터
//     // return arg+'ddd';
//     return arg*100 + arg2;
// };
// get_arg('eeo');
// console.log(get_arg(2,20)); //인자 아귀먼트


// var numbering = function() {
//     i = 0;
//     while(i <10) {
//         document.write(i);
//         i ++;
//     }
// }
// numbering; //이건 실행안됨
// numbering();



// var mem = ['egoing','k88','sori',777];
// for(i=0;i < mem.length;i++){
//     document.write(mem[i]+'<br>');
// }

// var temp = [0,1,2,3,4];
// function match(arg){
// if(arg === temp[1]){
//     alert('right');
// }else{
//     alert('wrong');
// };
// }

// match(1);
 

// function get_mem(){
//     return ['egoing','k88','sori','tttest'];
// }

// var mem = get_mem();

// for(i=0;i<mem.length;i++){
// document.write(mem[i].toUpperCase()+'<br>');
//}


var li=['a','b','c','d','e'];
// li = li.concat(['f','g']); //concat만 할당해 줌
// li.push('f',1,'ㅁㄴㅇㄹ'); //배열 맨뒤에 추가
// li.unshift('zz'); // 배열 맨앞에 추가
// li.splice(1,0,'d','d');// 1:인덱1, 0:그 앞(1이면 그 뒤 기존 유지하고 추가됨)
// li.splice(1,1,'ㅌ','ㅌ','ㅌ');// 1:인덱1, 1:그 자리부터 1개 대체 이후엔 추가)
// li.shift();
// li.pop();
alert(li);