document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');

    window.clearDisplay = function() {
        display.value = '';
    };

    window.appendToDisplay = function(value) {
        display.value += value;
    };

    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    };
});
