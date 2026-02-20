import styles from './header.module.css'

const Header = () => {
    function handleClick () {
        window.location.href = '/'
    }

  return (
      <div className={styles.header}>
        <img onClick={handleClick} alt="auto emergency | ავტო დახმარება" className={styles.logo} src={'./avtoDaxmareba.png'}></img>

        <div className={styles.headerCont}>
          <a className={styles.href} href="/">მთავარი</a>
          <a className={styles.href} href="#services">სერვისები</a>
          <a className={styles.href} href="#contacts">კონტაქტი</a>
        </div>
      </div>
  );
}

export default Header;