const toggle = document.querySelector('.js-sidebar-toggle');
const menu = document.querySelector('.sidebar__links-list');

toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('is-open');

    if (isOpen) {
        menu.style.height = menu.scrollHeight + 'px';
    } else {
        menu.style.height = menu.scrollHeight + 'px';
        requestAnimationFrame(() => {
            menu.style.height = '0px';
        });
    }
});

menu.addEventListener('transitionend', () => {
    if (toggle.classList.contains('is-open')) {
        menu.style.height = 'auto';
    }
});