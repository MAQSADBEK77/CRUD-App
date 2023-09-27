import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./UserReducer";
import { toast } from "react-toastify";
import { useState } from "react";
function Update() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const existingUser = users.filter((user) => user.id == id);
  const user = existingUser[0];
  // input value
  const [name, setName] = useState(user.name);
  const [image, setImage] = useState(user.image);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [job, setJob] = useState(user.job);
  const [location, setLocation] = useState(user.location);
  const [gender, setGender] = useState(user.gender);
  function handleUser(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        name,
        image,
        email,
        phoneNumber,
        job,
        location,
        gender,
      })
    );
    toast.success("Success edit User");
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
        <form onSubmit={(e) => handleUser(e)} className="flex flex-col gap-7">
          <h1 className="text-4xl text-center mt-9 text-primary font-bold">
            Edit User
          </h1>
          {/* Name */}
          <label className="flex flex-col gap-3">
            <span>New name:</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name} required 
              type="text" 
              placeholder="Usmonov Maqsadbek"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Image */}
          <label className="flex flex-col gap-3">
            <span>New image URL:</span>
            <input
              onChange={(e) => setImage(e.target.value)}
              value={image} required 
              type="url"
              placeholder="Enter image URL"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Email */}
          <label className="flex flex-col gap-3">
            <span>New email:</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email} required 
              type="email"
              placeholder="maqsadbekusmonov8@gmail.com"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* PhoneNumber */}
          <label className="flex flex-col gap-3">
            <span>New phone number:</span>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber} required 
              type="text"
              placeholder="+998 97 501 95 53"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Job */}
          <label className="flex flex-col gap-3">
            <span>New job:</span>
            <input
              onChange={(e) => setJob(e.target.value)}
              value={job} required 
              type="text"
              placeholder="Frond-end developer"
              className="input input-bordered input-primary w-96"
            />
          </label>
          {/* Loacation */}
          <label className="flex flex-col gap-3">
            <span>New location:</span>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location} required 
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
          <button className="btn btn-primary">Edit</button>
        </form>
      </div>
    </>
  );
}

export default Update;
