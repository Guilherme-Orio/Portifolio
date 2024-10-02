class MobileNavbar {
    mobileMenu: HTMLElement | null;
    navList: HTMLElement | null;
    navLinks: HTMLCollectionOf<Element>;
    activeClass: string;

    constructor(mobileMenu: string, navList: string, navLinks: string) {
        this.mobileMenu = document.querySelector(`.${mobileMenu}`);
        this.navList = document.querySelector(`.${navList}`);
        this.navLinks = document.getElementsByClassName(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", () => this.handleClick());
        }
    }

    handleClick() {
        if (this.navList) {
            this.navList.classList.toggle(this.activeClass);
        }
    }
}
