export default function headerSearch() {
    const form = document.querySelector('.header__search');
    const input = document.querySelector('.header__search-input');
    const btnSearch = document.querySelector('._icon-Search ');

    input.addEventListener('click', () => {
    form.classList.add('focus');
    btnSearch.classList.add('focus-btn');
    });

    document.addEventListener( 'click', (e) => {
        const click = e.composedPath().includes(form);

        if (!click) {
            form.classList.remove('focus');
        btnSearch.classList.remove('focus-btn');
        }
    })
}