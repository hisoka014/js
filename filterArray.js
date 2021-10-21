function filterArray(l) {
    return l.filter(x => typeof x === 'number');
}
console.log(filterArray([1, 2, "a", "b"]))
console.log(filterArray([1, "a", "b", 0, 15]))
