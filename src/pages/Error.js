import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page-div">
      <h1>Страница не найдена!</h1>
      Ошибка! Страница которую вы пытаетесь открыть не найдена или недоступна.
      Возможно введён некорректный адрес, или для доступа необходима
      авторизация.
      <br />
      <Link className="dom" to="/home">
        Вернуться к менеджеру задач
      </Link>
    </div>
  );
};

export default Error;
