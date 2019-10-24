import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.js';

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
          <div className={style.descriptionBlock}>
            <img src={profile.photos.large} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          </div>
    </div>

  )
}

export default ProfileInfo;