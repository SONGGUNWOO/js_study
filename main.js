// // // // // // // // // import random from './getRandom'
// // // // // // // // // // // // 비교 연산자

// // // // // // // // // // // const a = 1
// // // // // // // // // // // const b = 3
// // // // // // // // // // // const c = 1

// // // // // // // // // // // console.log(a !=b)
// // // // // // // // // // // console.log(a !==c)
// // // // // // // // // // // console.log(a < b)
// // // // // // // // // // // console.log(a < c)

// // // // // // // // // // // // console.log(a === b)

// // // // // // // // // // // // function isEqual(x, y){
// // // // // // // // // // // //   return x === y
// // // // // // // // // // // // }

// // // // // // // // // // // // console.log(isEqual(1, 1))
// // // // // // // // // // // // console.log(isEqual(2, '2'))

// // // // // // // // // // // 논리 연산자

// // // // // // // // // //  const a = 1 === 1
// // // // // // // // // //  const b = 'AB' === 'AB'
// // // // // // // // // //  const c = true

// // // // // // // // // //  console.log(a)
// // // // // // // // // //  console.log(b)
// // // // // // // // // //  console.log(c)

// // // // // // // // // //  console.log('&&:' , a && b && c)
// // // // // // // // // //  console.log('||:' , a || b)
// // // // // // // // // //  console.log('!:' , !a)

// // // // // // // // // //삼항 연산자

// // // // // // // // // const a = 1 < 2
// // // // // // // // // if(a){
// // // // // // // // //   console.log('참')
// // // // // // // // // }else{
// // // // // // // // //   console.log('거짓')
// // // // // // // // // }

// // // // // // // // // console.log(a ? '참' : '거짓')

// // // // // // // // // console.log(random())

// // // // // // // // // const  d = random()

// // // // // // // // // switch(d){
// // // // // // // // //   case 0:
// // // // // // // // //     console.log('d is 0')
// // // // // // // // //     break
// // // // // // // // //   case 2:
// // // // // // // // //     console.log('d is 2')
// // // // // // // // //     break
// // // // // // // // //   case 4:
// // // // // // // // //     console.log('d is 4')
// // // // // // // // //     break

// // // // // // // // //   default:
// // // // // // // // //   console.log('rest....')      
    

// // // // // // // // // }

// // // // // // // // // if (d ==0){
// // // // // // // // //   console.log('a is 0')
// // // // // // // // // }else if (d == 2){
// // // // // // // // //   console.log('a is 2')
// // // // // // // // // }else{
// // // // // // // // //   console.log('rest...')
// // // // // // // // // }

// // // // // // // // // 반복문 
// // // // // // // // // for 
// // // // // // // //  const ulEl = document.querySelector('ul')

// // // // // // // // for ( let i =0; i< 10; i+=1){
// // // // // // // //   const li = document.createElement('li')
// // // // // // // //   li.textContent = `list-${i + 1}`
// // // // // // // //   if ((i+1)% 2 === 0) {

// // // // // // // //   li.addEventListener('click', function(){
// // // // // // // //     console.log(li.textContent)
// // // // // // // //   })
// // // // // // // //   }
// // // // // // // //   ulEl.appendChild(li) 
// // // // // // // // }

// // // // // // // //변수 유효범위
// // // // // // // // var, let, const let,const 는 불럭 내부에서 유효하게된다. var 를 사용할때는 함수 범위 내에서는 어디서든 사용 가능하다 

// // // // // // // function scope(){
// // // // // // //   // console.log(a) 안나옴  var 이면 undefined 가 나옴
  
// // // // // // //   if (true){
// // // // // // //     // console.log(a)  안됨
// // // // // // //     const a = 123
// // // // // // //     console.log(a)  // OK 
// // // // // // //   }
// // // // // // //   // console.log(a)  let,const 는 언디파인  var 은 출력 가능
  
// // // // // // // }
// // // // // // // scope()

// // // // // // // 형 변환  데이터의 타입을 말한다 (문자, 숫자, 객체 )

// // // // // // Truthy (참 같은 값)
// // // // // // true, {}, [], 1, 2, 'false', -12 ...

