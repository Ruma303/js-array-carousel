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
	indexImg[visibleIndex].classList.remove('visible');
	visibleIndex++;
    if (visibleIndex === (arrImages.length -1)){
        visibleIndex = 0;
    }  
	indexImg[visibleIndex].classList.add('visible');
});

eleBtnUp.addEventListener('click', function () {
	indexImg[visibleIndex].classList.remove('visible');
	visibleIndex--;
    if (visibleIndex < 0){
        visibleIndex = (arrImages.length -1);
    } 
	indexImg[visibleIndex].classList.add('visible');

});
