const calc = () => {



    const accordionCalc = document.getElementById('accordion'),
        switchFirst = document.getElementById('myonoffswitch'),
        switchSecond = document.getElementById('myonoffswitch-two'),
        diametr = document.querySelectorAll('select')[0],
        ringQuantity = document.querySelectorAll('select')[1],
        diametrTwo = document.querySelectorAll('select')[2],
        ringQuantityTwo = document.querySelectorAll('select')[3],
        totalValue = document.getElementById('calc-result'),
        hideBlock = document.querySelectorAll('.add');



    const countSum = () => {
        let total = 0,
            d2 = 0,
            r2 = 0,
            price = 10000,
            dnishe = 0;
        const diametrValue = +diametr.options[diametr.selectedIndex].value,
            ringsValue = +ringQuantity.options[ringQuantity.selectedIndex].value;

        if (switchFirst.checked) {
            //если однокамерный
            hideBlock.forEach(item => {
                item.style.display = 'none';

            });
            if (switchSecond.checked) {
                dnishe = 1000;
            }


        } else {
            //если 2 камеры, то показываем блок с инпутами
            hideBlock.forEach(item => {
                item.style.display = 'inline-block';
            });

            price = 15000;
            d2 = +diametrTwo.options[diametrTwo.selectedIndex].value;
            r2 = +ringQuantityTwo.options[ringQuantityTwo.selectedIndex].value;
            if (switchSecond.checked) {
                dnishe = 2000;
            }
        }


        total = price + (price * diametrValue) + (price * ringsValue) + (price * d2) + (price * r2) + dnishe;

        totalValue.value = total;


    };

    countSum();

    accordionCalc.addEventListener('change', event => {
        const target = event.target;
        //если данные меняются, то пересчитывать
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }


    });



};

export default calc;
