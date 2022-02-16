import React from 'react';

function Connection() {
  return (
    <div className='price-background relative text-white'>
      <div class='connection-divider-top'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='container mx-auto px-12 py-48'>
        <h1 className='text-white font-black text-center text-4xl'>
          We Connect You With Students From
        </h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 ml-8 mt-10 text-2xl lg:gap-4'>
          <div className='col'>
            <ul className='list-disc'>
              <li className='py-2'>Oxford University</li>
              <li className='py-2'>Hong Kong University</li>
              <li className='py-2'>University Of Toronto</li>

              <li className='py-2'>City University Of Hongkong</li>
              <li className='py-2'>
                Hong Kong University of Science and Technology
              </li>
              <li className='py-2'>Chinese University of Hongkong</li>
            </ul>
          </div>
          <div className='col lg:ml-8'>
            <ul className='list-disc'>
              <li className='py-2'>University of California Berkeley</li>
              <li className='py-2'>Technische Universität Berlin</li>
              <li className='py-2'>National University of Singapore</li>
              <li className='py-2'>Nanyang Technological University</li>
              <li className='py-2'>University of Indonesia</li>
              <li className='py-2'>Chinese University of Hongkong Shenzhen</li>
            </ul>
          </div>
        </div>
        <div className='mt-10'>
          <h1 className='text-3xl text-center font-semibold'>And Many More!</h1>
        </div>
      </div>
      <div class='connection-divider-bottom'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Connection;
