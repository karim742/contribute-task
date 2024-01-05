import { useEffect, useState } from 'react';
const slidesArray = [
  {
    image: 'https://cutt.ly/DwHkHrdg',
  },
  {
    image: 'https://cutt.ly/9wHkJyvI',
  },
  {
    image: 'https://cutt.ly/DwHkHrdg',
  },
  {
    image: 'https://cutt.ly/9wHkJyvI',
  },
];
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const length = slidesArray?.length;
  useEffect(() => {
    const slidesNode = document.querySelectorAll('.slide');
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
      <div className='w-full h-60 md:h-96 lg:h-[36rem] relative overflow-hidden'>
        {slidesArray.map((singleSlide, index) => (
          <div
            key={index}
            className='slide w-full h-full absolute top-0 transition-all'
          >
            <img
              src={singleSlide.image}
              alt='slide image'
              className='w-full object-cover'
            />
          </div>
        ))}
        {/* controller  */}
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-between w-full px-5'>
          <span
            onClick={() => setCounter(counter < length ? counter - 1 : length)}
            id='prev'
            className='w-16 h-16 flex justify-center items-center text-3xl font-black bg-slate-300/50 text-black rounded-full cursor-pointer'
          >{` < `}</span>
          <span
            onClick={() => setCounter(counter > length ? 0 : counter + 1)}
            id='next'
            className='w-16 h-16 flex justify-center items-center text-3xl font-black bg-slate-300/50 text-black rounded-full cursor-pointer'
          >{` > `}</span>
        </div>
      </div>
    </section>
  );
};

export default Slider;
