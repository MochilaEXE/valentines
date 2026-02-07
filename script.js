const hitbox = document.getElementsByClassName('noHitbox')[0];
const yesButton = document.getElementsByClassName('yes-button')[0];
const noButton = document.getElementsByClassName('no-button')[0];
const messages = ["Are you sure you want to say NO? Think again!",
    "This button doesn't seem to work...", "Try clicking YES instead!", "This button's ugly anyway!",
    "Why not choose YES?", "NO is not an option!", "Click YES, it's the right choice!"];
const audio = document.createElement('audio');
audio.preload = 'auto';

yesButton.addEventListener('click', function() {
    audio.src = 'yay.mp3';
    audio.play();
    if (document.getElementsByTagName('img').length > 0) {
        return;
    }
    const gif = document.createElement('img');
    gif.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExczg4dTR1OHBoczlzempjOG43dnhxZWk3MDgxM2hrbDhndndzeHljaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tspLzBjyqz1cix8mUY/giphy.gif';
    gif.style.position = 'relative';
    document.getElementsByClassName("card")[0].appendChild(gif);
    noButton.style.display = 'none';
});

noButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
    yesButton.style.marginRight = '80px';
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    const randomX = Math.max(Math.floor(Math.random() * maxX), 20);
    const randomY = Math.max(Math.floor(Math.random() * maxY), 20);
    hitbox.style.position = 'absolute';
    hitbox.style.left = randomX + 'px';
    hitbox.style.top = randomY + 'px';
});

if (hitbox) {
    hitbox.addEventListener('mouseover', function() {
        yesButton.style.marginRight = '80px';
        const maxX = window.innerWidth - hitbox.offsetWidth;
        const maxY = window.innerHeight - hitbox.offsetHeight;
        const randomX = Math.max(Math.floor(Math.random() * maxX), 20);
        const randomY = Math.max(Math.floor(Math.random() * maxY), 20);
        hitbox.style.position = 'absolute';
        hitbox.style.left = randomX + 'px';
        hitbox.style.top = randomY + 'px'; 
        noButton.textContent = "No - " + messages[Math.floor(Math.random() * messages.length)];
    });
}

