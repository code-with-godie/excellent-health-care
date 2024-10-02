import LineChart from '../../components/dashboard/chats/LineChart';
import Enrollments from '../../components/dashboard/enrollments/Enrollments';
import Widgets from '../../components/dashboard/widgets/Widgets';

const Dashboard = () => {
  return (
    <div className=' flex-col lg:flex-row flex gap-2  flex-1'>
      <div className=' w-full  lg:w-4/6  flex flex-col gap-2'>
        <Widgets />
        <Enrollments title='Latest Enrollments' />
        <LineChart />
      </div>
      <div className='w-full lg:w-2/6 bg-bgSoft min-w-[200px] sticky top-0'>
        2
      </div>
    </div>
  );
};

export default Dashboard;
