export default function searchForm() {
    const btnClear = document.querySelector('.work__button-clear');
    const inputsClear = document.querySelectorAll('#myInput');


    btnClear.addEventListener('click', (event) => {
    event.preventDefault()
    inputsClear.forEach(input => input.value = '')
    });
}