const arrImages = [ '../consegna/img/01.jpg','../consegna/img/02.jpg','../consegna/img/03.jpg','../consegna/img/04.jpg', '../consegna/img/05.jpg',];

const eleSlider = document.querySelector('.slider');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
    eleImg.alt = 'Immagine';
	eleImg.classList.add('slider-img');

	if (!i) {
		eleImg.classList.add('active');
	}
	eleSlider.append(eleImg);
}

const indexImg = document.querySelectorAll('.slider-img'); 
let activeIndex = 0;

eleBtnRight.addEventListener('click', function () {
	indexImg[activeIndex].classList.remove('active');

	activeIndex++;
	indexImg[activeIndex].classList.add('active');

	eleBtnLeft.classList.remove('invisible');
	if (activeIndex === indexImg.length - 1) {
		eleBtnRight.classList.add('invisible');
	}
});

eleBtnLeft.addEventListener('click', function () {
	indexImg[activeIndex].classList.remove('active');

	activeIndex--;
	indexImg[activeIndex].classList.add('active');

	eleBtnRight.classList.remove('invisible');
	if (!activeIndex) {
		eleBtnLeft.classList.add('invisible');
	}
});