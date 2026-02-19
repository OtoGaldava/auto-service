import styles from './section.module.css'

const Section = () => {
    function handleClick () {
        window.location.href = '/'
    }

  return (
      <div className={styles.main}>

        <div className={styles.container}>
          <div className={styles.mainCont}>
            <div className={styles.textCont}>
              <div className={styles.text}>სწრაფი ავტოდახმარება გზებზე</div>
              
              <div className={styles.paragraphCont}>
                  <div className={styles.paragraph}>მოგესალმებით „ავტო სასწრაფოში“ ჩვენი მიზანია, რომ გზაზე დარჩენილი ავტომფლობელები არასოდეს დარჩნენ მარტო.</div>
                <div className={styles.paragraph}>ევაკუატორი, საბურავის შეცვლა, დაქოქვა - ყველაფერი ერთ სივრცეში.</div>
              </div>
            </div>

            <a className={styles.href} href="tel:+995550005643" itemProp="telephone">დარეკვა</a>
          </div>
        </div>

        <img className={styles.image} src={'./carLogo.png'}></img>
      </div>
  );
}

export default Section;