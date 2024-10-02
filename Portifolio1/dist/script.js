var MobileNavbar = /** @class */ (function () {
    function MobileNavbar(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(".".concat(mobileMenu));
        this.navList = document.querySelector(".".concat(navList));
        this.navLinks = document.getElementsByClassName(navLinks);
        this.activeClass = "active";
    }
    MobileNavbar.prototype.addClickEvent = function () {
        var _this = this;
        if (this.mobileMenu) {
            this.mobileMenu.addEventListener("click", function () { return _this.handleClick(); });
        }
    };
    MobileNavbar.prototype.handleClick = function () {
        if (this.navList) {
            this.navList.classList.toggle(this.activeClass);
        }
    };
    return MobileNavbar;
}());
