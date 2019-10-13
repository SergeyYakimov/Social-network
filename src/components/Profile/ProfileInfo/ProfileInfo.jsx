import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader.js';
import ProfileStatus from './ProfileStatus.js';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
        {/*<div>
            //<img className={style.nature} src="https://avatars.mds.yandex.net/get-pdb/1613302/f521f50a-b860-46a4-ad74-c71a09c90f1d/s1200?webp=false"></img>
          </div>*/}
          <div className={style.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          </div>
    </div>

  )
}

export default ProfileInfo;