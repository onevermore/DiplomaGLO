
const nextStepCalc = () => {

    const accordionOne = document.getElementById('accordion'),
        panelBtn = accordionOne.querySelectorAll('.button'),
        panells = accordionOne.querySelectorAll('.panel');






    const toggleNextTabContent = index => {
        for (let i = 0; i < panelBtn.length - 1; i++) {  //на 1 меньше, ибо в последнем блоке нет 'следующий шаг'
            if (index === i) {
                panells[i].querySelector('.collapse').classList.remove('in');
                panells[i + 1].querySelector('.collapse').classList.add('in');
            }
        }
    };

    accordionOne.addEventListener('click', event => {
        let target = event.target;
        target = target.closest('.button');

//если по кнопке кликнули, то проверяем по какой
        if (target) {
            event.preventDefault();
            panelBtn.forEach((item, index) => {

                if (item === target) {
                    toggleNextTabContent(index);
                }

            });

        }


    });


};

export default nextStepCalc;