// UserList.tsx

import { AddUser } from "../components/users/AddUser";
import { UserLists } from "../components/users/ListUsers";


 const UserManage = () => {

  return (
    <div className="container w-screen">
   
    <AddUser/>
    <UserLists/>

    </div>
  );
};
export default UserManage;
