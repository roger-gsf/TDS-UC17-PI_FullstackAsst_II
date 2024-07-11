function changeImage() {
    let image = document.getElementById('my-car');

    if (image.className == 'red') {
        image.src = '../img/blueCar.png';
        image.className = 'blue';

    } else {
        image.src = '../img/redCar.png';
        image.className = 'red';
    }
}