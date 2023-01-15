import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/Sceleton";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzasSlice";

const Home = () => {
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const selectedTypeOfSort = useSelector(
    (state) => state.filter.selectedTypeOfSort
  );
  const { products, fetchStatus } = useSelector((state) => state.pizzas);
  const dispatch = useDispatch();

  const getPizzas = async () => {
    const category = activeCategory > 0 ? `category=${activeCategory}` : "";
    const sortBy = selectedTypeOfSort.type.replace("-", "");
    const order = selectedTypeOfSort.type.includes("-") ? "asc" : "desc";

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
      })
    );
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [activeCategory, selectedTypeOfSort]);

  const onChangeCategory = React.useCallback(
    (id) => dispatch(setActiveCategory(id)),
    []
  );

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onClickCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {fetchStatus === "error" ? (
        <div className="content__error">Ошибка загрузки товара.</div>
      ) : (
        <div className="content__items">
          {fetchStatus === "loading"
            ? [...new Array(6)].map((item, index) => <Sceleton key={index} />)
            : products.map((obj) => {
                return (
                  <PizzaBlock
                    key={obj.id}
                    id={obj.id}
                    name={obj.title}
                    price={obj.price}
                    image={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}
                  />
                );
              })}
        </div>
      )}
    </>
  );
};
export default Home;
