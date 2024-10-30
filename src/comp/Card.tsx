import React, { useState } from "react";
import { Image } from "../App";
interface Props {
  image: Image;
  onClick: (img: Image) => void;
}
const Card = ({ image, onClick }: Props): JSX.Element => {
  const [like, setLike] = useState<boolean>(false);
  const liked = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    setLike(!like)
  }
  return (
    <div className="card">
      <img src={image.urls.small} alt="" onClick={() => onClick(image)} />
      <button onClick={liked}>{like ? "❤️" : "👍"}</button>
    </div>
  );
};

export default Card;
