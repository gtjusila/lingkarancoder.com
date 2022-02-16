import React from 'react';
import mentoring from '../images/mentoring.webp';

function Steps() {
  return (
    <div className='help-background'>
      <div className='container mx-auto py-32 px-12'>
        <div className='grid lg:grid-cols-2 grid-col-1'>
          <div className='col flex justify-center items-center'>
            <div>
              <h1 className='text-5xl font-black'>How It Work</h1>
              <p className='text-2xl my-3'>
                <ol className='list-decimal pl-8 pt-5'>
                  <li className='py-2'>
                    Register and book an initial meeting schedule
                  </li>
                  <li className='py-2'>
                    Have an initial meeting with your mentor and set together
                    your goals for the program
                  </li>
                  <li>Receive your application result and a project plan</li>
                  <li className='py-2'>
                    Pay the commitment fee of IDR 200.000,00
                  </li>
                  <li className='py-2'>
                    Work on your project (with regular meetings with your
                    mentor)
                  </li>

                  <li>Claim your reward!</li>
                </ol>
                <br />
                Depending on how much you achieve on your project you can get up
                to IDR 100.000,00 back, the rest of the money is used for
                organizing this organization or donated to UNICEF
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img src={mentoring} alt='Mentoring Meeting' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
