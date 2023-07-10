import { useState, useEffect } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cb(value);
  };

  useEffect(() => {});

  return (
    <div className="row">
      <div className="input-field col s12">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            id="search-field"
            type="search"
            onKeyDown={(e) => handleKey(e)}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Search"
          />
          <button
            className="btn"
            type="submit"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export { Search };
