import React from 'react';
import coding from '../images/coding.webp';
import cvbuilding from '../images/cvbuilding.webp';
import university from '../images/university.webp';
import connection from '../images/connection.webp';

function Services() {
  return (
    <section className='relative -mt-5'>
      <div className='container mx-auto px-12 py-32'>
        <div className='text-center pb-20'>
          <h1 className='font-black text-5xl'>About Lingkaran Coder</h1>
          <p className='text-xl my-8 lg:px-20'>
            Lingkaran Coder is an organisation founded by a group of SMAK 1
            PENABUR Jakarta alumni who are currently working or studying in the
            tech industry. Since the beginning, we have a vision to allow our
            members to know the tech industry further. <br /> <br />
            We have a mission to give our younger generation an opportunity to
            build their portfolio and prepare to invent something unique. With
            many coding schools appearing in recent years, we found that most do
            not offer an adequate lesson on how to be a great programmer. Our
            founder found that some coding school graduates do not know how to
            deploy their programme in the real world and only code on
            ready-to-use environments. As a disturbing fact, many great coders
            are born by self-learning and never attend any coding school. In
            Lingkaran Coder, we want to give you easier access to learn and
            prepare for your future in the tech industry through our
            personalised mentorship programme and connection. <br /> <br />
            Currently, our connection is spread across multiple countries such
            as Indonesia, Singapore, Hong Kong, Germany, United Kingdom,
            Netherland, and United States. This connection allows us to gain
            insight into what is happening throughout the tech industry. Even
            before the news spread throughout the internet. Other than that, it
            also allows us to give our members privileged access to real-world
            experience.
          </p>
        </div>
        <h1 className='text-center mt-10 text-5xl font-black pb-8'>
          We Will Help You
        </h1>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-10'>
          <div className='text-center col-span-1'>
            <img src={coding} alt='Coding' />
            <p className='text-2xl font-bold'>Learn To Code</p>
          </div>
          <div className='text-center col-span-1'>
            <img src={cvbuilding} alt='CV Building' />
            <p className='text-2xl font-bold'>Build Your CV</p>
          </div>
          <div className='text-center'>
            <img src={university} alt='University Application col-span-1' />
            <p className='text-2xl font-bold'>Apply To University</p>
          </div>
          <div className='text-center'>
            <img src={connection} alt='University Application col-span-1' />
            <p className='text-2xl font-bold'>Connect With Others</p>
          </div>
        </div>
        <h1 className='text-center text-2xl font-extrabold pt-16 mb-16'>
          And work with you in general to make you{' '}
          <b className='text-orange-accent'>STANDOUT</b>
        </h1>
      </div>
      <div class='service-seperator'>
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
    </section>
  );
}

export default Services;
