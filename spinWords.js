function spinWords(string){
    let strArr = string.split(" ")
    for (let i=0 ; i<strArr.length;i++){
        if (strArr[i].length>4){
            let a = strArr[i].split("").reverse()
            strArr[i] = a.join("")
        }
    }
    return strArr.join(" ")
}