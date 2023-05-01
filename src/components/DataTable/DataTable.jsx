import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datatableSource';



const DataTable = () => {

  const actionColumn = [
    {field: 'action', headerName: 'Action', width: 200, renderCell: ()=>{
      return (
        <div className='cellAction'>
          <div className="viewButton">View</div>
          <div className="deleteButton">Delete</div>
        </div>
      )
    }}
  ]
  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        paginationModel={{ page: 0, pageSize: 10 }}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable