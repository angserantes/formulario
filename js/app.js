document.querySelector('.banner-sub-here-btn').addEventListener('click', () => {
    document.querySelector('.banner-sub-here').style.display = 'none';
    document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;';
    document.querySelector('.container').style.background = '#cc683c';
});

document.querySelector('.x-btn').addEventListener('click', () => {
    document.querySelector('.banner-sub-here').style.display = 'flex';
    document.querySelector('.form-container').style.cssText = 'opacity: 0; visibility: hidden;';
    document.querySelector('.container').style.cssText =
        'background: url(../img/fondo.jpg) center no-repeat;';
});