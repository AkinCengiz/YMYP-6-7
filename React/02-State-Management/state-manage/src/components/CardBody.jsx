import React from "react";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

function CardBody({x,description,setImageUrl,setTitle,setDescription}) {

    function changeInfo(){
        setDescription("DEĞİŞEN Açıklama metni : Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel optio incidunt itaque cum minima.");
        setTitle("DEĞİŞEN Kart Başlığı");
        setImageUrl(`https://picsum.photos/id/${Math.ceil(Math.random()*250)}/200/300`);
    }
  return (
    <>
      <div className="card-body">
        <CardTitle baslik={x} />
        <CardText aciklama={description} />
        <a href="#" className="btn btn-primary" onClick={changeInfo}>
          Go somewhere
        </a>
      </div>
    </>
  );
}

export default CardBody;
