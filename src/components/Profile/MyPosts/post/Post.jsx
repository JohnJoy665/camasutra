import React from "react";
import s from "./post.module.css"

const Post = (props) => {


    return (
        <div className={s.post}>
            <img className={s.post__img} src={props.value.img} alt="" />
            <p className={s.post__content}>{props.value.textValue}</p>
        </div>
    )
}

export default Post