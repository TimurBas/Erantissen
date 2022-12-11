import { useState } from "react";
import { LeftArrow, RightArrow } from "./Arrows";
import CarouselInfo from "./CarouselInfo";
import { HeroModel } from "../../shared/responses/HeroResponse";

const Carousel = ({ heros }: { heros: HeroModel[] }) => {
  const [fade, setFade] = useState(false);
  const [current, setCurrent] = useState(0);
  const imageUrls = heros.map((hero) => hero["imageUrl"]);
  const imageUrlsLength = imageUrls.length;

  const handleClick = (isLeftArrow: boolean) => {
    if (isLeftArrow) {
      current ? setCurrent(current - 1) : setCurrent(imageUrlsLength - 1);
    } else {
      current == imageUrlsLength - 1 ? setCurrent(0) : setCurrent(current + 1);
    }
    setFade(true);
  };

  return (
    <div
      className={`flex flex-col ${fade ? "animate-fade" : ""}`}
      onAnimationEnd={() => setFade(false)}
    >
      <div className="relative flex items-center">
        <LeftArrow handleClick={handleClick} />
        {imageUrlsLength == 0 ? (
          <p>loading</p>
        ) : (
          <img
            className="select-none"
            src={imageUrls.find((path) => current == imageUrls.indexOf(path))}
          />
        )}
        <RightArrow handleClick={handleClick} />
      </div>
      {heros.length == 0 ? (
        <p>Loading</p>
      ) : (
        <CarouselInfo hero={heros[current]} />
      )}
    </div>
  );
};

export default Carousel;
