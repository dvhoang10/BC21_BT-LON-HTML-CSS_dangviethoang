// count up
$(".counter-run").countUp();

// owl carousel
$(document).ready(function () {
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 2,
      },
    },
  });
});

// question;
var sections = document.querySelectorAll(".question__content-section");

Array.from(sections).forEach(function (section) {
  section.onclick = function () {
    var text = section.parentElement.querySelector(".question__content-text");
    var iconUp = section.querySelector(".iconUp");
    var iconDown = section.querySelector(".iconDown");
    if (text.classList.contains("d-none")) {
      text.classList.remove("d-none");
      iconDown.classList.add("d-none");
      iconUp.classList.remove("d-none");
    } else {
      text.classList.add("d-none");
      iconDown.classList.remove("d-none");
      iconUp.classList.add("d-none");
    }
  };
});

// project
// On PC
var tabcontent = document.getElementsByClassName("project__card-content");
for (i = 1; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

function openTab(event, projectName) {
  var tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("project__card-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("project__card-item");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " project__card-item--active",
      ""
    );
  }
  document.getElementById(projectName).style.display = "block";
  event.currentTarget.className += " project__card-item--active";
}

// On tablet - mobile
var array = document.getElementsByClassName(
  "project__card-item-on-mobile-tablet"
);

for (var i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
