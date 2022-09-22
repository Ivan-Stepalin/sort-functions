//На вход подается две произвольные строки.
// Написать функцию, которая будет определять – можно ли из одной строки получить другую путем перестановки букв
// внутри строки.

//["aab", "bab"] false
//["aab", "baa"] true
//["aab", "abac"] false

function mapText(text, mapper) {
    text.split("").forEach((item) => {
        if (mapper.has(item)) {
            mapper.set(item, mapper.get(item) + 1)
        } else {
            mapper.set(item, 1)
        }
    })
}

function stringSort(text1, text2) {
    if(text1.length !== text2.length) return false
    const mapper1 = new Map(), mapper2 = new Map()
    mapText(text1, mapper1);
    mapText(text2, mapper2);
    for (const [key, value] of mapper1) {
        if(!mapper2.has(key)) return false
        if(mapper2.get(key) !== value) return false
    }
    return true
}

//сложность О(n)

console.log(stringSort("aaaab", "aabaa"))
console.log(stringSort("aab", "baa"))
console.log(stringSort("aab", "baab"))

function calculateNumber(base, power) {
    if (power === 0) {
        return 1;
    }

    if (power % 2 === 0) {
        const multiplier = calculateNumber(base, power / 2);
        console.log(multiplier)
        return multiplier * multiplier;
    }
    const multiplier = calculateNumber(base, Math.floor(power / 2));
    console.log(multiplier)
    return multiplier * multiplier * base;
}

//Какую сложность имеет эта программа? - O(lg(n))
//Какую задачу решает этот алгоритм? - возведение числа в степень

function magicArrayFunction(originalArray) {
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i += 1) {
        let minIndex = i;

        this.callbacks.visitingCallback(array[i]);

        for (let j = i + 1; j < array.length; j += 1) {

            this.callbacks.visitingCallback(array[j]);

            if (this.comparator.lessThan(array[j], array[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
    }


    return array;
}


//Какую сложность имеет эта программа? - O(n^2)
//Какую задачу решает этот алгоритм? - сортирует массив ?
