import { useState } from "react";
import { api } from "Y/utils/api";
import { set } from "zod";

export const runtime = 'edge'

export default function Home() {
  
  const [ name, setName] = useState<string>("");
  const [ email, setEmail] = useState<string>("");
  const [nameToUpdate, setNameToUpdate] = useState<string>("");
  const [emailToUpdate, setEmailToUpdate] = useState<string>("");
  const [idToUpdate, setIdToUpdate] = useState<string>("");
  const [idToDelete, setIdToDelete] = useState<string>("");
  const [idToGet, setIdToGet] = useState<string>("");

  // add functions
  const fetchAllUsers = api.example.getUsers.useQuery();

  const fetchUser = api.example.getUser.useQuery({ id: idToGet });

  const createUserMutation = api.example.createUser.useMutation();

  const updateUserMutation = api.example.updateUser.useMutation();

  const deleteUserMutation = api.example.deleteUser.useMutation();

  const handleCreateUser = async () => {
    try{
      await createUserMutation.mutateAsync({
        name: name,
        email: email,
      });

      setName("");
      setEmail("");


      await fetchAllUsers.refetch();

    }catch(e){
      console.log(e);
    }
  }

  const handleUpdateUser = async () =>{
    try{
      await updateUserMutation.mutateAsync({
        id: idToUpdate,
        name: nameToUpdate,
        email: emailToUpdate,
      });

      setIdToUpdate("");
      setNameToUpdate("");
      setEmailToUpdate("");

      await fetchAllUsers.refetch();

    }catch(e){
      console.log(e);
    }
  }

  const handleDeleteUser = async () =>{
    try{
      await deleteUserMutation.mutateAsync({
        id: idToDelete,
      });
      setIdToDelete("");
      await fetchAllUsers.refetch();

    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="mx-auto p-8">
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Get All Users</h2>
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => fetchAllUsers.refetch()}
      >
        Get All Users
      </button>

      <div className="text- mb-4 mt-4 grid grid-cols-3 gap-4 font-bold">
        <p>Id</p>
        <p>Name</p>
        <p>Email</p>
      </div>

      {fetchAllUsers.data &&
        fetchAllUsers.data.map((user) => (
          <div
            key={user.id}
            className="my-4 grid grid-cols-3 gap-4 rounded border border-gray-300 bg-white p-4 shadow"
          >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}

      {/* Get one user UI */}

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Get One User</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 border border-gray-300 p-2"
            placeholder="Enter user id to get"
            value={idToGet || ""}
            onChange={(e) => setIdToGet(String(e.target.value))}
          />
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => fetchUser.refetch()}
          >
            Get One User
          </button>
        </div>
        {fetchUser.data && (
          <div>
            <p>Name: {fetchUser.data.name}</p>
            <p>Email: {fetchUser.data.email}</p>
          </div>
        )}
      </div>

      {/* Create User */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Create New User</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 w-1/2 border border-gray-300 p-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleCreateUser}
        >
          Create User
        </button>
      </div>

      {/* Update User */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Update User</h2>
        <div className="mb-4 flex">
          <input
            className="mr-2 w-1/2 border border-gray-300 p-2"
            placeholder="Name to update"
            value={nameToUpdate}
            onChange={(e) => setNameToUpdate(e.target.value)}
          />
          <input
            className="w-1/2 border border-gray-300 p-2"
            placeholder="Email to update"
            value={emailToUpdate}
            onChange={(e) => setEmailToUpdate(e.target.value)}
          />
        </div>
        <input
          placeholder="Enter user id to update"
          className="mr-2 border border-gray-300 p-2"
          value={idToUpdate}
          onChange={(e) => setIdToUpdate(e.target.value)}
        />
        <button
          className="mt-2 rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleUpdateUser}
        >
          Update User
        </button>
      </div>

      {/* Delete User */}

      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Delete User</h2>
        <input
          placeholder="Enter user id to delete"
          className="mr-2 border border-gray-300 p-2"
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
        />
        <button
          className="mt-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleDeleteUser}
        >
          Delete User
        </button>
      </div>
    </div>
  );
}
