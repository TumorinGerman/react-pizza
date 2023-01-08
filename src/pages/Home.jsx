import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/Sceleton";
import { useSelector, useDispatch } from 'react-redux';
import {setActiveCategory} from "../redux/slices/filterSlice";

const Home = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLoading, setLoading] = React.useState(true);

    const activeCategory = useSelector((state) => state.filter.activeCategory);
    const selectedTypeOfSort = useSelector((state) => state.filter.selectedTypeOfSort);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const category = activeCategory > 0 ? `category=${activeCategory}` : '';
        const sortBy = selectedTypeOfSort.type.replace('-', '');
        const order = selectedTypeOfSort.type.includes('-') ? 'asc' : 'desc';
        setLoading(false);
        fetch(
            `https://63b68ed61907f863aaf9d6ee.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
            )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setPizzas(data);
                setLoading(false);
                window.scrollTo(0, 0);
            });
    }, [activeCategory, selectedTypeOfSort]);

    const onChangeCategory = (id) => {
        dispatch(setActiveCategory(id));
    }

    return (
        <>
            <div className="content__top">
                <Categories activeCategory={activeCategory} onClickCategory={onChangeCategory}/>
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((item, index) => <Sceleton key={index} />)
                    : pizzas.map((obj) => {
                        return (
                            <PizzaBlock
                            key={obj.id}
                            name={obj.title}
                            price={obj.price}
                            image={obj.imageUrl}
                            sizes={obj.sizes}
                            types={obj.types}
                            />
                        );
                    })}
            </div>
        </>
    )
}
export default Home;