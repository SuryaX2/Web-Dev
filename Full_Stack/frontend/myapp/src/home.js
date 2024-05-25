import { useEffect, useState } from "react";
import axios from 'axios';

function Home() {
    const [data, setData] = useState([]);
    const [editUser, setEditUser] = useState({ _id: '', name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3001/fetch-detail", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                setData(data.data);
            })
    }, []);

    const deleteUser = (id, name) => {
        console.log("Deleting");
        if (window.confirm(`Are you sure you want to delete ${name}?`)) {
            axios.post('http://localhost:3001/deleteuser', { id })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.x === "Delete") {
                        alert("Deleted Successfully");
                        window.location.reload();
                    }
                });
        }
    };

    const updateUser = () => {
        axios.post('http://localhost:3001/updateuser', editUser)
            .then((res) => {
                console.log(res.data);
                if (res.data.x === "Update") {
                    alert("Updated Successfully");
                    setIsEditing(false);
                    window.location.reload();
                }
            });
    };

    const handleEditClick = (user) => {
        setEditUser(user);
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditUser(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <>
            <h2>Welcome Boss, here is your customers' data</h2>
            <div className="card-body py-md-4">
                <table style={{ width: 500 }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((k) => (
                            <tr key={k._id}>
                                <td>{k._id}</td>
                                <td>{k.name}</td>
                                <td>{k.email}</td>
                                <td>
                                    <button onClick={() => deleteUser(k._id, k.name)}>Delete</button>
                                    <button onClick={() => handleEditClick(k)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isEditing && (
                <div className="edit-form">
                    <h3>Edit User</h3>
                    <form onSubmit={(e) => { e.preventDefault(); updateUser(); }}>
                        <label>
                            Name:
                            <input type="text" name="name" value={editUser.name} onChange={handleChange} required />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" value={editUser.email} onChange={handleChange} required />
                        </label>
                        <br />
                        <button type="submit">Update</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Home;
