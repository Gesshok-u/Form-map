//googlemap
let map;
function initMap() {
  var element = document.getElementById('map');
  var options = {
    center: { lat: 43.45241878375919, lng: -80.51306001259721 },
    zoom: 16,
    mapTd: '45c14b92a756fe14'
  };

  var googleMap = new google.maps.Map(element, options);

  //marker
  var marker = new google.maps.Marker({
    position: { lat: 43.45241878375919, lng: -80.51306001259721 },
    map: googleMap,
    icon: "./img/icon-map.png"
  });

  //infoWindow content
  var content = '<div class="infoWindow-container">' +
  '<div class="info__content">' +
      '<h2> Voodoo </h2>' +
      '<p> 137 Glasgow St., Unit 115 Kitchener, ON N2G 4X8 Ukraine </p></div>' + 
  '<div class="info__contacts">' +
      '<div class="contacts__item"><i class="phone"><img src="./img/phone-infoWindow.png"></i> <p> 1-800-480-9597 </p></div>' +
      '<div class="contacts__item"><i class="mail"><img src="./img/mail-infoWindow.png"></i> info@voodoo.com </div>' +
  '</div>' +
'</div>';

  var infoWindow = new google.maps.InfoWindow({
    content: content,
    maxWidth: 244
  });

  
  marker.addListener('click', function(){
    infoWindow.open(googleMap, marker);
  })
  
  googleMap.addListener('click', function(){
    infoWindow.close(googleMap, marker);
  })
}

window.initMap = initMap;


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
