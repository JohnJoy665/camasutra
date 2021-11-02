import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";



const MyPosts = (props) => {

    const inputElem = React.createRef();

    const handleAddPost = () => {
        props.handleAddPost({ id: 5, img: "https://avatars.mds.yandex.net/get-zen_doc/251164/pub_5bdf0db863d2ac00ab41ff2a_5bdf0dba6fa35900ab19dfa6/scale_1200", textValue: inputElem.current.value })
    }

    const handleChangePost = () => {
        const text = inputElem.current.value
        props.handleChangePost(text)
    }

    const postElements = props.postsData.map((item, index) => <Post value={item} key={index} />)
    return (
        <div className={s.myPosts}>
            <p className={s.myPosts__title}>Новый пост</p>
            <div className={s.myPosts__creatPostContainer}>
                <textarea
                    value={props.changedText}
                    onChange={handleChangePost}
                    ref={inputElem}
                    className={s.myPosts__textAreaPost} />
                <button onClick={handleAddPost} className={s.myPosts__addButton}>Add Post</button>
            </div>
            {postElements}
        </div>
    )
}

export default MyPosts




