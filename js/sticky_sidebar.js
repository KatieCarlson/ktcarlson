var quickLinks = document.querySelectorAll('.menu-list a');
var	positionArray = [];
var hashArray = [];
for (var i = 0; i < quickLinks.length; i++) {
  hashArray.push(quickLinks[i].href.substring(quickLinks[i].href.indexOf('#') + 1));
}

for (var i = 0; i < hashArray.length; i++) {
  positionArray.push(document.getElementById(hashArray[i]).getBoundingClientRect().top);
}

function isActive1() {
  document.getElementsByClassName('is-active')[0];
}

document.addEventListener('scroll', scrollHandler, true);

function scrollHandler() {

  currentScrollPosition = document.documentElement.scrollTop + 100;

  //currentActivePosition = document.getElementsByClassName('is-active')
  //[0].getBoundingClientRect().top;
  for (var i = 1; i <= positionArray.length; i++) {

    if (currentScrollPosition >= positionArray[i - 1] && currentScrollPosition < positionArray[i]) {
      var currentActive = document.getElementsByClassName('is-active')[0];
      if (currentActive != undefined) {
        currentActive.classList.remove('is-active');
      }

      quickLinks[i - 1].classList.add('is-active');
      break;
    }

    if (currentScrollPosition > positionArray[positionArray.length - 1]) {
      var currentActive = document.getElementsByClassName('is-active');
      var currentActive = document.getElementsByClassName('is-active')[0];

      if (currentActive != undefined) {
        currentActive.classList.remove('is-active');
      }

      quickLinks[quickLinks.length - 1].classList.add('is-active');
      break;

    }
  }
}

for (var i = 0; i < quickLinks.length; i++) {
  quickLinks[i].addEventListener('click', function (event) {
    document.removeEventListener('scroll', scrollHandler, true);

    /**
		for (var j=0; j<quickLinks.length; j++){
			if (quickLinks[j].classList.contains('is-active')){
				quickLinks[j].classList.remove('is-active');
			}
		}
		**/

    isActive = document.getElementsByClassName('is-active')[0];

    if (isActive != undefined) {
      isActive.classList.remove('is-active');
    }

    this.classList.add('is-active');

    setTimeout(function () {
      document.addEventListener('scroll', scrollHandler, true);
    }, 600);

  });

}

// for (var i = 0; i < quickLinks.length; i++) {
//   quickLinks[i].addEventListener('click', function (e) {
//     // dynamically determining the height of your navbar
//     var navbar = document.querySelector('navbar');
//     var navbarheight = parseInt(window.getComputedStyle(navbar).height, 10);
//     //show 5 pixels of previous section just for illustration purposes
//     var scrollHeight = document.querySelector(e.target.hash).offsetTop - navbarheight - 5;
//     /* scrolling to the element taking the height of the static bar into account*/
//     window.scroll(0, scrollHeight);
//     /*properly updating the window location*/
//     window.location.hash = e.target.hash;
//     /* do not execute default action*/
//     e.preventDefault();
//   });
// }
