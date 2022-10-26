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
		eleImg.classList.add('visible');
	}
	eleSlider.append(eleImg);
}

let indexImg = document.querySelectorAll('.slider-img'); 
let visibleIndex = 0;

eleBtnDown.addEventListener('click', function () {
    //se l'index arriva al numero massimo dell'array, riportalo al min
    if (indexImg[visibleIndex] == arrImages.length -1){
        indexImg[visibleIndex] = 0;
    } // se l'index arriva al numero minimo dell'array, riportalo al max
    else if (indexImg[visibleIndex] < 0) {
        indexImg[visibleIndex] = arrImages.length -1;
    }
    indexImg[visibleIndex].classList.remove('visible');
	visibleIndex++;
	indexImg[visibleIndex].classList.add('visible');
});

eleBtnUp.addEventListener('click', function () {
    //se l'index arriva al numero massimo dell'array, riportalo al min
    if (indexImg[visibleIndex] == arrImages.length -1){
        indexImg[visibleIndex] = 0;
    } // se l'index arriva al numero minimo dell'array, riportalo al max
    else if (indexImg[visibleIndex] < 0) {
        indexImg[visibleIndex] = arrImages.length -1;
    }
    indexImg[visibleIndex].classList.remove('visible');
	visibleIndex--;
	indexImg[visibleIndex].classList.add('visible');

});