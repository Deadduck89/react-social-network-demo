import React from "react";
import styles from "./Contact.module.css"
import facebook from "../../../../../assets/social-icons/facebook.png";
import github from "../../../../../assets/social-icons/iconfinder_social-79_2285234.png";
import instagram from "../../../../../assets/social-icons/iconfinder_Instagram_3709561.png";
import mainLink from "../../../../../assets/social-icons/iconfinder__google_chrome_2560108.png";
import twitter from "../../../../../assets/social-icons/iconfinder_SocialMedia_Twitter-Outline_2959740.png";
import vk from "../../../../../assets/social-icons/iconfinder_vk_853340.png";
import website from "../../../../../assets/social-icons/iconfinder_SocialMedia_Website-Outline_2959741.png";
import youtube from "../../../../../assets/social-icons/iconfinder_youtube-social-network-brand-logo_1820429.png";

const Contact = ({contactTitle, contactValue}) => {


    return (
        <div>
            <ContactImj contactTitle={contactTitle}/>
            <b>{contactTitle}:</b> {contactValue}
        </div>
    )
}

const ContactImj = ({contactTitle}) => {
    switch ( contactTitle ) {
        case "facebook":
            return <img className={styles.contact} src={facebook} alt="facebook"/>
        case "github":
            return <img className={styles.contact} src={github} alt="github"/>
        case "instagram":
            return <img className={styles.contact} src={instagram} alt="instagram"/>
        case "mainLink":
            return <img className={styles.contact} src={mainLink} alt="mainLink"/>
        case "twitter":
            return <img className={styles.contact} src={twitter} alt="twitter"/>
        case "vk":
            return <img className={styles.contact} src={vk} alt="vk"/>
        case "website":
            return <img className={styles.contact} src={website} alt="website"/>
        case "youtube":
            return <img className={styles.contact} src={youtube} alt="youtube"/>
        default :
            return <img className={styles.contact} src={website} alt="website"/>
    }
}

export default Contact