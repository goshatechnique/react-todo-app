import React, { useState } from "react";
import PropTypes from "prop-types";

import Alert from "../components/Alert";

const Form = ({ onAddNote }) => {
  const [inputValue, setInputValue] = useState("");
  const [alertStatus, setAlertStatus] = useState(0);

  const handlerAdd = event => {
    event.preventDefault();
    if (inputValue === "") {
      setAlertStatus(1);
      return;
    }
    onAddNote(inputValue);
    setInputValue("");
  };

  const handlerAlert = () => {
    if (alertStatus === 0) {
      return null;
    }
    if (alertStatus === 1) {
      setTimeout(() => {
        setAlertStatus(0);
      }, 2000);
      return (
        <Alert
          hideAlert={hideAlert}
          theme="alert-orange"
          message="Надо что-то написать!"
        />
      );
    }
    if (alertStatus === 2) {
      return (
        <Alert
          hideAlert={hideAlert}
          theme="alert-red"
          message="Что-то сдохло"
        />
      );
    }
  };

  const hideAlert = () => {
    setAlertStatus(0);
  };

  return (
    <form onSubmit={handlerAdd} className="form-container">
      <input
        onChange={event => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
        className="form-input"
        type="text"
        placeholder="Введите задачу"
      ></input>
      <div onClick={handlerAdd} className="form-button">
        +
      </div>
      {handlerAlert()}
    </form>
  );
};

Form.propTypes = {
  onAddNote: PropTypes.func
};

export default Form;
