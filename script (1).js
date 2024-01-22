let countdown;
let targetDate;

function startCountdown() {

  const targetDateString = '2024-12-31T23:59:59';

  targetDate = new Date(targetDateString);
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    alert('Countdown already expired!');
    return;
  }

  countdown = setInterval(updateCountdown, 1000);

  updateCountdown();
}

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    clearInterval(countdown);
    document.getElementById('timer').innerHTML = 'Countdown expired!';
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
