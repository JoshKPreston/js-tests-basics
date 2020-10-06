//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
    let splitArray = str.split(' ')
    for (let i = 1; i < splitArray.length; i++) {
        const elem = splitArray[i];
        if (typeof elem === 'string') {
            newElem = splitArray[i].charAt(0).toUpperCase() + splitArray[i].substring(1)
        }
        splitArray[i] = newElem
    }
    return splitArray.join('')
}
