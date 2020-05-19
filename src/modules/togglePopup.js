const togglePopup = (blockName, btnClassName, popupToOpen) => {

    const block = document.querySelectorAll(blockName),
        popup = document.querySelector(popupToOpen);

    // передали в функцию (на какой блок вешать событие Клик, класс кнопок внутри блока, какой popup открыть)

    const showPopup = event => {
        let target = event.target;

        target = target.closest(btnClassName);


        //проверяю есть ли класс calc  на кнопке с классом last(кнопка в калькуляторе для открытия попап)
        if (target) {
            if (btnClassName === '.last' && !target.classList.contains('calc')) {
                target.classList.add('calc');
                const mytext= document.querySelector('.sendtext');
                if (mytext) {
                    mytext.textContent='';
                    console.log('llll');
                }

            }

            event.preventDefault();
            popup.style.opacity = 0;
            popup.style.display = 'block';

            const intervalId = setInterval(() => {
                popup.style.opacity = +popup.style.opacity + 0.05;
                if (+popup.style.opacity >= 1)
                    clearInterval(intervalId);
            }, 20);
        }

    };

    //цикл forEach т.к. с классом .call-btn две кнопки, обе перебираем тут
    // а у остальных всего одна в принципе, для них можно было бы без forEach

    block.forEach(elem => elem.addEventListener('click', event => {

        showPopup(event);
    }));

    //закрытие окна popup если кликнул на крестик или мимо

    const closePopup = (event) => {
        let target = event.target;
        const btnCalc = document.querySelector('.last');

        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
            //при закрытии попапа удаляем класс calc если он есть
            if (btnClassName === '.last' && btnCalc.classList.contains('calc')) {
                btnCalc.classList.remove('calc');

            }

        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
                //при закрытии попапа удаляем класс calc если он есть
                if (btnClassName === '.last' && btnCalc.classList.contains('calc')) {
                    btnCalc.classList.remove('calc');

                }
            }
        }

    };

    popup.addEventListener('click', closePopup);




};

export default togglePopup;