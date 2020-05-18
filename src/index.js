
import accordionOneTwo from './modules/accordionOneTwo';
import nextStepCalc from './modules/nextStepCalc';
import addBlocks from './modules/addBlocks';
import calc from './modules/calc';
import togglePopup from './modules/togglePopup';
import formValid from './modules/formValid';
import sendMainForms from './modules/sendMainForms';
import calculatorDataSend from './modules/calculatorDataSend';


//аккордеон для блока FAQ и для калькулятора заодно, делегированием
accordionOneTwo();
//кнопка "Следующий шаг" - делегированием
nextStepCalc();
//кнопка "Больше"
addBlocks();
//калькулятор, только в объект сразу данные не собрала
calc();
// все всплывающие окна, их открытие/закрытие
//указываем: в каком блоке искать кнопку, класс кнопки, какое popup окно открыть при нажатии кнопки
togglePopup('.sentence', '.discount-btn', '.popup-discount');
togglePopup('.director', '.director-btn', '.popup-consultation');
togglePopup('.gauging', '.gauging-button', '.popup-check');
togglePopup('header', '.call-btn', '.popup-call'); //тут две кнопки с классом .call-btn
togglePopup('.constructor', '.last', '.popup-discount'); //кнопка в калькуляторе



formValid();
// отправка двух форм сверху и формы "Получить консультацию"
sendMainForms();
//отправка данных калькулятора
calculatorDataSend();
