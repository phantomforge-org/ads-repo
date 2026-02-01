// Set the launch date (e.g., 30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-container').innerHTML = "<h2>We're Live!</h2>";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Form Handling
const signupForm = document.getElementById('signup-form');
const messageEl = document.getElementById('form-message');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Simulate API call
    messageEl.innerText = "Processing...";
    messageEl.className = "message";

    setTimeout(() => {
        messageEl.innerText = "Thank you! We've added " + email + " to our early access list.";
        messageEl.className = "message success";
        signupForm.reset();
    }, 1500);
});
