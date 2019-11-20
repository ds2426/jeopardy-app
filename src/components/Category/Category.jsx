import React from "react";
import Clue from "../Clue/Clue.jsx";
import useAsyncHook from '../../hooks/useAsyncHook';
import "./Category.css";

export const Category = (props) => {
  const id = props.category.id;
  const url = `http://jservice.io/api/clues?category=${id}`
  const [result, loading] = useAsyncHook({url});
  const dailyDouble = result[(Math.floor(Math.random()*result.length))];
  return (
    <div>
    {loading === "null" ? (
      <h1>Found No Clues</h1>
    ) : (
      <div>
        <div className="category-clues">
          {result.map((clue, index, result) => {
              // limits number of questions based on filter and sets dailyDouble id
              return index < props.cluesCount && <Clue key={clue.id} clue={clue} dailyDouble={dailyDouble.id}  />;
            })}
        </div>
      </div>
    )}
      
      </div>
    );
  }

export default Category;
