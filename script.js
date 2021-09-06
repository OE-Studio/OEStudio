instagramButton = document.getElementById('instagramIcon');
twitterButton = document.getElementById('twitterIcon');
mailButton = document.getElementById('mailIcon');
logo = document.getElementById('logo');
logoSrcset = document.getElementById('logoSub');
alot = document.getElementById('alot');
Image = document.getElementById('headerImage');


toggleButton = document.getElementById('toggleMode');
toggleButtonDark = document.getElementById('toggleModeDark');
var mode = 1;

if (window.matchMedia('prefers-color-scheme')) {
  mode = 0
}

toggleButton.addEventListener('click', () => {
  if (mode == 1) {
    mode = 0;
    alot.setAttribute('src', 'images/backgroundImageDark.svg');
    console.log(logo.src)
    logo.src = 'images/logolight.svg';
    logoSrcset.srcset = 'images/logolight.svg';
    // logo.style.display="none";
    toggleButton.setAttribute('src', 'images/Sun.svg');
    toggleButtonDark.setAttribute('srcset', 'images/Sun.svg');
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
    document.documentElement.style
      .setProperty('--alotColor', 'white');
  } else {
    console.log('lightmode');
    mode = 1;
    alot.setAttribute('src', 'images/alot.svg');
    logo.src = 'images/oe.svg';
    logoSrcset.srcset = 'images/oe.svg';
    toggleButton.setAttribute('src', 'images/MoonStars.svg');
    toggleButtonDark.setAttribute('srcset', 'images/MoonStars.svg');
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
    document.documentElement.style
      .setProperty('--alotColor', 'red');
    
  }
})



// Perspective Effect
// ===========================================================
// See tutorial at : 
// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
// ===========================================================

function Perspective() {
  // Init
  var container = document.getElementById("container"),
    inner = document.getElementById("inner");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //--------------------------------------------------------

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
}

Perspective();

var design = document.getElementById('design');
var designTitle = document.getElementById('designTitle');
console.log(logo);
var designDescription = document.getElementById("designObjDescription");
var documentDescription = document.getElementById("documentObjDescription");
var documentation = document.getElementById('documentation');
var documentationCont = document.getElementById('documentationContainer');
var developCont = document.getElementById('developContainer');
var developDescription = document.getElementById('developObjDescription');

if (window.matchMedia('max-width: 991px')) {
  design.addEventListener('click', () => {
    console.log(designDescription.classList);

    designDescription.classList.toggle("active");
    documentation.classList.toggle("hide");
    documentationCont.classList.toggle("width");
    documentDescription.classList.toggle("hide");
    // designTitle.classList.toggle("hide");
    designTitle.classList.toggle("active");

  })

  documentationCont.addEventListener('click', () => {
    console.log(designDescription.classList);
    documentation.classList.toggle("active");
    documentDescription.classList.toggle("active");
    designDescription.classList.toggle("hide");
    designTitle.classList.toggle("hide");
    design.classList.toggle("width");

  })
}


window.addEventListener('mouseover', (e) => {
  if (e.target == design) {
    designDescription.classList.toggle("active");
  }

  if (e.target == documentationCont) {
    documentDescription.classList.toggle("active");
  }

  if (e.target == developCont) {
    developDescription.classList.toggle("active");
  }
})