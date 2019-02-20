var binarySearch = (target, element) => {
    if (!target) return -1;
    var start = 0;
    var end = target.length - 1;
    var middle;
    var count = 0;
    while(start <= end) {
        console.log(count++);
        middle = Math.floor((start + end) / 2);
        if (target[middle] === element) return middle;
        if (middle === start || middle === end) return -1;
        if(target[middle] < element) {
            start = middle;
        } else if (target[middle] > element) {
            end = middle;
        }
    }
    return -1;
}

module.exports = console.log(binarySearch([1, 2, 3, 4, 6, 7, 8], 10000));
