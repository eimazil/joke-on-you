import { useState } from "react";
import { useEffect } from "react";
import SingleJoke from "./Joke";

function Jokes() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (items) => {
          setIsLoaded(true);
          setItems(items.jokes);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="jokes-container">
      <h1 className="main-title">Best programmer jokes</h1>

      <div className="all-jokes">
        {items.map((joke, i) => (
          <SingleJoke
            key={i}
            type={joke.type}
            setup={joke.setup}
            delivery={joke.delivery}
            joke={joke.joke}
          />
        ))}
      </div>
    </div>
  );
}

export default Jokes;
