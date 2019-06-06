var mobileNav = document.getElementById("mobileNav");
var sideNav = document.getElementById("sideNav");
var closeNav = document.getElementById("closeNav");

mobileNav.onclick = function toggleNav() {
    mobileNav.style.display = "none";
    sideNav.style.display = "block";
}

closeNav.onclick = function closeNav() {
    mobileNav.style.display = "block";
    sideNav.style.display = "none";
}