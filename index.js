
let spotify = document.getElementById('spotify');
spotify.setAttribute("style", "background-color: #1DB954;")
spotify.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://open.spotify.com/artist/7zrDOXqDp5IkVBylOCTGqi?si=w0QJJcKtSOa_WYZYF-ji_Q';
});

let youtube = document.getElementById('youtube');
youtube.setAttribute("style", "background-color: #FF0000;")
youtube.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://www.youtube.com/channel/UCMQsvRdy73gl2MIF1o9H_8g';
});

let apple = document.getElementById('apple');
apple.setAttribute("style", "background-image: linear-gradient(#fa57c1,#69a6f9)")
apple.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://music.apple.com/us/artist/aarya-ganesan/1509428578';
});

let soundcloud = document.getElementById('soundcloud');
soundcloud.setAttribute("style", "background-color: #ff7700;")
soundcloud.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://soundcloud.com/user-597821954';
});

let google = document.getElementById('google play');
google.setAttribute("style", "background-color: #F55A34;")
google.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'http://play.google.com/music/';
});

let insta = document.getElementById('insta');
insta.setAttribute("style", "right: calc(50% - 30px)")
insta.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://www.instagram.com/aaryaganesan/?hl=en';
});

let fb = document.getElementById('fb');
fb.setAttribute("style", "left: calc(50% - 30px)")
fb.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'https://www.facebook.com/aaryag20/';
});

// #