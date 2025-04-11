import React from "react";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

function CardBody({x,description}) {
  return (
    <>
      <div className="card-body">
        <CardTitle baslik={x} />
        <CardText aciklama={description} />
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </>
  );
}

export default CardBody;
