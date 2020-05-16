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
            d2 = 1,
            q2 = 1,
            one = 10000,
            dnishe = 0;
        const diametrValue = +diametr.options[diametr.selectedIndex].value,
            ringsValue = +ringQuantity.options[ringQuantity.selectedIndex].value,
            switch1 = +switchFirst.value;


        if (switchFirst.checked) {
            hideBlock.forEach(item => {
                item.style.display = 'none';
                d2 = 1;
                q2 = 1;
            });
            if (switchSecond.checked) {
                dnishe = 1000;
            }
        } else {
            hideBlock.forEach(item => {
                item.style.display = 'inline-block';
            });

            one = 15000;
            d2 =  +diametrTwo.options[diametrTwo.selectedIndex].value;
            q2 = +ringQuantityTwo.options[ringQuantityTwo.selectedIndex].value;
            if (switchSecond.checked) {
                dnishe = 2000;
            }
        }



        if (diametrValue && ringsValue) {

            total = ((one) * (diametrValue) * (ringsValue) * d2 * q2 + dnishe) ;
        }



        totalValue.value = +total;




    };

    countSum();

    accordionCalc.addEventListener('change', event => {
        const target = event.target;

        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });


};

export default calc;