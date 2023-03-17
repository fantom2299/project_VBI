// чекбокс на четные блоки
document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.block_2, .block_4').style.background = (this.checked) ? '#A4A3A4' : ''
});

document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.text_2').style.color = (this.checked) ? 'white' : ''
});


document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.block_4').style.background = (this.checked) ? '#A4A3A4' : ''
});

document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.text_4').style.color = (this.checked) ? 'white' : ''
});

//  событие на кнопку добавлет и убирает
$('.btn').click(function () {
    $(".block_5").fadeToggle(100);
}); 