import { useState } from "react";
import { api } from "Y/utils/api";

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

  return (
   <>
   </>
  );
}
