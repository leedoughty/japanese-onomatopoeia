import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import japaneseOnomatopoeia from "./japaneseOnomatopoeia.json";

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
    <ul className="homepage-links">
      {items.map((item) => (
        <li className="homepage-item" key={item.id}>
          <Link className="homepage-link" to={`word/${item.id}`}>
            {item.word} – {item.meaning}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Homepage;
