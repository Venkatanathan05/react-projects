const userData = [
  {
    profile:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    name: "VENKAT",
    online: false,
    location: "CHENNAI",
    description: "DEVELOPER",
    skills: ["Coding", "Problem-solving", "Building"],
  },
  {
    profile:
      "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png",
    name: "RAM",
    online: true,
    location: "COIMBATORE",
    description: "DESIGNER",
    skills: ["UI/UX", "Logos", "Webpages"],
  },
  {
    profile: "https://cdn-icons-png.flaticon.com/512/190/190674.png",
    name: "SHYAM",
    online: true,
    location: "BANGALORE",
    description: "COOK",
    skills: ["Chinese", "Indian", "Mexican"],
  },
];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img src={props.profile} alt="user" className="img" />
      <h3>{props.name}</h3>
      <h3>{props.location}</h3>
      <p>{props.description}</p>
      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Follow</button>
      </div>
      <div className="skills">
        <h6>Skills:</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const UserCard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          key={index}
          profile={user.profile}
          name={user.name}
          location={user.location}
          description={user.description}
          skills={user.skills}
          online={user.online}
        />
      ))}
    </>
  );
};

export default UserCard;
