import Image from "next/image";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <div className="profile-pic">
        <Image
          src="/assets/comments-icon.svg"
          alt="profile-pic"
          width={90}
          height={90}
        />
      </div>
      <div className="user-information-wrapper">
        <span className="nickname">"{user.username}"</span>
        <span>
          Name: <span className="name">{user.name}</span>
        </span>
        <span>
          Phone: <span className="phone">{user.phone}</span>
        </span>
        <span>
          Website: <span className="website">{user.website}</span>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
