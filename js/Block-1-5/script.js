/*window.addEventListener('resize', function(){*/
    let viewButton = document.querySelector('.brand__button');
        let viewWindow = document.querySelector('.brand__list');
        let buttonText = document.querySelector('.brand__button__description');
        let buttonDirection = document.querySelector('.brand__button__icon');
        let slider = document.querySelector('.slider-script');
        viewWindow.style.height     ="144px"; 
    if(window.innerWidth > 320){
        

        viewButton.addEventListener("click", function(){
                if (viewWindow.style.height =="144px"){
                viewWindow.style.height ="auto";
                buttonText.innerHTML='Скрыть';
                buttonDirection.style.transform=("rotate(180deg)");
            } else {
                viewWindow.style.height="144px";
                buttonText.innerHTML ='Показать все';
                buttonDirection.style.transform=("rotate(0deg)");
            }
        });
    }    else{
        document.write('<script class="script" src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></script>');
        viewButton.style.display = 'none';
    }
    console.log(3);