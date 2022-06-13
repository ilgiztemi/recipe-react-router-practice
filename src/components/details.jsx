import React from "react";
function Details({ recipeLabel }) {
  console.log(recipeLabel);

  return (
    <div>
      <div>
        <img src={recipeLabel.recipe.image} alt={recipeLabel.recipe.label} />
      </div>
      <div>
        <p>{recipeLabel.recipe.label}</p>
      </div>
      <h5>nutrition facts</h5>
      <div>
        {recipeLabel.recipe.healthLabels.slice(0, 10).map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Details;
