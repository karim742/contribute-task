import { useState } from 'react';

const Drawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <header className='bg-[#f7f7f7] shadow-headerShadow'>
      {/* container  */}
      <div className='max-w-screen-2xl mx-auto p-2'>
        {/* wrapper  */}
        <div className='flex justify-between items-center'>
          {/* logo  */}
          <div>
            <img src='https://cutt.ly/XwHkvO0d' alt='logo' className='w-24' />
          </div>
          {/* Drawer toggle icon  */}
          <div
            className='block md:hidden'
            onClick={() => setShowDrawer(!showDrawer)}
          >
            {showDrawer ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='32'
                height='32'
                x='0'
                y='0'
                viewBox='0 0 320.591 320.591'
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace='preserve'
                className=''
              >
                <g>
                  <path
                    d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                    fill='#000000'
                    opacity='1'
                    data-original='#000000'
                    className=''
                  ></path>
                  <path
                    d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                    fill='#000000'
                    opacity='1'
                    data-original='#000000'
                    className=''
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                xmlnsXlink='http://www.w3.org/1999/xlink'
                width='32'
                height='32'
                x='0'
                y='0'
                viewBox='0 0 124 124'
                style={{ enableBackground: 'new 0 0 512 512' }}
                xmlSpace='preserve'
                className=''
              >
                <g>
                  <path
                    d='M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z'
                    fill='#000000'
                    opacity='1'
                    data-original='#000000'
                    className=''
                  ></path>
                </g>
              </svg>
            )}
          </div>
          {/* nav Item  */}
          <nav
            className={`h-screen md:h-auto flex items-center gap-5 md:gap-10 absolute md:static flex-col md:flex-row top-28 ${
              showDrawer ? 'left-0' : '-left-40'
            } bg-[#f7f7f7] md:bg-none transition-all z-50`}
          >
            <a href='#' className='text-xl font-medium px-5 py-1 md:p-0'>
              Home
            </a>
            <a href='#' className='text-xl font-medium px-5 py-1 md:p-0'>
              Blog
            </a>
            <a href='#' className='text-xl font-medium px-5 py-1 md:p-0'>
              Contact
            </a>
            <a href='#' className='text-xl font-medium px-5 py-1 md:p-0'>
              Portfolio
            </a>
            <a href='#' className='text-xl font-medium px-5 py-1 md:p-0'>
              Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Drawer;
