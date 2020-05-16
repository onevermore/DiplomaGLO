

import accordionOneTwo from './modules/accordionOneTwo';
import nextStepCalc from './modules/nextStepCalc';
import addBlocks from './modules/addBlocks';
import calc from './modules/calc';
import togglePopup from './modules/togglePopup';
import sendForm from './modules/sendForm';


//аккордеон для блока FAQ и для калькулятора заодно, делегированием
accordionOneTwo();
//кнопка "Следующий шаг" - делегированием
nextStepCalc();
//кнопка "Больше"
addBlocks();
//пока не готов калькулятор
calc();
// все всплывающие окна, их открытие/закрытие
togglePopup('.sentence', '.discount-btn', '.popup-discount');
togglePopup('.director', '.director-btn', '.popup-consultation');
togglePopup('.gauging', '.gauging-button', '.popup-check');
togglePopup('.container', '.call-btn', '.popup-call'); //тут две кнопки с классом .call-btn

sendForm();
