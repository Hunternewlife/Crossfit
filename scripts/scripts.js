let box1 = document.getElementById('box1');
let btn1 = document.getElementById('btn1');


btn1.addEventListener('click',()=>{
    box1.classList.toggle('boxdepleglable');
})


let box2 = document.getElementById('box2');
let btn2 = document.getElementById('btn2');


btn2.addEventListener('click',()=>{
    box2.classList.toggle('boxdepleglable');
})



function iniciarMapa() {
    let locacion = { lat: 5.025150, lng: -73.997597 };
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: locacion,
    });
    let marcador = new google.maps.Marker({
      position: locacion,
      map: map,
    });
  }