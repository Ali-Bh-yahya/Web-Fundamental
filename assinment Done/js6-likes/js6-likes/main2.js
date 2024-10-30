var count1 = 0;
var count2 = 0;
var count3 = 0;
function inc1(element) {
    count1++;
    var result1 = document.querySelector('.NumberOfLikes1');
    result1.innerText = count1;
}

function inc2(element) {
    count2++;
    var result2 = document.querySelector('.NumberOfLikes2');
    result2.innerText = count2;
}

function inc3(element) {
    count3++;
    var result3 = document.querySelector('.NumberOfLikes3');
    result3.innerText = count3;
}


