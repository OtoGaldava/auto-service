import styles from './Services.module.css'

const Services = () => {
  return (
    <section id='services' className={styles.main}>

      <div className={styles.container}>
        <h2 className={styles.title}>სერვისები</h2>

        <div className={styles.boxContainer}>
          <a href="tel:+995550005643" className={styles.box}>
            <div className={styles.image}>
              <img className={styles.realImage} alt="ევაკუატორი | evacuator" src='./evacuator.png'></img>
            </div>
            <div>ევაკუატორის მომსახურება</div>
          </a>

            <a href="tel:+995550005643" className={styles.box}>
              <div className={styles.image}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#2a2d3d' viewBox="0 0 640 640"><path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z"/></svg>
              </div>
            <div>ჩაკეტილი მანქანის გახსნა</div>
          </a>

          <a href="tel:+995550005643" className={styles.box}>
              <div className={styles.image}>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#2a2d3d' viewBox="0 0 640 640"><path d="M400 416C497.2 416 576 337.2 576 240C576 142.8 497.2 64 400 64C302.8 64 224 142.8 224 240C224 258.7 226.9 276.8 232.3 293.7L71 455C66.5 459.5 64 465.6 64 472L64 552C64 565.3 74.7 576 88 576L168 576C181.3 576 192 565.3 192 552L192 512L232 512C245.3 512 256 501.3 256 488L256 448L296 448C302.4 448 308.5 445.5 313 441L346.3 407.7C363.2 413.1 381.3 416 400 416zM440 160C462.1 160 480 177.9 480 200C480 222.1 462.1 240 440 240C417.9 240 400 222.1 400 200C400 177.9 417.9 160 440 160z"/></svg>
              </div>
            <div>გასაღების გახსნა, დაპროგრამება</div>
          </a>

            <a href="tel:+995550005643" className={styles.box}>
              <div className={styles.image}>
                <img className={styles.realImage} alt="საბურავის შეცვლა | saburavis shecvla" src='./tire.png'></img>
              </div>
            <div>საბურავის შეცვლა, დაბერვა, შეკეთება</div>
          </a>

          <a href="tel:+995550005643" className={styles.box}>
            <div className={styles.image}>
              <img className={styles.realImage} alt="manqanis daqoqva | მანქანის დაქოქვა" src='./engine.png'></img>
            </div>
            <div>მანქანის დაქოქვა</div>
          </a>

          <a href="tel:+995550005643" className={styles.box}>
            <div className={styles.image}>
              <svg xmlns="http://www.w3.org/2000/svg" fill='#2a2d3d' viewBox="0 0 640 640"><path d="M96 128C96 92.7 124.7 64 160 64L320 64C355.3 64 384 92.7 384 128L384 320L392 320C440.6 320 480 359.4 480 408L480 440C480 453.3 490.7 464 504 464C517.3 464 528 453.3 528 440L528 286C500.4 278.9 480 253.8 480 224L480 164.5L454.2 136.2C445.3 126.4 446 111.2 455.8 102.3C465.6 93.4 480.8 94.1 489.7 103.9L561.4 182.7C570.8 193 576 206.4 576 220.4L576 440C576 479.8 543.8 512 504 512C464.2 512 432 479.8 432 440L432 408C432 385.9 414.1 368 392 368L384 368L384 529.4C393.3 532.7 400 541.6 400 552C400 565.3 389.3 576 376 576L104 576C90.7 576 80 565.3 80 552C80 541.5 86.7 532.7 96 529.4L96 128zM160 144L160 240C160 248.8 167.2 256 176 256L304 256C312.8 256 320 248.8 320 240L320 144C320 135.2 312.8 128 304 128L176 128C167.2 128 160 135.2 160 144z"/></svg>            
            </div>
            <div>საწვავის მიწოდება</div>
          </a>

          <a href="tel:+995550005643" className={styles.box}>
             <div className={styles.image}>
              <img className={styles.realImage} alt="მანქანის დიაგნოსტიკა" src='./diagnostics.png'></img>
             </div>
             <div>დიაგნოსტიკა</div>
          </a>

          <a href="tel:+995550005643" className={styles.box}>
             <div className={styles.image}>
              <img className={styles.realImage} alt="მანქანის გადაყვანა" src='./evacuator.png'></img>
             </div>
             <div>თოვლსა და ტალახში ჩარჩენილი მანქანის ამოყვანა</div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Services;