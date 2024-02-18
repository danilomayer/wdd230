const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');

button.addEventListener('click', function () {

    if (temp.value != 'blank' && temp.value <= 50);
    if (wind.value != 'blank' && wind.value >= 3.0);
    const chill = 35.74 + (0.6215 * temp) - (35.75 * wind) + .16 + (0.4275 * temp) + 0.16;
});