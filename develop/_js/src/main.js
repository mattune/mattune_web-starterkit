// import * as $ from 'jquery';
import * as SmoothScroll from 'smooth-scroll';
import imagesLoaded from 'imagesLoaded';
import ScrollClass from './module/_scrollClass';
import ScrollLinkDisable from './module/_scrollLinkDisable';
import Lazyload from './module/_lazyload';


(() => {
  const _body = document.querySelector('body');
  const _loading = document.getElementById('loading');
  const _globalHeader = document.querySelector('#globalHeader');
  const _btnMenu = document.querySelector('#btnMenu');
  const _globalNavi = document.querySelector('#globalNavi');

  const imgLoad = imagesLoaded( document.querySelector('#wrapper'), function( instance ) {
    window.scrollTo(0,0);

    setTimeout(() => {
      _loading.classList.add('hide');

      const LZY = new Lazyload;
    }, 400);


    setTimeout(() => {
      _body.classList.remove('noscroll');
      const SC = new ScrollClass(document.querySelectorAll('.target'));
    }, 1000);
  });


  // document ready
  document.addEventListener('DOMContentLoaded', () => {
    _body.classList.add('noscroll');
    _loading.classList.add('active');

    const SLD = new ScrollLinkDisable;
    const SS = new SmoothScroll('a[href*="#"]', {
      speed: 600,
      speedAsDuration: true,
      easing:'easeInOutQuart'
    });

    _btnMenu.addEventListener('click', (e)=> {
      _btnMenu.querySelector('a').classList.toggle('active');
      _globalNavi.classList.toggle('active');
    });
  }, false);
})();



