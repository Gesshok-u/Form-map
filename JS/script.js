//Функционал кастомных select
document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper){

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');


    //Клик по кнопке. Окрыть, закрыть
    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('box-block');
    });


    //Выбор елемента списка. Запомнить выбранное значение, закрыть дропдаун
    dropDownListItems.forEach(function (listItem){
        listItem.addEventListener('click', function (){
            dropDownBtn.innerText = this.innerText;
            dropDownList.classList.remove('box-block');
        })
    });


    //Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function(e){
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('box-block');
        }
    });

});
