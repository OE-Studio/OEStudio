instagramButton = document.getElementById('instagramIcon');
twitterButton = document.getElementById('twitterIcon');
mailButton = document.getElementById('mailIcon');
logo = document.getElementById('logo');
alot = document.getElementById('alot');
grid = document.getElementById('grid');


toggleButton = document.getElementById('toggleMode');
var mode = 1;

toggleButton.addEventListener('click', ()=>{
   if(mode == 1){
       mode = 0;
       alot.setAttribute('src', 'images/alotwhite.svg');
       grid.style.backgroundImage = "url('images/mobileGridDark.png')";
       logo.setAttribute('src', 'images/logolight.svg');
       instagramButton.setAttribute('src', 'images/InstagramLogoLight.svg' );
       twitterButton.setAttribute('src', 'images/TwitterLogoLight.svg' );
       mailButton.setAttribute('src', 'images/EnvelopeSimpleLight.svg' );
       toggleButton.setAttribute('src', 'images/Sun.svg' );
       document.documentElement.style
    .setProperty('--greyText', '#C4C4C4');
    document.documentElement.style
    .setProperty('--black', 'white');
    document.documentElement.style
    .setProperty('--white', 'black');
    document.documentElement.style
    .setProperty('--highlight', 'rgba(255, 0, 0, 0.24)');
    document.documentElement.style
    .setProperty('--stroke', '#2E2E2E');
    if(window.matchMedia('(min-width: 992px)').matches){
        grid.style.backgroundImage = "url('images/webGridDark.svg')"
      }

} else{
    mode = 1;
    grid.style.backgroundImage = "url('images/mobileGrid.svg')"
    alot.setAttribute('src', 'images/alot.svg')
    logo.setAttribute('src', 'images/oe.svg')
    instagramButton.setAttribute('src', 'images/InstagramLogo.svg' );
       twitterButton.setAttribute('src', 'images/TwitterLogo.svg' );
       mailButton.setAttribute('src', 'images/EnvelopeSimple.svg' );
    toggleButton.setAttribute('src', 'images/MoonStars.svg' );
    document.documentElement.style
    .setProperty('--greyText', '#5C5C5C');
    document.documentElement.style
    .setProperty('--black', 'black');
    document.documentElement.style
    .setProperty('--white', 'white');
    document.documentElement.style
    .setProperty('--highlight', 'rgba(255, 0, 0, 0.06)');
    document.documentElement.style
    .setProperty('--stroke', '#eaeaea');
    if(window.matchMedia('(min-width: 992px)').matches){
        grid.style.backgroundImage = "url('images/webGrid.svg')"
      }

}
})