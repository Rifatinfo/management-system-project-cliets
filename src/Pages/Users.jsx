import { FaUser } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { MdModeEdit } from "react-icons/md";
import { useState } from "react";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {  // Corrected deletedCount
                    alert('Successfully deleted');
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            });
    }


    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-20">
                <h1 className='text-center text-2xl text-blue-800 mt-7'>User Management System</h1>
                <div>
                    <Link to="/login">
                        <button className="flex items-center gap-3 shadow-xl py-3 px-4 text-blue-600">
                            <p className="font-semibold">New User</p>
                            <p><FaUser /></p>
                        </button>
                    </Link>
                </div>
            </div>

            <div>
                <table className="table-auto w-full border-collapse border">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Id</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Gender</th>
                            <th className="border px-4 py-2">Status</th>
                            <th className="border px-4 py-2 " colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={user.id}>
                                <td className="border px-4 py-2">{idx + 1}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">
                                    {user.male ? "Male" : user.female ? "Female" : "Not specified"}
                                </td>
                                <td className="border px-4 py-2">
                                    {user.active ? "Active" : "Inactive"}
                                </td>
                                <td className="border px-4 py-2 ">
                                    <Link to={`/update/${user._id}`}>
                                        <p className="text-2xl font-bold text-blue-600 flex justify-center"><MdModeEdit /></p>
                                    </Link>
                                </td>
                                <td className="border px-4 py-2">
                                    <p onClick={() => handleDelete(user._id)} className="text-2xl font-bold text-blue-600 flex justify-center"><RxCross2 /></p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
