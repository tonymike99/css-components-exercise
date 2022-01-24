document
    .getElementById('modal-open-btn')
    .addEventListener('click', function () {
        document.getElementById('modal-open-btn').style.visibility = 'hidden';
        document
            .getElementsByClassName('modal__component')[0]
            .classList.add('active');
    });

document
    .getElementById('modal-return-btn')
    .addEventListener('click', function () {
        document.getElementById('modal-return-btn').style.display = 'block';
        document
            .getElementsByClassName('modal__component')[0]
            .classList.remove('active');
        document.getElementById('modal-open-btn').style.visibility = 'visible';
    });
