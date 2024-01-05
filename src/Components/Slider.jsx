import { useEffect, useState } from "react";
const slidesArray = [
  {
    image: "https://cutt.ly/DwHkHrdg",
  },
  {
    image: "https://cutt.ly/9wHkJyvI",
  },
  {
    image: "https://cutt.ly/DwHkHrdg",
  },
  {
    image: "https://cutt.ly/9wHkJyvI",
  },
];
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const length = slidesArray?.length;
  useEffect(() => {
    const slidesNode = document.querySelectorAll(".slide");
    slidesNode.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
    slidesNode.forEach((slide) => {
      slide.style.transform = `translate(-${counter * 100}%)`;
    });
  }, [counter]);
  return (
    <section>
      {/* slides wrapper  */}
      <div className="relative h-60 w-full overflow-hidden md:h-96 lg:h-[36rem]">
        {slidesArray.map((singleSlide, index) => (
          <div
            key={index}
            className="slide absolute top-0 h-full w-full transition-all"
          >
            <img
              src={singleSlide.image}
              alt="slide image"
              className="w-full object-cover"
            />
          </div>
        ))}
        {/* controller  */}
        <div className="absolute left-[50%] top-[50%] flex w-full translate-x-[-50%] translate-y-[-50%] justify-between px-5">
          <span
            onClick={() => setCounter(counter < length ? counter - 1 : length)}
            id="prev"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-300/50 text-3xl font-black text-black"
          >{` < `}</span>
          <span
            onClick={() => setCounter(counter > length ? 0 : counter + 1)}
            id="next"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-slate-300/50 text-3xl font-black text-black"
          >{` > `}</span>
        </div>
      </div>
    </section>
  );
};

export default Slider;
