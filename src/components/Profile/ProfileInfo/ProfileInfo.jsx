import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.js';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
          <div className={style.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
          </div>
    </div>

  )
}

export default ProfileInfo;