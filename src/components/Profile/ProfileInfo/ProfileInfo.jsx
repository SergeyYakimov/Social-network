import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
          <div>
            <img className={style.nature} src="https://www.nastol.com.ua/download.php?img=201304/1680x1050/nastol.com.ua-46325.jpg"></img>
          </div>
          <div className={style.descriptionBlock}>
            avatar + description
          </div>
    </div>

  )
}

export default ProfileInfo;