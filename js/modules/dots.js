export default function dots() {
    const txtSub = document.querySelector('#txtsubtitle');
    const dots = document.querySelector('.text__dots');

    dots.addEventListener('click', hideTxt);

    function hideTxt() {
        if (txtSub.style.display === "none") {
            txtSub.style.display = "block";
        } else {
            txtSub.style.display = "none";
        }
    }
}