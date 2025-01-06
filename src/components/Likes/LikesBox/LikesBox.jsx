import React from "react";
import "./LikesBox.scss";
import { useSelector } from "react-redux";
import Cart from "../../Cart/Cart";
import Container from "../../../Container/Container";

export default function LikesBox() {
  const allLikes = JSON.parse(localStorage.getItem('likes'));
  console.log(allLikes);

  return (
    <Container>
      <div className="LikesBox">
        {allLikes.map((item) => (
          <Cart key={item.id} things={item} />
        ))}
      </div>
    </Container>
  );
}
