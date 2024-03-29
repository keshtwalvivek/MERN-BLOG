import React from "react";
import { useSelector } from "react-redux";
import { Button, TextInput } from "flowbite-react";

function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full border-8 object-cover  border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" placeholder="password" />
        <Button type="submit">Update</Button>
      </form>
      <div className="text-red-500 flex justify-between">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
}

export default DashProfile;
