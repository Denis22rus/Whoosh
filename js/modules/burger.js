export default function burger() {
    const iconMenu = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.header__menu');
    const blueFonts = document.querySelector('.blue-fonts');
    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
            blueFonts.style.display = blueFonts.style.display === 'block' ? 'none' : 'block';
        });
    }
  }