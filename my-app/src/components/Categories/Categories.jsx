import React from 'react';

const Categories = ({ value, onClickCategory }) => {
  const categoriesData = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesData.map((category, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(category.id)}
            className={value === category.id ? 'active' : ''}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;