const sendMainForms = () => {

    const mainForms = document.querySelectorAll('.main-form, .section-form .capture-form');

    const loadMessage = 'Идёт отправка...',
        successMessage = 'Отправлено',
        errorMessage = 'Ошибка!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem; color:black;`;


    mainForms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);

            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            const resetForm = () => {
                [...form.elements].forEach(elem => {
                    if (elem.tagName.toLowerCase() === 'input')
                        elem.value = '';
                });
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
                })
                .catch(error => {
                    console.error(error);
                    statusMessage.style.cssText = `font-size: 2rem;color:red;font-weight:bold;`;
                    statusMessage.textContent = errorMessage;
                });

        });
    });




};

export default sendMainForms;
