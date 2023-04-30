export default function burger() {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.header__menu');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }
  }