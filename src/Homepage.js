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
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
          <Link to={`word/${item.id}`}>{item.id}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Homepage;
