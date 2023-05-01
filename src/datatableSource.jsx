export const userRows = [
    {
        id: 1,
        username: 'shelton',
        img: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'active',
        email: 'shelton@gmail.com',
        age: 20
    },
    {
        id: 2,
        username: 'jaime',
        img: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'passive',
        email: 'jaime@gmail.com',
        age: 20
    },
    {
        id: 3,
        username: 'pedro',
        img: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'passive',
        email: 'pedron@gmail.com',
        age: 20
    },
    {
        id: 4,
        username: 'john',
        img: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'active',
        email: 'jhn@gmail.com',
        age: 20
    },
    {
        id: 5,
        username: 'carlos',
        img: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'pending',
        email: 'carlos@gmail.com',
        age: 20
    },
    {
        id: 6,
        username: 'heltonshelton',
        img: 'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: 'passive',
        email: 'helton@gmail.com',
        age: 20
    },
]

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user',
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'age', headerName: 'Age', with: 100 },
    {
        field: 'status',
        headerName: 'Status',
        with: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
]