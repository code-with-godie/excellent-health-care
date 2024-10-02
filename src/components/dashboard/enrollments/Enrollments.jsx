import Table from '../table/Table';

const columns = [
  { field: 'title', headerName: 'username', flex: 1, headerClassName: 'red' },
  { field: 'status', headerName: 'status', flex: 1 },
  { field: 'createdAt', headerName: 'date', flex: 1 },
  { field: 'amount', headerName: 'amount', flex: 1 },
];
// eslint-disable-next-line react/prop-types
const Enrollments = ({ scroll, title }) => {
  const rows = [
    {
      _id: 1,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 2,
      title: 'product',
      status: 'completed',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 3,
      title: 'product',
      status: 'pending',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 4,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 5,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 6,
      title: 'product',
      status: 'pending',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 7,
      title: 'product',
      status: 'completed',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 8,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
  ];

  return (
    <div className={`bg-bgSoft p-4  shrink-0 rounded-md ${scroll && 'h-64'} `}>
      <h1 className=' capitalize text-lg text-textSoft '> {title} </h1>
      {/* <div style={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </div> */}
      <Table
        columns={columns}
        rows={rows}
      />
    </div>
  );
};

export default Enrollments;
