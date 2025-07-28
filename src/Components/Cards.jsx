import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto py-20 gap-1 flex">
          <Card width ={"basis-1/3"} start={false} para={true} hoverClass="hover:bg-violet-600" />
          <Card width ={"basis-2/3"} start={true} para={false} hoverClass="hover:bg-violet-600" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
