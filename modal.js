document
    .getElementById('modal-open-btn')
    .addEventListener('click', function () {
        document.getElementById('modal-open-btn').style.visibility = 'hidden';
        document.getElementsByClassName('modal__component')[0].style.display =
            'block';
        // document.getElementsByTagName('body')[0].style.opacity = 0.5;
        document
            .getElementsByClassName('modal__component')[0]
            .classList.add('active');
    });

document
    .getElementById('modal-return-btn')
    .addEventListener('click', function () {
        document.getElementById('modal-open-btn').style.visibility = 'visible';
        document.getElementsByClassName('modal__component')[0].style.display =
            'none';
        // document.getElementsByTagName('body')[0].style.opacity = 1;
        document
            .getElementsByClassName('modal__component')[0]
            .classList.remove('active');
    });
