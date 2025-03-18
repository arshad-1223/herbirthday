const countdown = () => {
    const birthday = new Date('2025-04-10T00:00:00'); // Change to her birthday
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById('timer').textContent = "🎉 It's Today! 🎂";
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById('timer').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
};

setInterval(countdown, 1000);
