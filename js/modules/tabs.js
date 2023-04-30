export default function tabs() {
    function tabsPlugin(activeTab = 1) {
        const tabs = document.querySelectorAll('#tabs');

        tabs[activeTab].classList.add('activeTab');

        for (const tab of tabs) {
          tab.addEventListener('click', () => {
            clearActiveClass()

            tab.classList.add('activeTab');
          });
        };

        function clearActiveClass() {
          tabs.forEach((tab) => {
            tab.classList.remove('activeTab');
          });
        };

      }

      tabsPlugin();
}