// // // // // // Falsy(거짓 같은 값)
// // // // // // false, '', null, undefined, 0, -0, NaN

// // // // // // const a =1
// // // // // // const b ='1'

// // // // // // console.log(a == b)  // == 일경우 형변환을 해서 비교를 한다! 

// // // // // if ('false'){
// // // // //   console.log(123)
// // // // // // 

// // // // // 함수 복습

// // // // function sum(x, y) {
// // // //   return x + y
// // // // }

// // // //   const a =sum(1, 3)
// // // //   console.log(a)
// // // //   const b = sum(4, 12)
// // // //   console.log(b)
// // // //   console.log( a+ b) 

// // // // 화살표 함수
// // // // ( ) => {} vs function () {}

// // // const double = function (x) {
// // //   return x *2  
// // // }
// // // console.log('double', double(7))

// // // // 축약형 
// // // const doubleArrow = (x) => x*2
// // // console.log('doubleArrow', doubleArrow(7))


// // // 즉시실행 함수
// // // IIFE, 

// // const a = 7
// // function double() {
// //   console.log(a*2)
// // }
// // double() ;

// // (function() {
// //   console.log(a*2)
// // })();
// // (function() {
// //   console.log(a*2)
// // }())     

// //호이스팅
// // 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// double()

// function double(){
//   console.log(a*2)
// }

//타이머 함수
// setTimeout(함수, 시간) :일정 시간 후 함수 실해
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// ClearInterval(): 설정된 Interval 함수를 종료

// const timer = setInterval(() => {
//   console.log('Heropy!')
// }, 3000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click' , () => { 
//   clearInterval(timer)
// })

// 콜백
// 함수의 인수로 사용되는 함수

//  function timeout(callback){
//    setTimeout(() => {
//      console.log('Heropy!')
//      callback()
//    }, 3000)
//  }
//  timeout(()=> {
//   console.log('Done!')
//  })
 
// const Heropy = {
//   firstName : 'Heropy',
//   lastName : 'Park',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(Heropy.getFullName())

// const amy = {
//   firstName : 'Amy',
//   lastName : 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())

// const neo ={
//   firstName: 'Neo',
//   lastName: 'Smith',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(neo.getFullName())


// 자바식   클래스 만들기 ?
  // function User(first, last) {
  //   this.firstName = first
  //   this.lastName = last
  // }
  // User.prototype.getFullName = function(){
  //   return `${this.firstName} ${this.lastName}`
  // }

  // const Heropy =new User('Heropy', 'Park')
  // const amy =new User('Amy', 'Clark')
  // const neo =new User('Neo', 'Smith')
  

  // console.log(Heropy.getFullName())
  // console.log(amy.getFullName())
  // console.log(neo.getFullName())

  // this
  // 일반 함수는 호출 위치에서 따라 this  정의!
  // 화살표 함수는 자신이 선언된 함수 범위에서 this 정의!

//   const heropy = {
//     name: 'heropy',
//     normal: function () {
//       console.log(this.name)
//     },
//     arrow:() => {
//       console.log(this.name)
//     }
//   }
//   heropy.noraml()
//   heropy.arrow()

// const amy = {
//   name: 'Amy',
//   normal: heropy.normal,
//   arrow: heropy.arrow
// }

// amy.normal()
// amy.arrow()


// function User(name) {
//   this.name =name
// }
// User.prototype.normal = function(){
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }


// const heropy = new User('Heropy')
// heropy.normal()
// heropy.arrow()

// const timer = {
//   name: 'Heropy!',
//   timeout: function(){
//     setTimeout(() => {
//       console.log(this.name)
//     } , 2000)
//   }
// }
// timer.timeout()

// ES6 Classes


// const heropy = {
//   name: 'Heropy',
//   normal: function(){
//     console.log(this.name)
//   },
//   arrow: () =>{
//     console.log(this.name)
//   }
// }

// heropy.normal()
// heropy.arrow()


// class User {
//   constructor(first, last) {
//         this.fristName = first
//         this.lastName = last
//   }
//   getFullName() {
//     return `${this.fristName} ${this.lastName}`
//   }
// }

// const heropy = new User('Heropy', 'Park')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(heropy)
// console.log(amy.getFullName())
// console.log(neo.getFullName())

