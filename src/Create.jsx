import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./UserReducer";
function Create() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const navigate = useNavigate();
  // input value
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  function formSubmit(e) {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        image,
        email,
        phoneNumber,
        job,
        location,
        gender,
      })
    );
    navigate("/");
  }
  return (
    <>
      <Link
        to="/"
        className="fixed top-5 left-5 text-xl text-primary transition duration-300 hover:scale-110 hover:underline">
        Back
      </Link>
      <div className="create-form flex justify-center items-center  min-h-[100vh] m-auto">
        <form
          onSubmit={(e) => formSubmit(e)}
          action=""
          className="flex flex-col gap-7">
          <h1 className="text-4xl text-center mt-9 text-primary font-bold">
            Add new User
          </h1>
          {/* Name */}
          <label className="flex flex-col gap-3">
            <span>Name:</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Usmonov Maqsadbek"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Image */}
          <label className="flex flex-col gap-3">
            <span>Image URL:</span>
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              type="url"
              placeholder="Enter image URL"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Email */}
          <label className="flex flex-col gap-3">
            <span>Email:</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="maqsadbekusmonov8@gmail.com"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* PhoneNumber */}
          <label className="flex flex-col gap-3">
            <span>Phone number:</span>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              type="text"
              placeholder="+998 97 501 95 53"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Job */}
          <label className="flex flex-col gap-3">
            <span>Job:</span>
            <input
              onChange={(e) => setJob(e.target.value)}
              value={job}
              type="text"
              placeholder="Frond-end developer"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Loacation */}
          <label className="flex flex-col gap-3">
            <span>Location:</span>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              type="text"
              placeholder="Uzbekistan, Fergana"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Gender */}
          <label className="flex flex-col gap-3">
            <span>Gender:</span>
            <select
              className="select select-primary w-96"
              onChange={(e) => setGender(e.target.value)}
              value={gender}>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </label>
          {/* button */}
          <button className="btn btn-primary">Saved</button>
        </form>
      </div>
    </>
  );
}

export default Create;
