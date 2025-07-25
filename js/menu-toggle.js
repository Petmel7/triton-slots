
// {
//     const toggleButton = document.querySelector('.js-header-toggle');
//     const menu = document.querySelector('.js-header-menu');
//     const menuList = menu.querySelector('.header__menu-list');

//     toggleButton.addEventListener('click', () => {
//         const isOpen = menu.classList.toggle('is-open');

//         if (isOpen) {
//             menuList.style.height = menuList.scrollHeight + 'px';
//             toggleButton.classList.add('is-open');
//         } else {
//             menuList.style.height = '0px';
//             toggleButton.classList.remove('is-open');
//         }
//     });
// }

{
    const toggleButton = document.querySelector('.js-header-toggle');
    const menu = document.querySelector('.js-header-menu');
    const menuList = menu.querySelector('.header__menu-list');

    toggleButton.addEventListener('click', () => {
        const isOpen = menu.classList.contains('is-open');

        if (!isOpen) {
            menu.classList.add('is-open');

            // ⬇️ Додаємо padding через inline-стиль одразу
            menuList.style.paddingTop = '20px';
            menuList.style.paddingBottom = '20px';

            // ⬇️ Чекаємо кадр, щоб DOM встиг врахувати padding
            requestAnimationFrame(() => {
                menuList.style.height = menuList.scrollHeight + 'px';
            });

            toggleButton.classList.add('is-open');
        } else {
            // ⬇️ Закриваємо
            menuList.style.height = menuList.scrollHeight + 'px';

            requestAnimationFrame(() => {
                menuList.style.height = '0px';
                menuList.style.paddingTop = '0px';
                menuList.style.paddingBottom = '0px';
            });

            menu.classList.remove('is-open');
            toggleButton.classList.remove('is-open');
        }
    });
}



