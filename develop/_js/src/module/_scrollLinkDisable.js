export default class linkDisable {
  constructor () {
    this.init();
  }

  init() {
    const _body = document.querySelector('body');
    let timer;

    window.addEventListener('scroll', function() {
      // link disable
      clearTimeout(timer);
      if(!_body.classList.contains('disable-hover')) {
        _body.classList.add('disable-hover')
      }
      timer = setTimeout(function(){
        _body.classList.remove('disable-hover')
      }, 300);
    }, false);
  }
}