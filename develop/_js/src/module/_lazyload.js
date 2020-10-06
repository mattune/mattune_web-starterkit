require('intersection-observer');

export default class lazyLoad {
  constructor () {
    this.init();
  }

  init() {
    const lazyImages = [].slice.call(document.querySelectorAll('.lzy'));

    // lazyImages.forEach((el)=> {
    //   el.dataset.src = el.getAttribute('src');
    // });

    if ('IntersectionObserver' in window) {
      const options = {
        rootMargin: '20%'
      }

      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.onload = function(e) {
              // e.target.classList.remove('lzy');
              e.target.classList.add('action');
            };

            if(lazyImage.dataset.src !== undefined) {
              lazyImage.src = lazyImage.dataset.src;
            }

            if (lazyImage.dataset.srcset !== undefined) {
              lazyImage.srcset = lazyImage.dataset.srcset;
            }
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      }, options);

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  }
}