import React from 'react';
import ShowRandomList from './ShowRandomList';
import { RiCustomerService2Fill } from 'react-icons/ri';

const ListSection = () => {


  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex justify-evenly'>
        <div className="mt-5">
          <h2>About IT Hub</h2>
          <p className='py-4'>
            Investment income refers solely to the financial gains above the original cost of the investment. The form the income takes, such as interest or dividend payments, is irrelevant to it being considered investment income so long as the income stems from a previous installment.
          </p>
        </div>
      </div>

      <div>
        <ShowRandomList></ShowRandomList>
      </div>
    </div>

  );
};

export default ListSection;