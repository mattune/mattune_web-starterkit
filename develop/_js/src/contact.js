// import * as $ from 'jquery';

(() => {
  // load
  window.addEventListener('load', function(){
    const form = document.querySelector('.form');
    const submitButton = document.querySelector('.submit-button');

    let inputFlag = false;
    let selectFlag = false;
    let textareaFlag = false;

    function check(){
      if(inputFlag && selectFlag && textareaFlag) {
        submitButton.classList.remove('disable');
      }
      else {
        submitButton.classList.add('disable');
      }
    }

    // input の入力チェック
    document.querySelectorAll('input:required').forEach((el)=> {
      el.addEventListener('change', ()=> {
        inputFlag = true;

        document.querySelectorAll('input:required').forEach((el)=> {
          if(el.value === '') {
            inputFlag = false;
          }
        });

        check();
      });
    });

    // select の入力チェック
    document.querySelectorAll('select:required').forEach((el)=> {
      el.addEventListener('change', ()=> {
        selectFlag = true;

        document.querySelectorAll('select:required').forEach((el)=> {
          if(el.value === '') {
            selectFlag = false;
          }
        });

        check();
      });
    });

    // textarea の入力チェック
    document.querySelectorAll('textarea:required').forEach((el)=> {
      el.addEventListener('change', ()=> {
        textareaFlag = true;

        document.querySelectorAll('textarea:required').forEach((el)=> {
          if(el.value === '') {
            textareaFlag = false;
          }
        });

        check();
      });
    });


    submitButton.addEventListener('click', function (e) {
      const invalids = form.querySelectorAll(':invalid');

      if(0 < invalids.length) {
        e.preventDefault();

        for(let i = 0, len = invalids.length; i<len; i++) {
          (function (idx) {
            const invalid = invalids[idx];
            const $parent = invalid.closest('.form_unit');
            const $errorMessage = $parent.querySelector('.error_txt');

            invalid.classList.add('error');
            $errorMessage.innerHTML = invalid.validationMessage;
            $errorMessage.classList.add('error');

            invalid.addEventListener('change', function f() {
              this.removeEventListener('change', f);
              $errorMessage.classList.remove('error');
              invalid.classList.remove('error');
            });
          })(i);
        }
      }
    });
  });
})();



