function SingleJoke({ type, setup, delivery, joke }) {
  return (
    <div>
      {type === "twopart" ? (
        <div className="joke">
          <p>{setup}</p>
          <p>{delivery}</p>
        </div>
      ) : (
        <div className="joke">{joke}</div>
      )}
    </div>
  );
}

export default SingleJoke;