// class Vehicle{
//   constructor(name, wheel){
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle )

// class Bicycle extends Vehicle {
//   constructor(name, wheel){
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicyle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicyle)

// class Car extends Vehicle{
//   constructor(name, wheel, license){
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, 'have')
// const daughtersCar = new Car('포르쉐',  4, 'none')

// console.log(myCar)
// console.log(daughtersCar)

// const result = 'Hello world' .indexOf('world')
// console.log(result)
 
// const str = '0123'

// console.log(str.length)

// const str = 'Hello world!'
// const str = 'skw0616@naver.com'
// const str = '      Hello world  '

  // console.log(str.indexOf('world') !== -1)
  // console.log(str.indexOf('SOng') !== -1) 
  // console.log(str.slice(0, 3))
  // console.log(str.slice(6, 11))
  // console.log(str.replace('world', 'HEROPY'))
  // console.log(str.replace(' world!', ''))
  // console.log(str.match(/.+(?=@)/)[0])  // 정규표현식!
  // console.log(str.trim()) 

  // console.log('abs:', Math.abs(-12))

  // console.log('min:', Math.min(2, 8))
  // console.log('max:', Math.max(2, 8))
  // console.log('ceil:', Math.ceil(3.14))
  // console.log('floor:', Math.floor(3.14))
  // console.log('round:', Math.round(3.14))
  // console.log('random:', Math.random())
// .length
  // const number = [1, 2, 3, 4]
  // const fruits = ['Apple', 'Banana', 'Cherry']

  // console.log(number.length)
  // console.log(fruits.length)
  // console.log([1,2].length)

  // console.log([].length)

  // console.log(number.concat(fruits))
  // console.log(number)
  // console.log(fruits)
// .forEach()
//  fruits.forEach(function (element, index, array){
//    console.log(element, index, array)
//  })
//  fruits.forEach(function (fruit, i){
//   console.log(fruit, i)
// })

//.map()

// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a= fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })
// console.log(a)

// const b = fruits.map( (fruit, index) => ({
//   // return `${fruit}-${index}`

//   id: index,
//   name: fruit

// }))
// console.log(b)

//filter()

// const numbers = [1,2,3,4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => {
//   return number < 3
// }) 실행문이 하나일때 이런식으로 생략 가능 !!
// const a = numbers.map(number => number < 3)
// console.log(a)

// const b = numbers.filter(number => {
//   return number <3
// })
// const b = numbers.filter(number => number <3)

// console.log(b)

// .find(), .findIndex() 에 대해서 공부
//find 원하는것 을 출려갛게 하는것.!
// const a = fruits.find(fruit => {
//   return /^B/.test(fruit)
// // })
// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)

// const a = fruits.find(fruit =>{
//   return /^B/.test(fruit)
// })

//findIndex 배열이 몇번째 인지 찾는것!
// const b = fruits.findIndex(fruit => /^C/.test(fruit))
// console.log(b)    


// includes()
// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('SONG')
// console.log(b)

// push(),  unshift()
// 원본 수정됨 주의!
  //push 는 제일 오른쪽에 삽입되는 것임!!! 
// numbers.push(5)
// console.log(numbers)
  // unshift  는 배열 데이터에 가장 앞쪽에다가 데이터를 삽입함 !!
// numbers.unshift(0)
// console.log(numbers)

// reverse()
  // 배열  아이템 순서를 뒤집는다. 
// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

