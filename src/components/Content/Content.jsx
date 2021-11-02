import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import {Route} from "react-router-dom";

import s from "./content.module.css"

const Content = (props) => {

  const profileElement = () => <Profile postsData={props.data.postsData} changedText={props.data.newText} handleAddPost={props.handleAddPost} handleChangePost={props.handleChangePost}/>

  return (
      <div className={s.content}>
        <Route path="/profile" render={profileElement} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
  )
}

export default Content;