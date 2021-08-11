
//change description text (laptop res)
function changeText(id) {
    if (id === 'veg') {
        document.getElementById('desc-head').style.fontSize = '24px';
        document.getElementById('desc-head').innerHTML = "Вегетарианство";
        document.getElementById('desc-text').innerHTML = "Вегетарианство – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";
    } else if (id === 'pal') {
        document.getElementById('desc-head').style.fontSize = '24px';
        document.getElementById('desc-head').innerHTML = "Палео-диета";
        document.getElementById('desc-text').innerHTML = "Палео-диета – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";

    } else if (id === 'aip') {
        document.getElementById('desc-head').style.fontSize = '24px';
        document.getElementById('desc-head').innerHTML = "Диета аип";
        document.getElementById('desc-text').innerHTML = "Диета аип – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";

    } else if (id === 'table') {
        document.getElementById('desc-head').style.fontSize = '23px';
        document.getElementById('desc-head').innerHTML = "Стол №5 по певзнеру";
        document.getElementById('desc-text').innerHTML = "Стол №5 по певзнеру – интерпретация рациона питания наших предков, живших более 10 тыс. лет назад. Результат для современных последователей – подтянутая фигура и меньше проблем со здоровьем, просто соблюдая палео-меню на неделю.";

    }
}

//change description text (mobile res)


//test func
function checkValue(val) {
    console.log(val);
    document.getElementById('Paleo').style.background = '#b24d97';
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
