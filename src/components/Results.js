import React, { useEffect, useState } from "react";
import "./css/Results.css";
import VideoCard from "./VideoCard";
import "./css/VideoCard.css";
import axios from "../axios";
import FlipMove from "react-flip-move";
import { Skeleton } from "antd";
// const VideoCard = React.lazy(() => import("./VideoCard"));

function Results({ selectedOption }) {
  const [movies, setMovies] = useState();
  useEffect(() => {
    async function fetchData() {
      setMovies();
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <>
      {!movies && (
        <>
          {[...Array(20)].map((_, idx) => (
            <div
              style={{
                width: 240,
                height: 350,
                display: "flex",
              }}
              key={idx}

              //   className="videoCard"
            >
              <Skeleton.Input
                active
                style={{
                  width: 240,
                  height: 350,
                }}
              />
            </div>
          ))}
        </>
      )}
      <div className="results">
        <FlipMove>
          {movies?.map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
        </FlipMove>
      </div>
    </>
  );
}

export default Results;
