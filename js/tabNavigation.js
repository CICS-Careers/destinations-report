(function () {
    function activateTab(tab) {
        const targetSelector = tab.getAttribute("href");
        const target = targetSelector && document.querySelector(targetSelector);
        if (!target) return;

        document.querySelectorAll("#pills-tab .nav-link").forEach(function (item) {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });
        document.querySelectorAll("#pills-tabContent .tab-pane").forEach(function (pane) {
            pane.classList.remove("show", "active");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        target.classList.add("show", "active");
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("#pills-tab [data-bs-toggle=\"pill\"]").forEach(function (tab) {
            tab.addEventListener("click", function (event) {
                event.preventDefault();
                activateTab(tab);
            });
        });
    });
})();
