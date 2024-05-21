import { useEffect, useState } from "react";
import axios from 'axios'

function Home() {
    const [data, setData] = useState([]);
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
        if (window.confirm(`Are you sure you to delete ${name}`)) {
            axios.post('http://localhost:3001/deleteuser', { id })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.x === "Delete") {
                        alert("deleted Successfully");
                        window.location.reload();
                    }
                })
        } else {

        }
    };

    return (
        <>
            <h2>Welcome Boss here your customers data</h2>
            <div className="card-body py-md-4">
                <table style={{ width: 500 }}>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                    {data.map((k) => {
                        return (
                            <tr>
                                <td>{k._id}</td>
                                <td>{k.name}</td>
                                <td>{k.email}</td>
                                <td>
                                    <button onClick={() => deleteUser(k._id, k.name)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
}
export default Home;