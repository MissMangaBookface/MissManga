import css from './AboutView.module.css'
import sailormoon from "../../img/mainSailor.png";
import chris from '../../img/crisProfile.png'
import carin from '../../img/carinProfile.png'
import samantha from '../../img/samanthaProfile.png'
import ursula from '../../img/ursulaProfile.png'


const AboutView = () => {

    return (
        <>
            <header className={css.heroAbout}/>
            <div className={css.content}>

            <h1>Here you have information about us!! </h1>

            <div className={css.container}>
                <div className={css.aboutCard}>
                    <p> CHRISTOFFER K.</p>
                    <img src={chris} alt="christProfile" className={css.photo}/>
                    <a href="mailto:xxx">xxx@gmil.com</a>
                    <p> git:xxx</p>
                    <p> linkedin: xxx</p>

                </div>
                <div className={css.aboutCard}>
                    <p> CARIN W.</p>
                    <img src={carin} alt="carinProfile" className={css.photo}/>
                    <a href="mailto:xxx">xxx@gmil.com</a>
                    <p> git:xxx</p>
                    <p> linkedin: xxx</p>
                </div>
                <div className={css.aboutCard}>
                    <p> SAMANTHA TH.</p>
                    <img src={samantha} alt="samanthaProfile" className={css.photo}/>
                    <a href="mailto:xxx">xxx@gmil.com</a>
                    <p> git:xxx</p>
                    <p> linkedin: xxx</p>
                </div>
                <div className={css.aboutCard}>
                    <p> URSULA V.</p>
                    <img src={ursula} alt="ursulaProfile" className={css.photo}/>
                    <a href="mailto:xxx">xxx@gmil.com</a>
                    <p> git:xxx</p>
                    <p> linkedin: xxx</p>
                </div>
            </div>
        </div>




        </>

    )
}

export default AboutView