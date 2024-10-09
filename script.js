document.getElementById('wish-button').addEventListener('click', function() {
    // Redirect ke website yang dituju
    window.location.href = 'web4.html'; // Ganti dengan URL tujuan
});


document.getElementById('wish-button').addEventListener('click', function() {
    var surpriseElement = document.getElementById('surprise');
    surpriseElement.classList.toggle('hidden');
    
    if (!surpriseElement.classList.contains('hidden')) {
        // Tampilkan pesan kejutan dan mainkan musik
        var audio = document.getElementById('HBD.mp3');
        audio.play();

        // Efek konfeti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    }
});

// Fungsi untuk memunculkan efek konfeti lebih sering
function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.7 }
    });

    setTimeout(launchConfetti, 3000);  // Setiap 3 detik
}

launchConfetti();  // Mulai efek konfeti saat halaman dimuat
