// har qanday malumot turini numberga otkazish
// console.log(typeof Number("1222"));
// Number atributi ichida kelgan har qanday narsa raqam korinishida boladi




// string("buuni ichida har qanday narsa string oddiy matn korinishida koinadi")
// console.log(typeof String(25555));

//is NaN
// console.log(typeof  isNaN(5));

// operatorlar + - ===  *  / %
// let son = 11;
// son ++;
// console.log(son++);
// console.log(son);

// let ism = prompt("ism kiriting!");

// console.log(ism +''+'ova');

// if (/\D/.test(parol)) {
//   console.log("Parolda raqamdan boshqa belgi bor");
// } else {
//   console.log("Parol faqat raqamlardan iborat");
// }
// if (/\D/.test(parol)){
//     console.log('parol raqamdan iborat');  
// } else {
//     console.log('parolda harf bor');
// }

// let juft = 0;
// for (let i = 0; i<= 10; i++){
//    if(i % 2 === 0){
//     console.log(i);
    
//    }
   
  
// }
// let son = 7;
// let tub =true;
// if(son <= 1){
//     tub = false;
// }else{
//     for(let i = 2; i<=10)
// }

//  uyga vazifa
// for(let i = 1 ; i<=10;i++){
//     console.log(i);
// };

// 2
// let juft = 0;
// for (let i = 0; i<= 30; i++){
//    if(i % 2 === 0){
//     console.log(i);
//    }
// }
// 3 masala
// let sum = 0;
// for(let i =1; i<= 50;i++){
//     sum= sum + i;
// }
// console.log(sum);

// 4
// let toq = 0;
// for (let i = 1; i<= 100; i++){
//    if(i % 2 !== 0){
//     toq = toq + i;
// }
// }
// console.log(toq);

// 5
// let hisob = 0;
// for (let i = 1; i<=100; i++){
//     if(i % 3 ===0){
//         console.log(i);
//         hisob++;      
//     }
// }
// console.log('soni', hisob);

//6
// let number = 7;

// for (let i = 1; i<=10;i++){
//     console.log(number +'x'+ i + '=' + number * i);
    
// }
//7
// let num = -15;
// if(num > 0){
//     for(let i = 1; i<= num;i++){
// console.log(i);
//     }
// }else if (num < 0){
//     for (let i = 1; i<= -num;i++){
//         console.log(i);
        
//     }
// }else{
//     console.log('0 ga teng');
    
// }
// 8
// let yashirinRaqam = 'q';
// for(let i = 1; i<=10;i++){
//     if(i = yashirinRaqam){
//         console.log('son topildi');
//         break;
//     }else{
//         console.log('bu son emas');
        
//     }
// };
//10
let number = 28;
let sum = 0;

for(let i = 1;i < number; i++){
    if(number % i === 0){

        sum = sum + i;

    }
    if(sum === number){
        console.log('bu mukamal son')
    } else {
        console.log('bu mukamal emas!')
    }
}
