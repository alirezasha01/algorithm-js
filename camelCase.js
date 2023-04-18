function toCamelCase(str){
    let change = '';
    if(str !== ''){
        change = str.split(/-|_/);
        for (let i = 1; i < change.length; i++) {
            change[i] = change[i].charAt(0).toUpperCase() + change[i].slice(1);
        }
        change = change.join("");
    }
    return change;
}
console.log(toCamelCase("the_stealth_warrior"))
