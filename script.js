const hitbox = document.getElementsByClassName('noHitbox')[0];
const yesButton = document.getElementsByClassName('yes-button')[0];
const noButton = document.getElementsByClassName('no-button')[0];
const messages = ["Are you sure you want to say NO? Think again!",
    "This button doesn't seem to work...", "Try clicking YES instead!", "This button's ugly anyway!",
    "Why not choose YES?", "NO is not an option!", "Click YES, it's the right choice!"];

yesButton.addEventListener('click', function() {
    const gif = document.createElement('img');
    gif.src = 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExejY0bncwbXRkcXFhZDN1djE1YWJ4eTAzM2U5d3JjaDZzNnkxZXNlOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hxERQNWQudqSF1iDnr/giphy.gif';
    gif.style.position = 'relative';
    document.getElementsByClassName("card")[0].appendChild(gif);
});

noButton.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
    yesButton.style.marginRight = '80px';
    const maxX = window.innerWidth - hitbox.offsetWidth;
    const maxY = window.innerHeight - hitbox.offsetHeight;
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
    });
}

