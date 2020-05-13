import React from "react";

function Result(props) {
  return (
    <>
      <hr />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>
        <i>{props.created}</i>
      </p>
      <p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          {props.url}
        </a>
      </p>
    </>
  );
}

export default Result;
