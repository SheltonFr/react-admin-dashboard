import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'

const New = ({ inputs, title }) => {

  const [file, setFile] = useState("")

  console.log(file);

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhf14RWxf6GFrK2A8CyOoXn4SEpZSBxuWOCs_T-A5peKF-fIpF&s"}
              alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className='icon' />
                </label>
                <input type="file" id='file' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.label}>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} id={input.label} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New