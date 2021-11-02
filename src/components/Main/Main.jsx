import React from "react";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";
import s from "./main.module.css"

const Main = (props) => {
    return (
        <div className={s.main}>
            <Navigation/>
            <Content data={props.data} handleAddPost={props.handleAddPost} handleChangePost={props.handleChangePost}/>
        </div>
    )
}

export default Main;