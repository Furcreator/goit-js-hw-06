// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameOutput = document.querySelector('#name-output')
const input = document.querySelector('#name-input')


input.addEventListener('input', onInputName)


function onInputName(event) {
nameOutput.textContent = event.currentTarget.value === "" ? 'Anonymous' : event.currentTarget.value;
}
