import React from 'react';
import Card from './Card';

const obj = {
  div1: {
    color: "#FF6663",
    hashcode: "#FF6663",
    colorName: "PINK",
  },
  div2: {
    color: "#333333",
    hashcode: "#333333",
    colorName: "GRAY",
  },
  div3:{
    color: "#000000",
    hashcode: "#000000",
    colorName: "BlACK",
  },
  div4:{
    color: "#38BB14",
    hashcode: "#38BB14",
    colorName: "GREEN",
  },
  div5:{
    color: "#C90B0B",
    hashcode: "#C90B0B",
    colorName: "RED",
  },
  div6:{
    color: "#FF8000",
    hashcode: "#FF8000",
    colorName: "ORANGE",
  },
  div7:{
    color: "#FFF500",
    hashcode: "#FFF500",
    colorName: "YELLOW",
  },
  div8:{
    color: "#CCCCCC",
    hashcode: "#CCCCCC",
    colorName: "LIGHT GRAY",
  },
  div9 :{
    color: "#7E41A2",
    hashcode: "#7E41A2",
    colorName: "PURPLE",
  },
  div10 :{
    color: "#C14911",
    hashcode: "#C14911",
    colorName: "BROWN",
  },


}

export default function ParentComponent() {
  return (
    <div className='flex flex-wrap'>
      <Card obj={obj.div1} />
      <Card obj={obj.div2} />
      <Card obj={obj.div3}/>
      <Card obj={obj.div4} />
      <Card obj={obj.div5} />
      <Card obj={obj.div6}/>
      <Card obj={obj.div7}/>
      <Card obj={obj.div8} />
      <Card obj={obj.div9} />
      <Card obj={obj.div10}/>
    </div>
  );
}
