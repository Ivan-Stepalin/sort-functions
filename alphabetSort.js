let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р',
    'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

//перемешиватель массива
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
//функция сортировки
function alphabetSort(shuffledArr, length, zeroPointCounter) {
    //задаем начальный массив
    const arr = []
    //проходим по массиву и вставляем буквы на нужные места
    for (let i = 0; i < shuffledArr.length; i++) {
        const placeInArr = shuffledArr[i].charCodeAt() - zeroPointCounter
        if(shuffledArr[i] !== "ё") {
            arr[placeInArr] = shuffledArr[i]
        }
    }
    if(length === 33) {
        arr.splice(6, 0, "ё")
    }
    return arr
}

console.log(alphabetSort(shuffle(arr_en), 26, 97))
// console.log(alphabetSort(shuffle(arr_ru), 33, 1072))