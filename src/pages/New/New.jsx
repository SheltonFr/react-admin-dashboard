import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { addDoc, doc, setDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, auth, storage } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom'


const New = ({ inputs, title }) => {

  const [file, setFile] = useState("")
  const [data, setData] = useState({})
  const [per, setPer] = useState(null)
  const navigate = useNavigate()


  useEffect(() => {
    const uploadFile = () => {

      // insure unique names creation
      const name = new Date().getTime() + file.name
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPer(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default: break;
          }
        },
        (error) => {

          switch (error.code) {
            case 'storage/unauthorized':
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;


            case 'storage/unknown':
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          });
        }
      );

    }

    // if there is a file, upload it
    file && uploadFile()
  }, [file])


  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value

    setData({ ...data, [id]: value })
  }

  const handleAdd = async (e) => {
    e.preventDefault()

    try {
      // create new user on firebase
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password)

      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      navigate()
    } catch (err) {
      console.error(err);
    }
    // Add a new document in collection "cities"


  }

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
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className='icon' />
                </label>
                <input type="file" id='file' style={{ display: 'none' }} onChange={e => setFile(e.target.files[0])} />
              </div>

              {inputs.map(input => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.id}>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.id}
                    onChange={handleInput}
                  />
                </div>
              ))}

              <button disabled={per !== null && per < 100} type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New