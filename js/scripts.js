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

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    nameInput.addEventListener('input', enableSubmitIfValid);
    emailInput.addEventListener('input', enableSubmitIfValid);

    enableSubmitIfValid(); // Call once to set initial button state
});

function isValidEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}

function enableSubmitIfValid() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submitButton');

    const nameError = document.querySelector('#name ~ .invalid-feedback');
    const emailInvalidError = document.querySelector('#email ~ .invalid-feedback:nth-child(2)');

    let isNameValid = !!nameInput.value;
    let isEmailValid = isValidEmail(emailInput.value);

    if (isNameValid) {
        nameError.classList.remove('d-block');
    } else {
        nameError.classList.add('d-block');
    }

    if (isEmailValid || !emailInput.value) {
        emailInvalidError.classList.remove('d-block');
    } else {
        emailInvalidError.classList.add('d-block');
    }

    if (isNameValid && isEmailValid) {
        submitButton.classList.remove('disabled');
        submitButton.disabled = false;
    } else {
        submitButton.classList.add('disabled');
        submitButton.disabled = true;
    }
}

