const FRM = document.forms['frm'];
let allBadWords = document.querySelector('#badWordText');
const BAD_WORD_ARR = [];
let wrod;
let words = [];
const ALERT = document.querySelector('#alert');
const CONTAINER = document.querySelector('.container');
FRM.add.addEventListener('click', function () {
    if (FRM.badWord.value == '') {
        ALERT.classList.remove('alertInvisible');
        ALERT.classList.add('alertVisible');
        CONTAINER.classList.add('lowOpacity');
        document.querySelector('#alertText').textContent = 'First write bad word!';
    }
    else {
        if (allBadWords.textContent == '') {
            FRM.badWord.classList.remove('redBorder');
            allBadWords.textContent += FRM.badWord.value;
            FRM.badWord.value = '';
        }
        else {
            FRM.badWord.classList.remove('redBorder');
            allBadWords.textContent += ', ' + FRM.badWord.value;
            FRM.badWord.value = '';
        }
        wrod = allBadWords.textContent;
        words = wrod.split(', ');
    }
});
FRM.reset.addEventListener('click', function () {
    allBadWords.textContent = '';
    FRM.badWord.value = '';
    FRM_TWO.text.value = '';
    words = [];
});
let alltext = document.querySelector('#text');
const FRM_TWO = document.forms['frmTwo'];
let checkTest = [];
document.querySelector('#cenzor').addEventListener('click', function () {
    if (FRM_TWO.text.value == '') {
        ALERT.classList.remove('alertInvisible');
        ALERT.classList.add('alertVisible');
        CONTAINER.classList.add('lowOpacity');
        document.querySelector('#alertText').textContent = 'First write some text!';
    }
    else {
        for (let i = 0; i < words.length; i++) {
            checkTest = FRM_TWO.text.value.split(' ');
            for (let j = 0; j < checkTest.length; j++) {
                if (checkTest[j] == words[i]) {
                    let it = '';
                    for (let q = 1; q <= words[i].length; q++) {
                        it += '*';
                    }
                    checkTest.splice(j, 1, it);
                    FRM_TWO.text.value = '';
                    FRM_TWO.text.value = checkTest.join(' ');
                }
                if (checkTest[j] == `${words[i]},`) {
                    let it = '';
                    for (let q = 1; q <= words[i].length; q++) {
                        it += '*';
                    }
                    checkTest.splice(j, 1, `${it},`);
                    FRM_TWO.text.value = '';
                    FRM_TWO.text.value = checkTest.join(' ');
                }
            }
        }
    }
});
document.querySelector('#close').addEventListener('click', function () {
    ALERT.classList.add('alertInvisible');
    ALERT.classList.remove('alertVisible');
    CONTAINER.classList.remove('lowOpacity');
    document.querySelector('#alertText').textContent = '';
});
//# sourceMappingURL=main2.js.map