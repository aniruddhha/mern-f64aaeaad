
// 👉 I want to make a sqaure of n and add 10 to it.
// 👉 Result of above requirent needs to divided by 45. 
// If Gte > 6 return normal else bad data 

function makeSqrAdTen(num) {
    const n = num
    const sqr = (n * n) + 10

    return sqr
}


function dvdChk(asdkjfhsdklghdlsfkhgdlfjk) {
    const dvd = asdkjfhsdklghdlsfkhgdlfjk / 45
    const sts = (dvd > 6) ? 'normal data' : 'bad data'
    console.log('Status is : '+ sts)
}

const vl = makeSqrAdTen(7)
dvdChk(vl)