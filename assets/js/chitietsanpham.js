var listImage = document.querySelectorAll('.list-item-content-box-img-list img');
var nextBtn = document.querySelector('.btn-next-product-deitails');
var prevBtn = document.querySelector('.btn-prev-product-deitails');
var imgFeature = document.querySelector('.img_product_deitails');

var currentIndex = 0; 

function updateImageByIndex(index) {
    currentIndex = index;
    imgFeature.src = listImage[index].getAttribute('src');
}

listImage.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex(index);
    });
});

prevBtn.addEventListener('click',()=> {
   if(currentIndex == 0) {
    currentIndex = listImage.length -1 ;
   } else {
    currentIndex--;
    updateImageByIndex(currentIndex);
   }
});

nextBtn.addEventListener('click',()=> {
    if(currentIndex ==listImage.length-1) {
        currentIndex = 0 ;
       } else {
        currentIndex++;
        updateImageByIndex(currentIndex);
       }
});

setInterval(() => {
    currentIndex++;
    if (currentIndex >= listImage.length) {
        currentIndex = 0;
    }
    updateImageByIndex(currentIndex);
}, 3000);