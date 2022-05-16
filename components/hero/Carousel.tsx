import { useContext, useState } from "react";
import CarouselContext from "./CarouselContext";
import CarouselInfo from "./CarouselInfo";

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const heros = useContext(CarouselContext);
  const imageUrls = heros.map((hero) => hero["imageUrl"]);

  const handleClick = (isLeftArrow: boolean) => {
    if (isLeftArrow) {
      current ? setCurrent(current - 1) : setCurrent(imageUrlsLength - 1);
    } else {
      current == imageUrlsLength - 1 ? setCurrent(0) : setCurrent(current + 1);
    }
  };

  const imageUrlsLength = imageUrls.length;

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <p>left</p>
        {imageUrlsLength == 0 ? (
          <p>loading</p>
        ) : (
          <img
            src={imageUrls.find((path) => current == imageUrls.indexOf(path))}
          />
        )}
        <p>right</p>
      </div>
      <CarouselInfo imageNumber={current} />
    </div>
  );
};

export default Carousel;
