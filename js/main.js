//change description text (laptop res)
function changeText(id) {
    if ((id === 'veg') || (id === 'veg-down')) {

        document.getElementById('desc-head').style.fontSize = '24px';
        document.getElementById('desc-head').innerHTML = "Вегетарианство";
        document.getElementById('desc-text').innerHTML = "Вегетарианство – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";
    } else if ((id === 'pal') || (id === 'pal-down')) {
        document.getElementById('desc-head').style.fontSize = '24px';
        document.getElementById('desc-head').innerHTML = "Палео-диета";
        document.getElementById('desc-text').innerHTML = "Палео-диета – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";

    } else if ((id === 'aip') || (id === 'aip-down')) {
        document.getElementById('desc-head').style.fontSize = '24px';
        document.getElementById('desc-head').innerHTML = "Диета аип";
        document.getElementById('desc-text').innerHTML = "Диета аип – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";

    } else if ((id === 'table') || (id === 'table-down')) {
        document.getElementById('desc-head').style.fontSize = '23px';
        document.getElementById('desc-head').innerHTML = "Стол №5 по певзнеру";
        document.getElementById('desc-text').innerHTML = "Стол №5 по певзнеру – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";

    }
}

//scroll to order-page

$(".menu-page__description-button").click(function() {
    $('html,body').animate({
            scrollTop: $(".order-page").offset().top},
        'slow');
});

$(".orderButton").click(function() {
    $('html,body').animate({
            scrollTop: $(".order-page").offset().top},
        'slow');
});

function changeDaysValue(id){
    if (id === '1d'){
        document.getElementById('days').value = '1 день';
        console.log(document.getElementById('days').value)
    }
    if (id === '5d'){
        document.getElementById('days').value = '5 дней';
        console.log(document.getElementById('days').value)
    }
    if (id === '7d'){
        document.getElementById('days').value = '7 дней';
        console.log(document.getElementById('days').value)
    }
    if (id === '14d'){
        document.getElementById('days').value = '14 дней';
        console.log(document.getElementById('days').value)
    }
    if (id === '30d'){
        document.getElementById('days').value = '30 дней';
        console.log(document.getElementById('days').value)
    }


}

//test func
function changeValue(id) {

    if ((id === 'paleo') || (id === 'paleod'))
    {
        document.getElementById('diet').value = 'Палео-диета';
        console.log(document.getElementById('diet').value)
    }
    if ((id === 'd-aip') || (id === 'd-aipd')){
        document.getElementById('diet').value = 'Диета аип';
        console.log(document.getElementById('diet').value)
    }
    if ((id === 'table5') || (id === 'table5d')){
        document.getElementById('diet').value = 'Стол №5 по певзнеру';
        console.log(document.getElementById('diet').value)
    }
    if ((id === 'vegan') || (id === 'vegand')){
        document.getElementById('diet').value = 'Вегетарианство';
        console.log(document.getElementById('diet').value)
    }

}

function dropdownFunc() {
    let x = document.getElementById("dropdown-menu");
    let arrow = document.getElementById("arrow");
    if (x.style.display === 'none') {
        arrow.style.transform = 'rotate(-135deg)';
        x.style.display = 'flex';
    } else {
        x.style.display = 'none'
        arrow.style.transform = 'rotate(45deg)'
    }
}

function orderDropdownFunc() {
    let x = document.getElementById("order-dropdown-menu");
    let arrow = document.getElementById("order-arrow");
    if (x.style.display === 'none') {
        arrow.style.transform = 'rotate(-135deg)';
        x.style.display = 'flex';
    } else {
        x.style.display = 'none'
        arrow.style.transform = 'rotate(45deg)'
    }
}

//form data
function getData() {
    document.addEventListener("submit",function (e){
        e.preventDefault();
    })
    let formData = Array.from(document.querySelector('#form input')).reduce((acc,input) => ({
        ...acc,[input.id]: input.value}), {});
    console.log(formData);
}