let keyword1 = 'Variable';
let keyword2 = 'Programmer';

let sentence = document.querySelector('.sentence');
let button = document.querySelector('button');

button.addEventListener('click', function () {
    sentence.textContent = `
       In the beginning was the ${keyword1}, and the ${keyword1} was with ${keyword2}, and the ${keyword1} was ${keyword2}. 
    `
})
