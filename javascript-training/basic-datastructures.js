const arr = [1, 2, 4, 1, 2, 4] // 1 ,2, 4
console.log(arr.includes(200))

const unqArr = arr.filter( ( el, ind, a ) => {
    // oth iteration
    // el = 1, ind = 0, a = 1, 2, 4, 1, 2, 4
    // 1st iteration
    // el = 2, ind = 1, a = 1, 2, 4, 1, 2, 4
    // 2nd iteration
    // el = 4, ind = 2, a = 1, 2, 4, 1, 2, 4
    // 3rd iteration
    // el = 1, ind = 3, a = 1, 2, 4, 1, 2, 4
    // 4th iteration
    // el = 2, ind = 4, a = 1, 2, 4, 1, 2, 4
    // 5th iteration
    // el = 4, ind = 5, a = 1, 2, 4, 1, 2, 4

    console.log(`Index : ${ind}, Item : ${el},  Array : ${a}`)

    const indOfCurItm = a.indexOf(el)
    // [1, 2, 4, 1, 2, 4] what is the index of 1 = 0
    // [1, 2, 4, 1, 2, 4] what is the index of 2 = 1
    // [1, 2, 4, 1, 2, 4] what is the index of 4 = 2
    // [1, 2, 4, 1, 2, 4] what is the index of 1 = 0
    // [1, 2, 4, 1, 2, 4] what is the index of 2 = 1
    // [1, 2, 4, 1, 2, 4] what is the index of 4 = 2

    // 0 === 0 
    // 1 === 1
    // 2 === 2

    // 0 === 3
    // 1 === 4
    // 2 === 5

    return indOfCurItm === ind

} )
console.log(unqArr)

// what is the index of 1 = 0 => indOfCurItm === ind : 0 == 0
// what is the index of 2 = 1 => indOfCurItm === ind : 1 == 1
// what is the index of 4 = 2 => indOfCurItm === ind : 2 == 2
// what is the index of 1 = 3 => indOfCurItm === ind : 3 == 0
// what is the index of 2 = 4 => indOfCurItm === ind : 4 == 1
// what is the index of 4 = 5 => indOfCurItm === ind : 5 == 1

