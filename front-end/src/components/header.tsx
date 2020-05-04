import style from './header.module.scss';
import { useState } from 'react';
import classnames from 'classnames';
import Nav from 'components/nav';
import MobileNav from 'components/mobile-nav';

const header = () => {
  const [menuOpenStatus, setMenuOpenStatus] = useState(false);

  const menuClassName = classnames({
    [style.mobileMenuIndicator]: true,
    [style.mobileMenuToggle]: menuOpenStatus
  });
  

  return (
    <div className={style.header}>
      <div className={style.headerFixedContainer}>
        <div className={style.headerContainer}>
          <div className={style.logoContainer}>
            <div className={style.logo}>Sfsx's Blog</div>
            <div
              className={menuClassName}
              onClick={() => setMenuOpenStatus(prev => !prev)}
            />
          </div>
          <MobileNav menuOpenStatus={menuOpenStatus} />
          <Nav />
        </div>
      </div>
    </div>
  )
}

export default header;
