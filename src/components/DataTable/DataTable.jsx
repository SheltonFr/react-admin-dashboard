import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatableSource';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase';



const DataTable = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    // Listen(REALTIME)
    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let list = [];
      snapShot.docs.forEach(doc => list.push({ id: doc.id, ...doc.data() }))
      setData(list)
    }, (error) => {
      console.log(error);
    });

    return () => {
      unsub()
    }
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter(item => item.id === id))
    } catch (error) {

    }
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