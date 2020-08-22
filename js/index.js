const tabLinks = document.querySelectorAll(".tabs__link");
const tabPanels = document.querySelectorAll(".tabs-content__panel");

for(let el of tabLinks) {
    el.addEventListener("click", e => {
        e.preventDefault();

        document.querySelector('.tabs__item.active').classList.remove("active");
        document.querySelector('.tabs-content__panel.active').classList.remove("active");

        const parentListItem = el.parentElement;
        parentListItem.classList.add("active");
        const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

        const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
        panel[0].classList.add("active");
    });
}