import React from "react";

function Categories() {
  const pizzaCategories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const [activeCategory, setActiveCategory] = React.useState(0);

  const selectCategory = (index) => {
    setActiveCategory(index);
  }

    return (
      <div className="categories">
        <ul>
          {pizzaCategories.map((category, index) => {
            return (
              <li onClick={() => selectCategory(index)} className={activeCategory === index ? 'active' : null} key={index}>{category}</li>
            )
          })}
        </ul>
      </div>
    );
  }
  export default Categories;