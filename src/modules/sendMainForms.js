const sendMainForms = () => {

    //const mainForms = document.querySelectorAll('.main-form, .section-form .capture-form, .popup-consultation .capture-form');
    const mainForms = document.querySelectorAll('form');


    const loadMessage = 'Идёт отправка...',
        successMessage = 'Отправлено',
        errorMessage = 'Ошибка!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem; color:black;`;

    const btnCalculator = document.querySelector('.last');
    mainForms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);

            const body = {};

            //если форма для консультации, то в объект добавляем ещё вопрос
            if (form.classList.contains('consult-form')) {
                const question = document.querySelector('input[name=user_quest]');
                body.question = question.value;
            }



            if (btnCalculator.classList.contains('calc')) {
                const accordCalc = document.getElementById('accordion'),
                    switch1 = document.getElementById('myonoffswitch'),
                    switch2 = document.getElementById('myonoffswitch-two'),

                    diameter1 = document.querySelectorAll('select')[0],

                    ring1 = document.querySelectorAll('select')[1],
                    diameter2 = document.querySelectorAll('select')[2],

                    ring2 = document.querySelectorAll('select')[3],
                    totalSum = document.getElementById('calc-result'),
                    distance = accordCalc.querySelectorAll('input[type="text"]')[0]

                ;


                //значения из селектов в калькуляторе(остальные переменные через value в самом объекте)
                const d1val = diameter1.options[diameter1.selectedIndex].text,
                    r1val = ring1.options[ring1.selectedIndex].text,

                    d2val = diameter2.options[diameter2.selectedIndex].text,
                    r2val = ring2.options[ring2.selectedIndex].text;

                // добавляем в объект данные калькулятора
                body.camera = switch1.value;
                body.diameter1 = d1val;
                body.rings1 = r1val;
                body.diameter2 = d2val;
                body.rings2 = r2val;
                body.bottom = switch2.value;
                body.distance = distance.value;
                body.calcResult = totalSum.value;



            }
            //дальше


            formData.forEach((val, key) => {
                body[key] = val;
            });

            const resetForm = () => {
                [...form.elements].forEach(elem => {
                    if (elem.tagName.toLowerCase() === 'input')
                        elem.value = '';
                });

            };

            //после отправки окно попап закрывается через 10 секунд
            const closeAfterSend = () => {
                const myPopup = form.closest('.popup');
                myPopup.style.display = 'none';
            };

            const postData = body => fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)

            });

            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('error: status not 200');
                    }
                    statusMessage.textContent = successMessage;
                    resetForm();
                    setTimeout(closeAfterSend, 10000);
                })
                .catch(error => {
                    console.error(error);
                    statusMessage.style.cssText = `font-size: 2rem;color:red;font-weight:bold;`;
                    statusMessage.textContent = errorMessage;
                    resetForm();
                    setTimeout(closeAfterSend, 10000);
                });

        });
    });




};

export default sendMainForms;