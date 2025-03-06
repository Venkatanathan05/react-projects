import React, { useState } from "react";

const RegForm = () => {
  const [user, setUser] = useState({
    name: "Ram",
    age: 21,
    gender: "male",
    student: "true",
    country: "India",
    bio: "Write about yourself ",
  });

  const changeDetails = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="form">
      <h1>Dynamic Form</h1>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td>Student</td>
              <td>{user.student ? "true" : "false"}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{user.country}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>{user.bio}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <form>
        <input
          type="text"
          placeholder="Enter your name.."
          onChange={changeDetails}
          name="name"
          value={user.name}
        />
        <input
          type="number"
          placeholder="Enter your age.."
          onChange={changeDetails}
          name="age"
          value={user.age}
        />
        <div className="gender">
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              checked={user.gender == "male"}
              value="male"
              id="male"
              onChange={changeDetails}
            />
            male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              checked={user.gender == "female"}
              value="female"
              id="female"
              onChange={changeDetails}
            />
            female
          </label>
        </div>
        <div className="country">
          <label htmlFor="country">Select a country:</label>
          <select
            name="country"
            id="country"
            value={user.country}
            onChange={changeDetails}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <label htmlFor="student">
          <input
            type="checkbox"
            id="student"
            checked={user.student}
            value={user.student}
            onChange={changeDetails}
            name="student"
          />
          student
        </label>
        <textarea
          name="bio"
          id="bio"
          cols="30"
          rows="5"
          value={user.bio}
          placeholder="write about yourself"
          onChange={changeDetails}
        ></textarea>
      </form>
    </div>
  );
};

export default RegForm;
