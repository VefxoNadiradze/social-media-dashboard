const themeBtn = document.querySelector(".themeBtn");
const dashboardCards = document.querySelectorAll(".dashboardCard");
const overviewCards = document.querySelectorAll(".overviewCard");

themeBtn.addEventListener("click", () => {
  themeBtn.classList.toggle("activeBtn");
  document.body.classList.toggle("activeBody");
  dashboardCards.forEach((dashboardCard) => {
    dashboardCard.classList.toggle("activeDashboardCard");
  });

  overviewCards.forEach((overviewCard) => {
    overviewCard.classList.toggle("overviewCardActive");
  });

  if (themeBtn.classList.contains("activeBtn")) {
    themeBtn.previousElementSibling.style.color = "#8C98C6";
    themeBtn.parentElement.previousElementSibling.firstElementChild.style.color =
      "#fff";
    themeBtn.parentElement.previousElementSibling.lastElementChild.style.color =
      "#8C98C6";
  } else {
    themeBtn.parentElement.previousElementSibling.firstElementChild.style.color =
      "#1D1F29";
    themeBtn.parentElement.previousElementSibling.lastElementChild.style.color =
      "#63687D";
    themeBtn.previousElementSibling.style.color = "#848BAB";
  }
});
