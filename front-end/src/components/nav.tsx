// import Link from 'next/link';
import { useRouter } from 'next/router'
import style from './nav.module.scss';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' }
];

const Nav = () => {
  const router = useRouter()

  const handleClick = (e: any, href: string) => {
    e.preventDefault()
    console.log(href);
    router.push({
      pathname: href,
      query: {}
    });
  }

  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        {links.map(
          ({ href, label }) => (
            <li className={style.li} key={`nav-link-${label}`}>
              <a
                className={style.a}
                onClick={(e) => handleClick(e, href)}
                style={{ color: router.pathname === href ? 'red' : 'black' }}
              >
                {label}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Nav;
