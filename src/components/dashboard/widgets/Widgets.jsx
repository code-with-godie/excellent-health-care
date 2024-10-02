import { ArrowUpward, DoneOutline } from '@mui/icons-material';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Widgets = () => {
  return (
    <div className=' flex-wrap md:flex-nowrap flex gap-2 p-2'>
      {/* =====================widget start================== */}
      <div className='flex-1 bg-bgSoft p-4 rounded-lg flex  gap-2 hover:bg-bgSoft/70'>
        <MdSupervisedUserCircle />
        <div className=' flex flex-col flex-1 gap-2'>
          <p className='  capitalize'>total users</p>
          <p className=' text-2xl capitalize font-bold '>12k</p>
          <div className='  flex gap-2 items-center'>
            <span className='text-sm'>12%</span>
            <div className=' flex'>
              <ArrowUpward className=' text-lg text-green-400' />
              <ArrowUpward className=' text-lg text-green-400' />
            </div>
          </div>
        </div>
      </div>
      {/* =====================widget start================== */}
      {/* =====================widget start================== */}
      <div className='flex-1 bg-bgSoft p-4 rounded-lg flex  gap-2 hover:bg-bgSoft/70'>
        <DoneOutline />
        <div className=' flex flex-col flex-1 gap-2'>
          <p className='  capitalize'>total users</p>
          <p className=' text-2xl capitalize font-bold '>12k</p>
          <div className='  flex gap-2 items-center'>
            <span className='text-sm'>12%</span>
            <div className=' flex'>
              <ArrowUpward className=' text-lg text-green-400' />
              <ArrowUpward className=' text-lg text-green-400' />
            </div>
          </div>
        </div>
      </div>
      {/* =====================widget start================== */}
      {/* =====================widget start================== */}
      <div className='flex-1 bg-bgSoft p-4 rounded-lg flex  gap-2 hover:bg-bgSoft/70 '>
        <DoneOutline />
        <div className=' flex flex-col flex-1 gap-2'>
          <p className='  capitalize'>total users</p>
          <p className=' text-2xl capitalize font-bold '>12k</p>
          <div className='  flex gap-2 items-center'>
            <span className='text-sm'>12%</span>
            <div className=' flex'>
              <ArrowUpward className=' text-lg text-green-400' />
              <ArrowUpward className=' text-lg text-green-400' />
            </div>
          </div>
        </div>
      </div>
      {/* =====================widget start================== */}
    </div>
  );
};

export default Widgets;
