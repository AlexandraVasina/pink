(function () {
  var form = document.querySelector('.form');

  var onSuccess = function () {
    document.querySelector('.popup--success').classList.remove('popup--hidden');
  }

  var onError = function () {
    document.querySelector('.popup--error').classList.remove('popup--hidden');
  }

  var postInfo = function (data, onSuccess, onError) {
      var URL = 'mail.php';
      var xhr = new XMLHttpRequest();

      xhr.open('POST', URL);
      xhr.responseType = 'json';
      xhr.send(data);
      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess();
        } else {
          onError();
        }
      });
  }

  form.addEventListener('submit', function (evt) {
      evt.preventDefault();

      postInfo(new FormData(form), onSuccess, onError);

      form.reset();
  });

  var btns = Array.from(document.querySelectorAll('.popup__btn'));
  var onPopupClose = function (evt) {
    var popups = Array.from(document.querySelectorAll('.popup'));
    for (var i = 0; i < popups.length; i++) {
      if (!popups[i].classList.contains('popup--hidden')) {
        popups[i].classList.add('popup--hidden');
      }
    }

    btns.forEach((elem) => {
      elem.removeEventListener('click', onPopupClose);
    });
  }

  btns.forEach((elem) => {
    elem.addEventListener('click', onPopupClose);
  });
})()
