let dates = document.getElementById('dates').innerText

let date = document.getElementById('date')

date.onclick = function () {
    for (let i = 0; i <= 30; i++ ){
        dates += i;
    }
}