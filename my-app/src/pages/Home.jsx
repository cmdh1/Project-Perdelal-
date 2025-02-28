import React, { useEffect, useState, useContext } from 'react';
import Blockpizza from '../components/Block-pizza/Block_pizza';
import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import { Skeleton } from '../components/Block-pizza/Skeleton';
import Pagination from '../components/Pagination/index';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slice/filterslice';
import axios from 'axios';


const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector(state => state.filter.categoryId);
  const sort = useSelector(state => state.filter.sort);
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const OnchageCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setLoading(true);

    const categoryParam = categoryId > 0 ? `&category=${categoryId}` : ''; 

    axios.get(`https://67b6510607ba6e5908405d5e.mockapi.io/Items?page=${currentPage}&limit=8&sortBy=${sort.sortProperty}${categoryParam}`) 
  .then(response =>{
    setItems(response.data);
    setLoading(false);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    setLoading(false);
  });
    window.scrollTo(0,0);
  }, [categoryId, sort.sortProperty, currentPage]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategory={OnchageCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Пиццы</h2>
        <div className="content__items">
          {loading ? (
            [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          ) : (
            items
              .filter((obj) => {
                if (!obj.title || obj.title === null || obj.title === undefined) {
                  return false;
                }
                if (searchValue === '') {
                  return true;
                }
                return obj.title.toLowerCase().includes(searchValue.toLowerCase());
              })
              .map((obj) => (
                <Blockpizza
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                image={obj.imageUrl}
                sizes={obj.sizes}
                types={obj.types}
                />
              ))
          )}
        </div>
        <Pagination onChangePage={onChangePage} pageCount={3} />
      </div>
    </>
  );
};

export default Home;