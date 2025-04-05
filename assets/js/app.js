'use strict';

import { validateEmail } from './utils.js';

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formMessage = document.getElementById('formMessage');

function clearFormErrors() {
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    formMessage.textContent = '';
}

function handleContactFormSubmit(event) {
    event.preventDefault();
    clearFormErrors();
    let isFormValid = true;
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name.';
        isFormValid = false;
    }
    if (!validateEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isFormValid = false;
    }
    if (messageInput.value.trim() === '') {
        messageError.textContent = 'Please enter your message.';
        isFormValid = false;
    }
    if (isFormValid) {
        formMessage.textContent = 'Message sent successfully! (This is just for practice)';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fix the errors in the form.';
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

contactForm.addEventListener('submit', handleContactFormSubmit);