var count = 0;
function like(element) {
    count++;
    var res = document.querySelector('.result');
    res.innerText = count;
}