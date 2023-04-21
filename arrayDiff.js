function arrayDiff(a, b) {
    for (let i in b){
        for (let j in a){
            if(b[i] === a[j]){
                delete a[j];
            }
        }
    }
    return a.flat();
}

console.log(arrayDiff([1,2,2,2,2,2,3,3,3,3,4,4,4,4] , [1,4,2]))