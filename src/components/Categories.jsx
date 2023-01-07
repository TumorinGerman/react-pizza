import React from "react";

function Categories({activeCategory, onClickCategory}) {
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
      <div className="categories">
        <ul>
          {pizzaCategories.map((category, index) => {
            return (
              <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : null} key={index}>{category}</li>
            )
          })}
        </ul>
      </div>
    );
  }
  export default Categories;