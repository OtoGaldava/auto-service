'use client'
import styles from './contact.module.css'

const Contact = () => {

    function handleClick () {
        window.location.href = '/'
    }

    return (
        <section id='contacts' className={styles.main}>
            <div className={styles.container}>

                <div className={styles.infoContainer}>
                    <div className={`${styles.info} ${styles.logo}`}>
                        <img className={styles.img} alt="avto saswrafo | avto daxmareba" onClick={handleClick} src={'./avtoDaxmareba.png'}></img>
                        <p className={styles.paragraph}>კომპანიია ავტო სასწრაფო მზად არის გაგიწიოთ მაღალკვალიფიციური, სწრაფი და ხარისხიანი ავტო მომსახურება, დროის ნებისმიერ მონაკვეთში.</p>
                    </div>

                    <div className={`${styles.info} ${styles.cont}`}>
                        <h2 className={styles.title}>კონტაქტი</h2>

                        <div className={styles.Contacts}>
                            <div className={styles.contactWrapper}>
                                <svg className={styles.phone} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#b68c5a" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                                <a className={styles.link} href="tel:+995550005643" itemProp="telephone">+995 550 00 56 43</a>
                            </div>

                            <div className={styles.contactWrapper}>
                                <svg className={styles.phone} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#b68c5a" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
                                <a className={styles.link} href="mailto:auto.emerjency@gmail.com" itemProp="email">auto.emerjency@gmail.com</a>
                            </div>

                            <div className={styles.contactWrapper}>
                                <svg className={`${styles.phone} ${styles.social}`} xmlns="http://www.w3.org/2000/svg" fill="#b68c5a" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                                <a className={styles.link} href="https://wa.me/550005643" itemProp="whatsapp">whatsapp: 550 005 643</a>
                            </div>

                            <div className={styles.contactWrapper}>
                                <svg className={`${styles.phone} ${styles.social}`} xmlns="http://www.w3.org/2000/svg" fill="#b68c5a" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
                                <a className={styles.link} href="https://www.facebook.com/profile.php?id=61583880022832" itemProp="email">facebook: ავტოდახმარება</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;