import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import S from "./profile.module.css";

const Profile = (props) => {

    return (
        <div className={S.content}>
            <ProfileImg />
            <ProfileInfo />
            <MyPosts postsData={props.postsData} changedText={props.changedText} handleAddPost={props.handleAddPost} handleChangePost={props.handleChangePost}/>
        </div>
    )
}

export default Profile;