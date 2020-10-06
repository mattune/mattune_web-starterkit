require('intersection-observer');

export default class ScrollClass {
  constructor (element) {
    this.dom = element;

    this.action();
  }

  action() {
    const _this = this;
    const options = {
      rootMargin: '-30px 0px -30px 0px'
    }

    if ('IntersectionObserver' in window) {
      let lazyObjectObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyTarget = entry.target;
            lazyTarget.classList.add('action');
            lazyObjectObserver.unobserve(lazyTarget);
          }
          else {
            // let lazyTarget = entry.target;
            // lazyTarget.classList.remove('action');
          }
        });
      }, options);

      const node = Array.prototype.slice.call(_this.dom, 0);
      node.forEach((lazyTarget, index) => {
        lazyObjectObserver.observe(lazyTarget);
      });
    }
  }
}