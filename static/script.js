// script.js – Library Management System
// Handles interactive enhancements on the frontend.

document.addEventListener("DOMContentLoaded", function () {

    // 1. Auto-dismiss flash alerts after 4 seconds with smooth fade
    const alerts = document.querySelectorAll(".alert");
    alerts.forEach(function (alert) {
        setTimeout(function () {
            alert.style.transition = "opacity 0.5s ease";
            alert.style.opacity = "0";
            setTimeout(function () { alert.remove(); }, 500);
        }, 4000);
    });

    // 2. Add loading state to login submit button without blocking submit dispatch
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function () {
            const btn = document.getElementById("login-btn");
            if (btn) {
                setTimeout(function () {
                    btn.textContent = "Signing in…";
                    btn.disabled = true;
                }, 0);
            }
        });
    }

    // 3. Highlight the current active nav link based on URL pathname
    const currentPath = window.location.pathname.replace(/\/$/, "");
    if (currentPath) {
        const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");
        navLinks.forEach(function (link) {
            const linkPath = link.pathname ? link.pathname.replace(/\/$/, "") : "";
            if (linkPath && linkPath === currentPath) {
                navLinks.forEach(function (l) { l.classList.remove("active"); });
                link.classList.add("active");
            }
        });
    }

});
