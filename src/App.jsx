import React from "react";
import useFetch from "./useFetch";
import "./App.css";

export default function App() {
  const [posts, pError] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const [comments, cError] = useFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const [todos, tError] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <>
      <div className="all-data">
        <div>
          <h2>
            Fetched <span>10 Posts Data</span> from JsonPlaceholder
          </h2>
          <br />
          <hr />
          <br />
          {pError && <h3>⚠️ {pError.message} </h3>}

          {posts.slice(0, 10).map((d) => (
            <p className="data" key={d.id}>
              {d.title}
            </p>
          ))}
        </div>
        <div>
          <h2>
            Fetched <span>10 Comments Data</span> from JsonPlaceholder
          </h2>

          <br />
          <hr />
          <br />
          {cError && <h3>⚠️ {cError.message}</h3>}
          {comments.slice(0, 10).map((d) => (
            <p className="data" key={d.id}>
              {d.name}
            </p>
          ))}
        </div>
        <div>
          <h2>
            Fetched <span>10 Todos Data</span> from JsonPlaceholder
          </h2>
          <br />
          <hr />
          <br />
          {tError && <h3>⚠️ {tError.message}</h3>}
          {todos.slice(0, 10).map((d) => (
            <p className="data" key={d.id}>
              {d.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
