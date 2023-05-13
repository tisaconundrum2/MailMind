/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click();
      }
    });
  });

});

$(document).ready(function () {

  $('#name').on('input', function () {
    if ($(this).val().length === 0) {
      $('#name-feedback').show();
    } else {
      $('#name-feedback').hide();
    }
  });

  $('#email').on('input', function () {
    if (!isValidEmail($(this).val())) {
      $('#email-feedback').show();
    } else {
      $('#email-feedback').hide();
    }

    $('#submitButton').prop('disabled', !validateInputs());
  });

  function validateInputs() {
    var name = $('#name').val();
    var email = $('#email').val();

    var isNameValid = name.length > 0;
    var isEmailValid = isValidEmail(email);

    return isNameValid && isEmailValid;
  }

  function isValidEmail(email) {
    // Regex for email validation
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  }
});


$("#submitButton").click(function () {
  $.ajax({
    type: "POST",
    url: "/api/waitlist.php",
    contentType: "application/json",
    data: JSON.stringify({
      name: $('#name').val(),
      email: $('#email').val()
    }),
    success: function (result) {
      alert("You've been added to the waitlist");
    },
    error: function (result) {
      alert("An error occured, please try again");
    }
  });
})