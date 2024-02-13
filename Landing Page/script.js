const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 21);

    const countdownElement = document.getElementById('countdown');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const registerButton = document.getElementById('registerButton');

    function updateCountdown() {
      const currentTime = new Date();
      const timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        countdownElement.innerHTML = 'Time\'s up!';
        registerButton.innerText = 'Expired';
        registerButton.disabled = true;
        return;
      }

      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      hoursElement.innerText = padZero(hours);
      minutesElement.innerText = padZero(minutes);
      secondsElement.innerText = padZero(seconds);
    }

    function padZero(number) {
      return (number < 10 ? '0' : '') + number;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);