
const createHamburgerMenu = ($menuButton, $menu) => {
    const toggleMenu = () => {
        $menuButton.classList.toggle("is-active");
        $menu.classList.toggle("is-active");
    };
    $menu.addEventListener("click", toggleMenu);
    $menuButton.addEventListener("click", toggleMenu);
};

export default createHamburgerMenu; 