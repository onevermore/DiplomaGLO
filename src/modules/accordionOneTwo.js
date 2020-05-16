const accordionOneTwo = () => {

    //функция решает какую панель показывать, а другие скрывает
    const toggleTabContent = (index, panelsLength, panels) => {
        for (let i = 0; i < panelsLength; i++) {
            if (index === i) {
                panels[i].querySelector('.collapse').classList.add('in');
            } else {
                panels[i].querySelector('.collapse').classList.remove('in');
            }
        }
    };


    window.addEventListener('click', event => {

        let target = event.target;
        target = target.closest('.panel-heading');
        //panel-heading - класс, который есть только в двух наших аккордеонах - у калькулятора и FAQ

        //если в месте куда мы кликаем есть panel-heading
        if (target) {
            event.preventDefault();
            const parent = target.closest('.panel-group'),
                panelsHeading = parent.querySelectorAll('.panel-heading'),
                panels = parent.querySelectorAll('.panel'),
                panelsLength = panelsHeading.length;

            //проверяем на какой именно Таб кликнули
            panelsHeading.forEach((item, index) => {
                if (item === target) {
                    toggleTabContent(index, panelsLength, panels); //передаём (индекс таба, кол-во табов, список табов)

                }
            });
        }
    });

};

export default accordionOneTwo;
