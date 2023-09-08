import Link from "next/link";
import Image from "next/image";

const Sidepanel = () => {
  return (
    <div className="app-sidepanel">
      <Link  className="link-item" href="/">
        <Image
          src="/assets/home-icon.svg"
          alt="icon"
          width={30}
          height={30}
        />
        <p className="link-item-text">Home</p>
      </Link>
      <Link className="link-item" href="/comments">
        <Image
          src="/assets/comments-icon.svg"
          alt="icon"
          width={30}
          height={30}
        />
        <p className="link-item-text">Comments</p>
      </Link>
    </div>
  );
};

export default Sidepanel;
