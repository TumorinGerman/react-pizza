import React from "react";
import axios from "axios";
import { useParams } from "react-router";

const OnePizza = () => {
  const [currentPizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function feachCurrenPizza() {
      try {
        const { data } = await axios.get(
          "https://63b68ed61907f863aaf9d6ee.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("К сожалению, такая пицца не найдена");
      }
    }
    feachCurrenPizza();
  }, []);

  if (!currentPizza) {
    return "Загрузка...";
  }

  return (
    <div className="container__one">
      <h2>{currentPizza.title}</h2>
      <div className="description">
        <div className="description__img">
          <img src={currentPizza.imageUrl} alt="One pizza"></img>
        </div>
        <div className="description__text">
          <h3>цена {currentPizza.price} грн.</h3>
          <h3>Описание:</h3>
          <q>{currentPizza.description}</q>
        </div>
      </div>
    </div>
  );
};

export default OnePizza;
