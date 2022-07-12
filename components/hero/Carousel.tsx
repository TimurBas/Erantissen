import { createContext, useContext, useState } from "react";
import { LeftArrow, RightArrow } from "./Arrows";
import CarouselContext from "./CarouselContext";
import CarouselInfo from "./CarouselInfo";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const heros = useContext(CarouselContext);
  const imageUrls = heros.map((hero) => hero["imageUrl"]);
  const imageUrlsLength = imageUrls.length;

  const handleClick = (isLeftArrow: boolean) => {
    if (isLeftArrow) {
      current ? setCurrent(current - 1) : setCurrent(imageUrlsLength - 1);
    } else {
      current == imageUrlsLength - 1 ? setCurrent(0) : setCurrent(current + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center relative">
        <LeftArrow handleClick={handleClick} />
        {imageUrlsLength == 0 ? (
          <p>loading</p>
        ) : (
          <img
            src={imageUrls.find((path) => current == imageUrls.indexOf(path))}
          />
        )}
        <RightArrow handleClick={handleClick} />
      </div>
      <CarouselInfo imageNumber={current} />
    </div>
  );
};

export default Carousel;
