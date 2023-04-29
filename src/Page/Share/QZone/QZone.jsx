import React from 'react';
import qZone1 from '../../../assets/qZone1.png'; ;
import qZone2 from '../../../assets/qZone2.png'; ;
import qZone3 from '../../../assets/qZone3.png'; ;


const QZone = () => {
  return (
    <div className='bg-secondary py-3 mt-3 text-warning text-center'>
      <h3>Q-Zone</h3>
<div className='text-center m-3'>
<img src={qZone1} alt="" />
<img src={qZone2} alt="" />
<img src={qZone3} alt="" />

</div>


    </div>
  );
};

export default QZone;