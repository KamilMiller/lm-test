const DATA_REQUEST_URL = 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users';

// Получение данных с сервера
export const getData = () => fetch(DATA_REQUEST_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Не удалось загрузить данные с сервера :( Код ошибки: ${response.status_code}`);
    })
    .then((json) => json)
    .then((data) => data);
