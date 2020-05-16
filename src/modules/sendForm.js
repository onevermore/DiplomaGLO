const sendForm = () => {
    const popupAll = document.querySelector('.popup-consultation'),
        formContainer = popupAll.querySelector('.popup-content'),
        form = formContainer.querySelector('form'),
        question = document.querySelector('input[name=user_quest]');





    form.addEventListener('submit', event => {

        event.preventDefault();

        //объект, который будем отправлять
        const body = {
            question: question.value
        };

        const formData = new FormData(form);

        formData.forEach((val, key) => {
            body[key] = val;
        });


        //функция запроса на сервер
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
                    throw new Error('status not 200');
                }
            })
            .catch(error => {
                console.error(error);
            });


    });

};

export default sendForm;