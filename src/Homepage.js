import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import japaneseOnomatopoeia from "./japaneseOnomatopoeia.json";
import NavBar from "./NavBar";

function Homepage() {
  useEffect(() => {
    loadData();
  }, []);

  const [items, setItems] = useState([]);

  const loadData = () => {
    const items = JSON.parse(JSON.stringify(japaneseOnomatopoeia));
    setItems(items);
  };

  return (
    <>
      <NavBar navBarColour="black" />
      <ul className="homepage-links">
        {items.map((item) => (
          <li className="homepage-item" key={item.id}>
            <Link className="homepage-link" to={`word/${item.id}`}>
              <div className="japanese-word-link">{item.word}</div>
              <div className="english-word-link">{item.meaning}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Homepage;
