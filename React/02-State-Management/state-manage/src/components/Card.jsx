import React, { useState } from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";

function Card() {
  const [imageUrl, setImageUrl] = useState(
    "https://picsum.photos/id/237/200/300"
  );
  const [title, setTitle] = useState("Kart Başlığı");
  const [description, setDescription] = useState(
    "Açıklama metni : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel optio incidunt itaque cum minima."
  );
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage imageUrl={imageUrl} />
      <CardBody x={title} description={description} />
    </div>
  );
}

export default Card;
