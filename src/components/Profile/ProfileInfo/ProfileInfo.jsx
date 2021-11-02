import React from "react";
import s from "./profileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img className={s.profileInfo__img} src="https://mvclip.ru/content/images/artists/1/238278d873004dccaf85a6d06d8e1726.jpg" alt=""/>
            <p className={s.profileInfo__person}>Джо Дассен</p>
        </div>
    )
}

export default ProfileInfo;