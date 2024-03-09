import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
function SignUP() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        {/* Left side */}

        <div className="flex-1">
          <Link to="/" className="font-bold  dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Vivek's{" "}
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consequatur obcaecati ipsa alias quisquam delectus perferendis
            quibusdam ab blanditiis voluptate consequuntur voluptatum explicabo,
            suscipit asperiores natus fuga sed non. Eligendi.
          </p>
        </div>

        {/* right side */}

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <label value="your username">
                <TextInput type="text" placeholder="username" id="username" />
              </label>
            </div>
            <div className="">
              <label value="your email">
                <TextInput type="text" placeholder="Email" id="email" />
              </label>
            </div>
            <div className="">
              <label value="your password">
                <TextInput
                  type="text"
                  placeholder="name@company.com"
                  id="password"
                />
              </label>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span> Have an account ?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUP;
