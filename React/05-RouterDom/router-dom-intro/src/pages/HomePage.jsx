import React from "react";
import Card from "../components/UI/Card";
import PageTitle from "../components/UI/PageTitle";
import Blogs from "../components/Blog/Blogs";
import Map from "../components/Contact/Map";

const HomePage = () => {
  return (
    <>
      <PageTitle title={"Home Page"} />
      <img src="https://picsum.photos/1200/600" class="img-fluid w-100" alt="..."></img>
      <div className="container d-flex flex-wrap gap-2 justify-content-between">
        <Card classes={"bg-secondary"}/>
        <Card classes={"bg-danger"}/>
        <Card classes={"bg-info"}/>
        <Card classes={"bg-secondary"}/>
        <Blogs />
        <Card classes={"bg-success"}/>
        <Card classes={"bg-warning"}/>
        <Card classes={"bg-dark text-light"}/>
        <Card classes={"bg-light"}/>
        <Map />
      </div>
    </>
  );
};

export default HomePage;
