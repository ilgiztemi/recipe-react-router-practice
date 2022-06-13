import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Home({ fetchRecipeLabel }) {
  const [search, setSearch] = useState("melon");
  const [mealType, setMealType] = useState("lunch");
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeLabel, setLabel] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const apiID = "901e6b6a";
    const apiKey = "0c490cc125cd01592c30205615da2c02";
    const url = `https://api.edamam.com/search?q=${search}&app_id=${apiID}&app_key=${apiKey}&mealType=${mealType}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMealData(data.hits);
        setLoading(true);
      })
      .catch((err) => console.log(err, "<<<<<<"));
  }, []);
  const handleClick = (label) => {
    // const filtered = mealData.filter(item => item.recipe.label === label)[0
    fetchRecipeLabel(label);
    // fetchRecipeLabel(filtered)
    navigate(`/details/${label.recipe.label}`);
  };
  // console.log(mealData)
  return (
    <div className="row mt-5">
      {!loading
        ? "loading...."
        : mealData.map((item) => {
            return (
              <div className="col-12 col-sm-3 mb-2">
                <Card
                  sx={{ maxWidth: 345 }}
                  key={item.recipe.label}
                  onClick={() => handleClick(item)}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={item.recipe.image}
                    alt={item.recipe.label}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {item.recipe.label}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
    </div>
  );
}

export default Home;
