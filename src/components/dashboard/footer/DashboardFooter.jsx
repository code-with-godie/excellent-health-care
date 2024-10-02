const DashboardFooter = () => {
  return (
    <div className=' flex items-center justify-between text-textSoft italic'>
      {' '}
      <p>excellent health</p>{' '}
      <p> &copy; All rights reserved {new Date().getFullYear()}. </p>{' '}
    </div>
  );
};

export default DashboardFooter;
