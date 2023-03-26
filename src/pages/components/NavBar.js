import Link from 'next/link';

const NavBar = () => {
  return (
    <nav align>
      <ul color="cyan">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/User/userSignUp">Sign Up</Link>
        </li>
        <li>
          <Link href="/User/userLogin"><b>Login</b></Link>
        </li>
        <li>
          <Link href="/User/userLogin">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
