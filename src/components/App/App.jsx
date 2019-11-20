import React, { useState } from 'react';
import useAsyncHook from '../../hooks/useAsyncHook';
import Category from '../Category/Category';
import './App.css';

export const App = () => {
  const [categoryCount, setCategoryCount] = useState("5");
  const [cluesCount, setCluesCount] = useState("5");
  const [offset, setOffset] = useState(0);
  const url = `http://jservice.io/api/categories?count=${categoryCount}&offset=${offset}`
  const [result, loading] = useAsyncHook({url});
  return (
    <div className="App">
        <h1>MediaVine Jeopardy</h1>
        <div className="filter-field">
          <label>Categories:&nbsp;<input placeholder="Number of Categories" type="text" onChange={e => setCategoryCount(e.target.value === "" ? "5" : e.target.value)} /></label>
        </div>
        <div className="filter-field">
          <label>Clues:&nbsp;<input placeholder="Number of Clues" type="text" onChange={e => setCluesCount(e.target.value === "" ? "5" : e.target.value)} /></label>
        </div>
        <button onClick={() => 
            window.confirm("Are you sure you wish to start over with new categories and clues?") &&
            setOffset(offset + 5)
            }>RESET
        </button>
      <div className="category">
      {loading === "null" ? (
        <h1>Found No Categories</h1>
      ) : (
        result.map((category, i) => {
          return (
            <div key={i} className="category-column">
              <div className="category-header"><h2>{category.title}</h2></div>
              <Category category={category} cluesCount={cluesCount} />
            </div>) 
        })
      )}
      </div>
    </div>
  );
}

export default App;