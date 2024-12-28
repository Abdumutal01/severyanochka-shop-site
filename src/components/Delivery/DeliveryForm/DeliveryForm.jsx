import React, { useState } from "react";
import "./DeliveryForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { shoppingAction } from "../../../store/shop-slice";

const DeliveryForm = () => {
  const dates = useSelector((state) => state.shop.dates || []);
  console.log(dates);
  
  const [dateObj, setDateObj] = useState({ date: "", time: "" });
  
  const [selectedTime, setSelectedTime] = useState("14:00 - 18:00");
  const [changeEmail, setChangeEmail] = useState(false);
  



  const timeSlots = [
    "8:00 - 14:00",
    "14:00 - 18:00",
    "18:00 - 20:00",
    "20:00 - 22:00",
  ];

  // oldProducts = []

  const day = (clock) => {
    setDateObj({ ...dateObj, time: clock });
  };

  const handlerDay = (e) => {
    console.log(`${e.target.value} day`);
    setDateObj((test) => ({
      ...test,
      date: e.target.value,
    }));
  };

  const changePhone = () => {
    setChangeEmail(!changeEmail);
  };

  const dispatch = useDispatch();

 

  const dateTests = () => {
    dispatch(shoppingAction.addDate({ ...dateObj }));
  };



  console.log(dateObj);


  return (
    <div className="delivery-form">
      <h2 className="title">Куда</h2>
      <div className="delivery-form-box">
        <div className="input-group">
          <div className="input-field">
            <label className="input-field__label">Населенный пункт</label>
            <select className="input-field__input input-field__input--select">
              <option>Усть-Ижма</option>
              <option>Усть-Ижма</option>
              <option>Усть-Ижма</option>
              <option>Усть-Ижма</option>
              <option>Усть-Ижма</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <div className="input-field input-field--street">
            <label className="input-field__label">Улица</label>
            <input
              type="text"
              className="input-field__input"
              defaultValue="Пушкина"
            />
          </div>
          <div className="input-field input-field--number">
            <label className="input-field__label">Дом</label>
            <input
              type="text"
              className="input-field__input"
              defaultValue="11"
            />
          </div>
          <div className="input-field input-field--number">
            <label className="input-field__label">Квартира</label>
            <input
              type="text"
              className="input-field__input"
              defaultValue="12"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="title">Когда</h2>
        <div className="input-group">
          <div className="input-field">
            <label className="input-field__label">Дата</label>
            <select
              onChange={handlerDay}
              className="input-field__input input-field__input--select"
            >
              {dates.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="input-field">
            <label className="input-field__label">Время</label>
            <div className="time-slots">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  className={`time-slot ${
                    time === selectedTime ? "time-slot--active" : ""
                  }`}
                  onClick={(e) => {
                    setSelectedTime(time);
                    day(e.target.textContent);
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="title">Вход</h2>
        <div className="phone-input">
          <div className="phone-input__field">
            {changeEmail ? (
              <input
                type="email"
                className="input-field__input"
                placeholder="write your email"
              />
            ) : (
              <input
                type="tel"
                className="input-field__input"
                placeholder="+7912888****"
              />
            )}
          </div>
          <button onClick={dateTests} className="phone-input__button">Получить код</button>
          <button onClick={changePhone} className="phone-input-btn2">
            {changeEmail ? "  Войти по телефон" : "  Войти по почте"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
