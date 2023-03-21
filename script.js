// чекбокс на четные блоки
document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.block_2').style.background = (this.checked) ? '#A4A3A4' : ''
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

document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.block_6').style.background = (this.checked) ? '#A4A3A4' : ''
});

document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.text_6').style.color = (this.checked) ? 'white' : ''
});


document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.block_8').style.background = (this.checked) ? '#A4A3A4' : ''
});

document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.text_8').style.color = (this.checked) ? 'white' : ''
});


document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.block_10').style.background = (this.checked) ? '#A4A3A4' : ''
});

document.getElementById('privacy_checkbox').addEventListener('click', function (ev) {
    document.querySelector('.text_10').style.color = (this.checked) ? 'white' : ''
});





//  событие на кнопку добавлет и убирает
$('.btn').click(function () {
    $(".block_5, .block_6, .block_7, .block_8, .block_9, .block_10").fadeToggle(100);
}); 