import { useRouter } from 'next/router';
import style from './mobile-nav.module.scss';
import classnames from 'classnames';
import { links } from '../config/router';

type MobileNavProps = { menuOpenStatus: boolean };

const MobileNav = (props: MobileNavProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    console.log(href);
    router.push({
      pathname: href,
      query: {}
    });
  }

  const mobileNavClassName = classnames({
    [style.mobileNav]: true,
    [style.mobileNavToggle]: props.menuOpenStatus
  });
  
  return (
    <div className={mobileNavClassName}>
      <div className={style.wrapper}>
      <div className={style.author}>
        <img className={style.authorImg} src="/author.jpg"/>
        <div>
          死宅！死宅！<br />
          sfsx.game@gmail.com
        </div>
      </div>
      <ul className={style.ul}>
        {links.map(
          ({ href, label, iconClass }) => (
            <li className={style.li} key={`nav-link-${label}`}>
              <span className={`iconfont ${iconClass}`}></span>
              <a className={style.link} href={href} onClick={(e) => handleClick(e, href)}>
                {label}
              </a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default MobileNav;