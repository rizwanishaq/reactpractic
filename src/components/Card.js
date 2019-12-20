import React, { useEffect, useState } from "react";
import axios from "axios";
import oval from "../images/oval.svg";

function Card() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general"
      );
      setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
      setLoading(false);
    };
    fetchData();
  }, [fetching]);

  return (
    <div className="jumbotron d-flex align-items-center min-vh-100">
      <div className="container">
        <div className="card">
          {loading ? (
            <img src={oval} alt="loader" />
          ) : (
            <p className="card-body">{joke}</p>
          )}
          <div className="btn-group">
            <button
              className="btn btn-primary"
              onClick={() => setFetching(!fetching)}
            >
              Another One!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
