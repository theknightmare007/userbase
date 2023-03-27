import Link from 'next/link';

const NavBar = (props) => {
  const needLogin = props.isLoggedIn;
  const onDashboard= props.onDashboard;
  const onRewards = props.onRewards;
  const onParticipate = props.onParticipate;
  const onPostPic = props.onPostPic;
  const needSignUp = props.needSignUp

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        
        {onDashboard && (
          <li>
            <Link href="/User/userDashboard">Dashboard</Link>
          </li>
        )}
        {needSignUp && (
        <li>
          <Link href="/User/userSignUp">Sign Up</Link>
        </li>)}

        {needLogin && (
          <li>
            <Link href="/User/userLogin">Login</Link>
          </li>
        )}
        
        {onRewards && (
          <li>
            <Link href="/User/redeemYourRewards">Rewards</Link>
          </li>
        )}

        {onParticipate && (
          <li>
            <Link href="/User/redeemYourRewards">Participate</Link>
          </li>
        )}

        {onPostPic && (
          <li>
            <Link href="/User/postWastagePic">Upload </Link>
          </li>
        )}

        <li>
          <Link href="/components/aboutUs">About Us</Link>
        </li>

      </ul>
    </nav>
  );
};


export default NavBar;