// splice()
  // 원본 수정됨 주의!
  // 인덱스 번호 (주소 ) 넣고 그걸 지워라 
    // splice(주소, 지우는 갯수, 끼워 넣을것)
    // 제거 할때도 사용 될수 있는데 끼워 넣을때도 사용 할수도 있다!! 그러면 push 상위호환 아닌가 ? 
  // numbers.splice(2, 1)
  // numbers.splice(2, 1, 99)

  // console.log(numbers)

  // fruits.splice(2, 0, 'Orange')

  // console.log(fruits)

  // const userAge = {
  //   name : 'Gun',
  //   age : 85
  // }
  // const userEmail = {
  //   name : 'Gun',
  //   email: 'skw06@naver.com'
  // }

  // const target = Object.assign(userAge, userEmail)  예제 1번
  // console.log(target)
  // console.log(userEmail)
  // console.log(target === userAge)

  // const a = {k: 123}
  // const b = {k: 123}
  // console.log(a === b)
  // a 와 b 는 생긴것은 똑같지만 다른 데이터이다 왜일까 ? 
  //  target & userAge 는 서로 같은 메모리 주소를 바라보고 있기에 같다고 나오는 것이고
  // a & b 는 서로 같은 데이터를 가지고 있지만 메모리 주소(?)가 다르기 때문에 서로 다르다고 말하는것 (공부 필요 )
  // 만약  위의 target에서 중가로를 추가하여 다른 형태로 만든다면 target & userAge 의 값이 다르게 될수 있다. 예제 2번


  // const target = Object.assign({}, userAge, userEmail)  // 예제 2번 
  // console.log(target)
  // console.log(userEmail)
  // console.log(target === userAge)

  // const user = {
  //   name: 'Gun',
  //   age: 85,
  //   email: 'skw0616@naver.com'
  // }

  // const keys = Object.keys(user)
  // console.log(keys)
    // ['name', 'age', 'email']

  // console.log(user['email'])   // 객체 데이터도 indexing 방법을 지원한다! 

  // const values = keys.map(key => user[key])
  // console.log(values)  

  // 구조 분해 할당 
  // 비구조화 할당

  // const user = {
  //   name: 'Gun',
  //   age: 85,
  //   email: 'skw0616@naver.com'
  // }
  // const { name, age, email, address = 'Korea'} = user
  // E.g, user.address 구조분해된 내용을 변수로 만들어서 활용 !

  // console.log(`사용자의 이름은 ${name}입니다.`)
  // console.log(`${name}의 나이는 ${age}세입니다`)
  // console.log(`${name}의 이메일 주소는 ${email}입니다.`)
  // console.log(`${name}의 사는 지역은 ${address} 입니다.`)

  // const fruits = ['Apple', 'Banana', 'Cherry']
  // const [a, b, c, d] = fruits
  // console.log(a,b,c,d)
  //만약 배열에서 원하는것만 뽑게 할려면

  // const [ , b] = fruits
  // 이러면 바나나가 나옴 만약 , 를 하나 더하면 Cherry 가 나옴 
  // console.log(b)

  // 전개 연산자 

  // const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
  // console.log(fruits)
  // console.log(...fruits)
  // console.log('Apple', 'Banana', 'Cherry')

  // function toObject(a, b, ...c){ 
    // return{ 
    // a: a, // 축약 가능 ex) a,
    // b: b,
    // c: c

    // }
  //   return { a, b, c}
  // }
//   const toObject = (a, b, ...c) => ( {a, b, c}) 

// console.log(toObject(...fruits))

// 데이터 불변성
// 원시 데이터 : Spring, Number, Boolean, undefined, null
//           -> 쉽게 말해서 생긴것이 다르면 다르다 라고 이해할수있다 
//---------------------------------------------------
// |1:         |2:              |3:          |4:
//---------------------------------------------------

// let a = 1
// let b = 4
// console.log(a, b, a === b)
// b = a
// console.log(a, b, a === b)
// a =7
// console.log(a, b, a === b)
// let c = 1
// console.log(b, c, b === c)

// 참조형 제이터: Object, Array, Function
//---------------------------------------------------
// |1: {        }|2:{         } |3:{       }  |4:
//---------------------------------------------------

// let a = {k:1}
// let b = {k:1}
// console.log(a, b, a ===b)
// a.k = 7
// b = a
// console.log(a, b, a ===b)
// a.k = 2
// console.log(a, b, a ===b)
// let c =b 
// console.log(a, b, c, a ===c)
// a.k = 9
// console.log(a, b, c, a ===c)

// 얕은 복사, 깊은 복사
import _ from 'lodash'
const user = {
  name: 'Gun',
  age: 85,
  emails: ['skw0616@naver.com']
}
// const copyUser = user
// const copyUser = Object.assign({}, user)  // const copyUser = {...user} 이거와 같다 !!!
const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('wjsur0616@naver.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)



