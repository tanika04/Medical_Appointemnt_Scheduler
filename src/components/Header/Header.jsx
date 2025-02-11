import { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = ({ isLoggedIn, username }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className='flex items-center justify-between'>
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className='flex items-center gap-4'>
  {isLoggedIn ? (
    <div>
      <span className="text-primaryColor font-medium">{username}</span>
      <Link to="/">
        <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
          <img src={userImg} className='w-full rounded-full' alt="" />
        </figure>
      </Link>
    </div>
  ) : (
    <>
      {username ? (
        <div>
          <span onClick={() => { window.location.reload() }} className="text-primaryColor font-medium cursor-pointer">{username}</span>
          <Link to="/">
            <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
              <img src={userImg} className='w-full rounded-full' alt="" />
            </figure>
          </Link>
        </div>
      ) : (
        <>
          <Link to='/register'>
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Sign Up</button>
          </Link>
          <Link to='/login'>
            <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
          </Link>
        </>
      )}
    </>
  )}
</div>

        </div>
      </div>
    </header>
  );
};

export default Header;