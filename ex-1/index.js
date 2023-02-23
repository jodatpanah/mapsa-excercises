let person1 = 0
let person2 = 0
let total = 0
const jokes = {
    j1:{
        fun:(n) => {
            person1 = person1 + n
            person2 = person2 + n
            total = total + person1 + person2
        }
    },
    j2:{
        fun:(n) => {
            person1 = person1 + n
            person2 = person2 - n
            total = total + person1 - person2
        }
    },
    j3:{
        fun:(n) => {
            person1 = person1 - n
            person2 = person2 + n
            total = total - person1 + person2
        }
    },
    j4:{
        fun:(n) => {
            person1 = person1 - n
            person2 = person2 - n
            total = total - person1 - person2
        }
    }
}
const testCaces = [
    {
        j1:5,
        j2:3,
        j3:0,
        j4:8
    }
]
function calckJokes(obj) {
    let result = []
    for(var i = 0 ; i<= obj.length ; i++) {
        for(key in obj[i]) {
            jokes[key].fun(obj[i][key])
            if(person1 > 0 && person2 > 0 && total > 0) {
                result = [person1 , person2 , total]
            }
        }
    }
    const maxJokesNumber = result.length ? Math.max(...result) : 0
    console.log('the max number of jokes: ' , maxJokesNumber)
    console.log(result)
}
calckJokes(testCaces)