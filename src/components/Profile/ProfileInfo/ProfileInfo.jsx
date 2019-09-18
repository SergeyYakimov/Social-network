import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
          <div>
            <img className={style.nature} src="https://avatars.mds.yandex.net/get-pdb/1613302/f521f50a-b860-46a4-ad74-c71a09c90f1d/s1200?webp=false"></img>
          </div>
          <div className={style.descriptionBlock}>
            avatar + description
          </div>
    </div>

  )
}

export default ProfileInfo;