import css from './InfoView.module.css'
import contactPhoto from "../../img/postcontact.avif";

const InfoView = () => {

    return (
        < >
            <header className={css.heroInfo}/>
            <div className={css.content}>

                <h1>Here you have lite information of Miss Manga Bookface!! </h1>

                <div className={css.container}>
                    <div className={css.contactForm}>
                       <h1>We create this space for you!</h1>
                        <p>We believe that is important to have a space where you can find friends with same interests! </p>
                        <p>That's why Miss Manga only accept female members with same interest in MANGA culture!</p>

                    </div>
                </div>
            </div>


        </>

    )
}

export default InfoView