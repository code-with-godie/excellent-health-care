import { Avatar } from '@mui/material';
// import React from 'react';

// eslint-disable-next-line react/prop-types
const Table = ({ columns = [], rows = [] }) => {
  return (
    <div className=' h-full w-full overflow-auto'>
      <table className=' w-full overflow-auto'>
        <thead>
          <tr className=' '>
            {columns.map((item, index) => (
              <td
                key={index}
                className=' p-2 capitalize font-bold text-sm'
              >
                {' '}
                {item?.headerName}{' '}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr
              key={index}
              className=''
            >
              <td className=' flex items-center gap-2 p-2 text-sm'>
                {' '}
                <Avatar
                  width={20}
                  height={20}
                  src={item?.image}
                  alt={item?.username}
                />{' '}
                {item?.username}{' '}
              </td>
              <td>
                <span
                  className={`text-sm ${
                    item?.status === 'completed' && ' bg-green-400'
                  }
                  ${item?.status === 'pending' && ' bg-orange-400'}
                  ${item?.status === 'cancelled' && ' bg-red-400'}

                  p-[.2rem] rounded-md  `}
                >
                  {item?.status}
                </span>
              </td>
              <td className=' text-sm'> {item?.createdAt} </td>
              <td className=' text-sm'> ${item?.amount} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
// import { DataGrid } from '@mui/x-data-grid';

// // eslint-disable-next-line react/prop-types
// const Table = ({ columns = [], rows = [] }) => {
//   return (
//     <div className=' h-[300px] w-full'>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         getRowId={row => row._id}
//         sx={{
//           // Header styling
//           '& .MuiDataGrid-columnHeaders': {
//             backgroundColor: '#151c2c', // Header background color
//             color: '#fff', // Text color for the header
//             borderBottom: '1px solid #151c2c', // Border below header
//           },
//           // Row styling
//           '& .MuiDataGrid-row': {
//             borderBottom: '1px solid #151c2c', // Row bottom border color
//           },
//           // Cell styling
//           '& .MuiDataGrid-cell': {
//             borderBottom: '1px solid #151c2c', // Cell bottom border color
//           },
//           // Ensure alternating row colors if needed
//           '& .MuiDataGrid-row:nth-of-type(even)': {
//             backgroundColor: '#1e2a38', // Optional: background color for even rows
//           },
//         }}
//       />
//     </div>
//   );
// };

// export default Table;
