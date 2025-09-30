import React from "react";
import "../App.css";
import recipes from "../recipes";

export default function Menu() {
  // handle order button
  const handleOrder = (recipeTitle) => {
    alert(`Order for "${recipeTitle}" done ✅`);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This Week's Specials</h2>
        <button onClick={() => alert("Full menu order placed ✅")}>
          Order Menu
        </button>
      </div>

      <div className="cards">
        {recipes.map((recipe) => (
          <div className="menu-items" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.title)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
