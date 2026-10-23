"use strict";
document.documentElement.classList.add("js");
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
function closeMenu(){ nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if(event.key === "Escape") closeMenu(); });
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
 document.querySelectorAll("[data-filter]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
 document.querySelectorAll("[data-category]").forEach(project => {project.hidden = button.dataset.filter !== "all" && project.dataset.category !== button.dataset.filter;});
}));
// 平滑滚动由 style.css 的 scroll-behavior 提供，并尊重减少动态效果设置。
