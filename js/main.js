(function () {
    var btn = document.querySelector("button");
    var output = document.querySelector("#result");



    function randNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function showRandomNUmbers() {
        var numbers = [],
            random;

        for (var i = 0; i < 6; i++) {
            random = randNumber(1, 49);
            while (numbers.indexOf(random) !== -1) {
                random = randNumber(1, 49);

            }

            numbers.push(random);
        }
        /* Output */
        var history = document.createElement('p');
        history.innerHTML = output.value;
        output.parentNode.insertBefore(history, output.nextSibling);
        output.value = numbers.join(' ');
    }
    btn.onclick = showRandomNUmbers;
})();


function myReset() {
    location.reload();
}