const next1 = document.getElementById('next-1');
const next2 = document.getElementById('next-2');
const next3 = document.getElementById('next-3');
const back2 = document.getElementById('back-2');
const back3 = document.getElementById('back-3');
const back4 = document.getElementById('back-4');
const submit = document.getElementById('submit');
const formSlider = document.querySelector('.form-slider');
let currentIndex = 0;

function updateSlider() {
    formSlider.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Fungsi untuk menunjukkan pesan kesalahan
function showError(input, message) {
    const label = input.parentElement;
    const errorMessage = label.querySelector('.error-message');
    errorMessage.textContent = message;
    input.classList.add('error');
}

// Fungsi untuk menghapus pesan kesalahan
function clearError(input) {
    const label = input.parentElement;
    const errorMessage = label.querySelector('.error-message');
    errorMessage.textContent = '';
    input.classList.remove('error');
}

// Validasi Form 1
function validateForm1() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    let valid = true;

    if (firstName.value.trim() === '' || firstName.value.length > 15) {
        showError(firstName, 'First name is required and should be max 15 char.');
        valid = false;
    } else {
        clearError(firstName);
    }

    if (lastName.value.trim() === '' || lastName.value.length > 15) {
        showError(lastName, 'Last name is required and should be max 15 char.');
        valid = false;
    } else {
        clearError(lastName);
    }

    return valid;
}

// Validasi Form 2
function validateForm2() {
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');
    let valid = true;

    if (street.value.trim() === '' || street.value.length > 30) {
        showError(street, 'Street is required and should be max 30 char.');
        valid = false;
    } else {
        clearError(street);
    }

    if (city.value.trim() === '' || city.value.length > 20) {
        showError(city, 'City is required and should be max 20 char.');
        valid = false;
    } else {
        clearError(city);
    }

    if (state.value === '') {
        showError(state, 'Please select a country.');
        valid = false;
    } else {
        clearError(state);
    }

    if (zipCode.value.trim() === '' || !/^\d{5}$/.test(zipCode.value)) {
        showError(zipCode, 'Zip Code is required and should be 5 digits.');
        valid = false;
    } else {
        clearError(zipCode);
    }

    return valid;
}

// Validasi Form 3
function validateForm3() {
    const telephone = document.getElementById('telephone');
    const email = document.getElementById('email');
    const repeatEmail = document.getElementById('repeat-email');
    let valid = true;

    if (telephone.value.trim() === '' || !/^\d{10}$/.test(telephone.value)) {
        showError(telephone, 'Telephone is required and should be 10 digits.');
        valid = false;
    } else {
        clearError(telephone);
    }

    if (email.value.trim() === '' || email.value.length > 30 || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        showError(email, 'Valid email is required and should be max 30 char.');
        valid = false;
    } else {
        clearError(email);
    }

    if (repeatEmail.value.trim() === '' || repeatEmail.value !== email.value) {
        showError(repeatEmail, 'Emails do not match.');
        valid = false;
    } else {
        clearError(repeatEmail);
    }

    return valid;
}

// Fungsi untuk mengumpulkan data input dan mengarahkan ke halaman hasil
function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const middleInitial = document.getElementById('middle-initial').value;
    const lastName = document.getElementById('last-name').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const repeatEmail = document.getElementById('repeat-email').value;
    const lotteryInfo = document.getElementById('lottery-info').checked;
    const ownership = document.querySelector('input[name="ownership"]:checked') ? document.querySelector('input[name="ownership"]:checked').value : '';

    const formData = {
        firstName,
        middleInitial,
        lastName,
        street,
        city,
        state,
        zipCode,
        telephone,
        email,
        repeatEmail,
        lotteryInfo,
        ownership
    };

    const formDataString = JSON.stringify(formData);
    window.location.href = `result.html?data=${encodeURIComponent(formDataString)}`;
}

next1.addEventListener('click', () => {
    if (validateForm1()) {
        currentIndex++;
        updateSlider();
    }
});

next2.addEventListener('click', () => {
    if (validateForm2()) {
        currentIndex++;
        updateSlider();
    }
});

next3.addEventListener('click', () => {
    if (validateForm3()) {
        currentIndex++;
        updateSlider();
    }
});

back2.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

back3.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

back4.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

submit.addEventListener('click', () => {
    if (validateForm3()) {
        submitForm();
    }
});
