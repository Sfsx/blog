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
  
  let isClick = false;
  const touchStart = () => {
    isClick = true;
  };

  const touchMove = () => {
    isClick = false;
  };

  const touchEnd = () => {
    if (isClick) {
      setMenuOpenStatus(prev => !prev);
    };
  };

  return (
    <div className={style.header}>
      <div className={style.headerFixedContainer}>
        <div className={style.headerContainer}>
          <div className={style.logoContainer}>
            <div className={style.logo}>
              {
                "Sfsx's Blog".split('').map((item, index) => {
                  return (
                    <span style={{ animationDelay: `${index * 0.1}s` }}className={style.letter} key={index}>{item}</span>
                  )
                })
              }
            </div>
            <div
              className={menuClassName}
              // onClick={() => setMenuOpenStatus(prev => !prev)}
              onTouchStart={() => touchStart()}
              onTouchEnd={() => touchEnd()}
              onTouchMove={() => touchMove()}
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
