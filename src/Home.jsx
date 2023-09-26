import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";
import Header from "./components/Header";
function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  function handleDelete(id) {
    console.log(id);
    dispatch(
      deleteUser({
        id,
      })
    );
  }
  return (
    <div className="container-css">
      <Header />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image, name and Location</th>
              <th>Email and PhoneNumber</th>
              <th>Job</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => {
              const {
                name,
                email,
                gender,
                phoneNumber,
                location,
                job,
                image,
                id,
              } = user;
              return (
                <tr key={index} className="hover:bg-neutral">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img
                            src={image}
                            className="hover:scale-125 transition duration-500"
                            alt={name}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-primary">{name}</div>
                        <div className="text-sm opacity-50 text-secondary">
                          {location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <a
                      className="hover:underline text-primary"
                      href={"mailto:" + email}>
                      {email}
                    </a>
                    <br />
                    <a
                      className="hover:underline text-primary"
                      href={"tel:" + phoneNumber}>
                      {phoneNumber}
                    </a>
                  </td>
                  <td className="text-primary">{job}</td>
                  <td className="text-primary">{gender}</td>
                  <th>
                    <Link
                      to={`/edit/${id}`}
                      className="btn btn-accent btn-xs mr-4 mb-2 hover:scale-110">
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDelete(id)}
                      className="btn btn-primary btn-xs hover:scale-110">
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>Image, name and Location</th>
              <th>Email and Phone number</th>
              <th>Job</th>
              <th>Gender</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Home;
