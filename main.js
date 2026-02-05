const phrase_1 = prompt('write one phrase')
const phrase_2 = prompt('write another phrase')



if (phrase_1.length < phrase_2.length) {
    alert(phrase_1 + ' ' + phrase_2)
} else if (phrase_1 > phrase_2)
    alert(phrase_2 + ' ' + phrase_1)
else {
    alert('sono uguali')
    // alert(phrase_1 + ' ' +  phrase_2)
}