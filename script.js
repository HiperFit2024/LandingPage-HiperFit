// Função para iniciar o cronômetro
function startCountdown(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `Tempo Restante: ${minutes}:${seconds}`;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

window.onload = function () {
    const timerDisplay = document.getElementById('timer');
    const ctaTimerDisplay = document.getElementById('countdown');
    const duration = 19 * 60 + 45; // 19 minutos e 45 segundos
    startCountdown(duration, timerDisplay);
    startCountdown(duration, ctaTimerDisplay);
};
