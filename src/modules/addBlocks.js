const addBlocks = () => {

    const btnAdd = document.querySelector('.add-sentence-btn'),
        sentence = document.querySelector('.sentence'),
        blocksHidden = sentence.querySelectorAll('.hidden, .visible-sm-block');

    //если кликнули по кнопке "Больше"
    btnAdd.addEventListener('click', () => {
        if (blocksHidden) {
            blocksHidden.forEach((item, index) => {
                if (blocksHidden[index].classList.contains('hidden')) {
                    blocksHidden[index].classList.remove('hidden');
                } else {
                    blocksHidden[index].classList.remove('visible-sm-block');
                }
            });
            btnAdd.style.display = 'none';
        }
    });
};

export default addBlocks;