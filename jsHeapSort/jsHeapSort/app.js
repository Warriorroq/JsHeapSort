var arrayLength = 0;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function swapByIndex(firstIndex, secondIndex, func_array) {
    [func_array[firstIndex], func_array[secondIndex]] = [func_array[secondIndex], func_array[firstIndex]];
}

function findMaxNumIndex(index, func_array) {
    var lastLeftIndex = 2 * index + 1;
    var lastRightIndex = 2 * index + 2;
    var HigherNumIndex = index;

    if (lastLeftIndex < arrayLength && func_array[lastLeftIndex] > func_array[HigherNumIndex])
        HigherNumIndex = lastLeftIndex;
    

    if (lastRightIndex < arrayLength && func_array[lastRightIndex] > func_array[HigherNumIndex])
        HigherNumIndex = lastRightIndex;
    

    if (HigherNumIndex != index) {
        swapByIndex(index, HigherNumIndex, func_array);
        findMaxNumIndex(HigherNumIndex, func_array);
    }
}

function sort(func_array) {
    arrayLength = func_array.length;
    for (var i = Number.parseInt(arrayLength / 2); i >= 0; i -= 1) {
        findMaxNumIndex(i, func_array);
    }

    for (var i = func_array.length - 1; i > 0; i--) {        
        arrayLength--;
        swapByIndex(0, i, func_array);
        findMaxNumIndex(0, func_array);
    }
}

function main() {
    var arrayMine = [];
    for (var i = 0; i < 100; i++)
        arrayMine[i] = getRandomInt(1001);

    console.log(`Array there ${arrayMine}! \n`);

    sort(arrayMine);

    console.log(`New there ${arrayMine}! \n`);

    readline.question('');
}

main();