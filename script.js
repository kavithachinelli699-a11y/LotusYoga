document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    alert("Please enter your name");
    return;
  }

   if (email === "") {
    alert("Please enter your email");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  if (subject === "") {
    alert("Please enter the subject");
    return;
  }

  if (message === "") {
    alert("Please enter your message");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

$(document).ready(function () {
  $(".filter-btn").click(function () {
    let filter = $(this).data("filter");

    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".timetable-row").fadeIn();
    } else {
      $(".timetable-row").hide();
      $("." + filter).fadeIn();
    }
  });
});


 


