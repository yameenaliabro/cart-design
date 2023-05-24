var countElement = document.getElementById('count');
var count = 0;

function increment() {
    count++;
    countElement.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}

