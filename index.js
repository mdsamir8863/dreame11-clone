// hamburger menu
function closeSubMenu() {
  let activeSubmenus = document.querySelectorAll(".submenu_active");

  activeSubmenus.forEach((activeSubmenu) => {
    activeSubmenu.classList.remove("submenu_active");
  });
  let open_sub_menus = document.querySelectorAll(".open_sub_menu");
  open_sub_menus.forEach((open_sub_menu) => {
    open_sub_menu.classList.remove("open_sub_menu");
  });
}
function closeMainMenu() {
  var element1 = document.getElementById("menu");
  element1.classList.remove("open");
  var element2 = document.getElementById("hamburger");
  element2.classList.remove("close");
  D11Data.track("hamburgerMenuClosed", {
    platform: "web",
    siteVersion: "beta",
    language: userLanguage,
  });
}
function disableScroll() {
  document.body.classList.toggle("remove-scrolling");
}
function menuClick() {
  var element1 = document.getElementById("hamburger");
  element1.classList.toggle("close");
  var element2 = document.getElementById("menu");
  element2.classList.toggle("open");
  closeSubMenu();
  disableScroll();
  D11Data.track("hamburgerMenuClicked", {
    platform: "web",
    siteVersion: "beta",
    language: userLanguage,
  });
}
var submenuLink = document.getElementsByClassName("sub_menu_click");
var submenuTarget = function () {
  let submenuParent = this.parentNode;
  let submenuTarget = submenuParent.children[2];

  submenuParent.classList.toggle("submenu_active");
  submenuTarget.classList.toggle("open_sub_menu");
};
for (var i = 0; i < submenuLink.length; i++) {
  submenuLink[i].addEventListener("click", submenuTarget, false);
}
window.addEventListener("click", function (e) {
  if (document.getElementById("menu_parent").contains(e.target)) {
  } else {
    closeSubMenu();
    closeMainMenu();
  }
});

function currentActiveElement() {
  let windowUrl = window.location.href;
  let dropdown = document.getElementById("menu");

  const nodes = dropdown.getElementsByTagName("a");

  for (i = 0; i < nodes.length; i++) {
    let currentUrl = nodes[i].href;

    if (windowUrl == currentUrl) {
      nodes[i].parentElement.classList.add("active_menu");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  currentActiveElement();
});

// hamburger menu

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
