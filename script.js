// Sticky Navbar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Booking Form
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = this.querySelector('input[type=text]').value;
        const email = this.querySelector('input[type=email]').value;
        alert(`Thanks ${name}! Your booking request has been submitted. Confirmation sent to ${email}`);
        this.reset();
    });
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = this.querySelector('input[type=text]').value;
        const password = this.querySelector('input[type=password]').value;
        if (username === 'admin' && password === '1234') {
            alert("Login successful! Redirecting to Admin Dashboard");
            window.location.href = 'login.html#admin';
        } else {
            alert("Invalid credentials!");
        }
        this.reset();
    });
}

// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
