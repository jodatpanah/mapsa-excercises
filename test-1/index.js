// q-1
const name = 'mohamad jodatpanah'
const speceficWord = 'pana'
function findString(str , word) {
    const arr = str.split('');
    const arrWord = word.split('');
    const objWord = Object.assign({}, arrWord)
    let resalt
    for(key in objWord) {
        if(arr.includes(objWord[key])) {
            resalt = true
        }
        else {
            resalt = false
            break
        }
    }
    if(resalt) {
        console.log('match')
    }
    else console.log('not match')


}
findString(name , speceficWord)

// q-3
const oprations = {
    "#" : {
        fun : (first , second) => {return +first + +second}
    },
    "@" : {
        fun : (first , second) => {return +first * +second}
    },
    "~" : {
        fun : (first , second) => {return +first - +second}
    },
    "//" : {
        fun : (first , second) => {return +first / +second}
    }
}
const calcInput = "(2#3)@8//2~4#2"
function calculator(input) {
    for(var i = 0 ; i <= input.length ; i++) {
        console.log(input[i])
        input.indexOf()
    }
    // const str = input.substring(input.indexOf('(') + 1 , input.lastIndexOf(")"))
    // let calculatedNumber =
        // console.log(str)
}
calculator(calcInput)

// q-4
let cities = [[1,1,0] , [1,1,1] , [0,1,1]]
// let city1 = 0
// let city2 = 0
// let city3 = 0
// const cityNumber = {
//     "city1" : 0,
//     "city1" : 0,
//     "city1" : 0
// }
// const provience = {
//     "0":{
//         // fun : (arr) => {
//         //     for(let i = 0 ; i <=arr.length && arr.length !==0 ; i++) {
//         //         if(arr[i]) {
//         //             cities = splice(cities[0].arr[i] , 1)
//         //         }
//         //     }
//         // }
//         fun : (arr) => {
//             // for (let i = 0 ; i <= arr.length ; i++) {
//                 'city1' = city1 + arr[0]
//                 city2 = city2 + arr[1]
//                 city3 = city3 + arr[2]
//             // }
//         }
//     }
// }
function calacProvience(arr) {
    let row = []
    for(let i = 0 ; i < arr.length ; i++) {
        for(let a = 0 ; a < arr[i].length  ; a++) {
            if( arr[i][a] === 1 && i !== a) {
                row.push('row '+i+' to '+a)
                console.log('row' , row , arr[i][a])
            }
        }
    }

    // row.filter((a) => a.includes())
    // for(let b = 0 ; b < row.length ; b++) {
    //     if(row[b]){
    //
    //     }
    // }
    // const result = row.length
    console.log('proviences: ' )
}
calacProvience(cities)
// q-5
// function F() {
//      console.log(prototype)
//     console.log("Hello")
// }
// F()