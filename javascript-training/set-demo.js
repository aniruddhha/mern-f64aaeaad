const arr = [1, 2, 4, 1, 2, 4, 8] 

const st = new Set(arr)
st.add(8)
st.add(8)
st.add(8)

console.log(st)

console.log(`Has 10 ${st.has(10)}`)
console.log(`Has 1 ${st.has(1)}`)

const ent = st.entries()
console.log(ent)

for(let el of ent) {
    console.log(el)
    console.log(el[0], el[1])
}

st.delete(4)