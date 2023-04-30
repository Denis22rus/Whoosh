export default function popup() {
    const iconPad = document.querySelector('#icon-pad');
    const popup = document.querySelector('#popup');

    iconPad.addEventListener('mouseover', showPopup);
    iconPad.addEventListener('mouseout', hidePopup);

    function showPopup(e) {
        popup.style.display = "block";
      }

      function hidePopup(e) {
        popup.style.display = "none";
      }
}