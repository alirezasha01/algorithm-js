function filter_list(data){
    function filterr(value) {
        if (typeof value !== 'number') {
            return false;
        }
        return true;
    }

    let numberList = data.filter(filterr);
    return numberList
}