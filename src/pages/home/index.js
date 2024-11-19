import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal';
import { IoLogOut } from 'react-icons/io5';
import UserForm from '../../components/form';
import { FaTrash } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";

const Home = () => {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedUser, setSelectedUser] = useState(null); // Usuário em edição
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('user');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      navigate('/login'); 
    }
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setName(user.name);
    setEmail(user.email);
    setType(user.type);
    setPassword('');
    setIsModalOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/${email}`, { name, type, password });
      alert('User updated successfully!');
      setIsModalOpen(false);
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert('Error updating user.');
    }
  };

  const handleDelete = async (email) => {
    try {
      await api.delete(`/${email}`);
      alert('User deleted successfully!');
      fetchUsers();
    } catch (error) {
      console.error(error);
      alert('Error deleting user.');
    }
  };

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return (

    <div div className=" flex flex-col gap-8 ">
      <div className='flex w-full justify-between bg-[#0C0068] py-2 px-10 sm:px-40 items-center'>
          <img src="https://spsgroup.com.br/wp-content/uploads/2024/03/SPSConstultoria_007.png" alt="Logo" className="w-auto h-16 object-contain rounded-t-md" />


          <button
            onClick={handleLogout}
            className="bg-rose-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
          Sair
          <IoLogOut />
          </button>
      </div>

      <div className="p-4 space-y-4 flex flex-col sm:flex-row gap-4 h-auto">
        <UserForm onUserAdded={fetchUsers} />

        <table className="w-full bg-white shadow-md rounded-md h-min">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Type</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className='text-center p-4'>
            {users.map((user) => (
              <tr key={user.email}>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.type}</td>
                <td className="p-2 ">
                  <button
                    onClick={() => handleEdit(user)}
                    className=" px-2 py-2 rounded"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user.email)}
                    className="text-red-500 px-2 py-2 rounded"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleUpdate} className="space-y-4">
          <h2 className="text-lg font-bold">Edit User</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            disabled
            className="block w-full p-2 border rounded bg-gray-100"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="block w-full p-2 border rounded"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="password"
            placeholder="New Password (optional)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-[#0C0068] text-white p-2 rounded-md font-semibold"
          >
            Update User
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
