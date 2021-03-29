(function () {
    var input = document.querySelector('.new-post__input-add');
    var form = document.querySelector('.form');
    var img = document.querySelector('.new-post__preview');

    input.addEventListener('change', function () {
        var reader = new FileReader();
        var file = document.querySelector('.new-post__input-add').files[0];

        reader.addEventListener('loadend', function () {
          img.src = reader.result;
        });

        if (file) {
          reader.readAsDataURL(file);
        } else {
          img.src = "../img/preview.jpg";
        }
    });
})()
