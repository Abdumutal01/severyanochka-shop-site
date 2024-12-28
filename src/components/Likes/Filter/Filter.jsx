import React, { useState } from "react";
import "./Filter.scss";
const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState({ min: 1, max: 100 });
  const [inStock, setInStock] = useState(false);

  return (
      <div className="filter">
        <h2 className="filter__title">Фильтр</h2>

        <div className="filter__section">
          <div className="filter__header">
            <span className="filter__label">Цена</span>
            <button className="filter__clear">Очистить</button>
          </div>
          <div className="filter__price-inputs">
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
              className="filter__input"
              placeholder="1"
            />
            <span className="filter__separator">—</span>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
              className="filter__input"
              placeholder="100"
            />
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: e.target.value })
            }
            className="filter__range"
          />
        </div>

        <div className="filter__section">
          <div className="filter__checkbox-group">
            <div className="filter__checkbox-item">
              <input type="checkbox" id="milk" className="filter__checkbox" />
              <label htmlFor="milk" className="filter__checkbox-label">
                Молоко
              </label>
            </div>
            <div className="filter__checkbox-item">
              <input type="checkbox" id="cream" className="filter__checkbox" />
              <label htmlFor="cream" className="filter__checkbox-label">
                Сливки
              </label>
            </div>
            <div className="filter__checkbox-item">
              <input type="checkbox" id="eggs" className="filter__checkbox" />
              <label htmlFor="eggs" className="filter__checkbox-label">
                Яйцо
              </label>
            </div>
          </div>
        </div>

        <div className="filter__section">
          <label className="filter__toggle">
            <input
              type="checkbox"
              checked={inStock}
              onChange={() => setInStock(!inStock)}
              className="filter__toggle-input"
            />
            <div className="filter__toggle-slider"></div>
            <span className="filter__toggle-label">В наличии</span>
          </label>
        </div>

        <button className="filter__apply">Применить</button>
      </div>
  );
};

export default FilterSidebar;
