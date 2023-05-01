import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSource';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const DataTable = () => {

  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }


  const actionColumn = [
    {
      field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
        return (
          <div className='cellAction'>
            <NavLink to={'/users/id'}>
              <div className="viewButton">View</div>
            </NavLink>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Add New User
        <NavLink to={'/users/new'} className='link' >
          Add New
        </NavLink>
      </div>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable