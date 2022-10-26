const arrImages = [ '../consegna/img/01.jpg','../consegna/img/02.jpg','../consegna/img/03.jpg','../consegna/img/04.jpg', '../consegna/img/05.jpg',];

const eleSlider = document.querySelector('.slider');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');

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

eleBtnDown.addEventListener('click', function () {
	indexImg[activeIndex].classList.remove('active');

	activeIndex++;
	indexImg[activeIndex].classList.add('active');

	eleBtnUp.classList.remove('invisible');
	if (activeIndex === indexImg.length - 1) {
		eleBtnDown.classList.add('invisible');
	}
});

eleBtnUp.addEventListener('click', function () {
	indexImg[activeIndex].classList.remove('active');

	activeIndex--;
	indexImg[activeIndex].classList.add('active');

	eleBtnDown.classList.remove('invisible');
	if (!activeIndex) {
		eleBtnUp.classList.add('invisible');
	}
});