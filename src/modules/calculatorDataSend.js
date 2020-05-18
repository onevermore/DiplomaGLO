
const calculatorDataSend = () => {

    //тут повторяются переменные из calc, не знаю как вернуть из calc объект(
    const accordCalc = document.getElementById('accordion'),
        switch1 = document.getElementById('myonoffswitch'),
        switch2 = document.getElementById('myonoffswitch-two'),

        diameter1 = document.querySelectorAll('select')[0],

        ring1 = document.querySelectorAll('select')[1],
        diameter2 = document.querySelectorAll('select')[2],

        ring2 = document.querySelectorAll('select')[3],
        totalSum = document.getElementById('calc-result'),
        distance = accordCalc.querySelectorAll('input[type="text"]')[0],

        myCalcForm = document.querySelector('.popup-discount form');


    //клик по кнопке popup, отправка данных в виде объекта в формате JSON

    const sendCalc = (event) => {


        console.log('event: ', event);
        const target = event.target;
        console.log('target: ', target);

        console.log(target.classList.contains('popup-close'));

        if (!target.matches('.circle')) {
            console.log(target.matches('button'));
            event.preventDefault();


            //значения из селектов в калькуляторе(остальные переменные через value в самом объекте)
            const d1val = diameter1.options[diameter1.selectedIndex].text,
                r1val = ring1.options[ring1.selectedIndex].text,

                d2val = diameter2.options[diameter2.selectedIndex].text,
                r2val = ring2.options[ring2.selectedIndex].text;

            //объект, который будем отправлять
            const calcData = {

                camera: switch1.value,
                diameter1: d1val,
                rings1: r1val,
                diameter2: d2val,
                rings2: r2val,
                bottom: switch2.value,
                distance: distance.value,
                calcResult: totalSum.value
            };


            const formData = new FormData(myCalcForm);
            // в объект добавляем данные из формы
            formData.forEach((val, key) => {
                calcData[key] = val;
            });


            //функция запроса на сервер
            const postData = body => fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)

            });

            postData(calcData)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status not 200');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }

    };



    myCalcForm.addEventListener('submit', sendCalc);


};

export default calculatorDataSend;
