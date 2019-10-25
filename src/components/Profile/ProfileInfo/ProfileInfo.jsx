import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.js';
import userPhoto from './../../../assets/images/avatar.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div>
          <div className={style.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={style.mainPhoto} />
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          </div>
    </div>

  )
}

export default ProfileInfo;