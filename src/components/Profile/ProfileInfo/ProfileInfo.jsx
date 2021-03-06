import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.js';
import ProfileDataForm from './ProfileDataForm.js';
import userPhoto from './../../../assets/images/avatar.png';

const Contact = ({contactTitle, contactValue}) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue || "no"}</div>
}

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  
  let [editMode, setEditMode] = useState(false);
  //let [status, setStatus] = useState(props.status);

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    })
  }

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
            {editMode ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit}/> 
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
          </div>
    </div>

  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    <div>
      <b>Full name</b>: {profile.fullName}
    </div>
    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    { profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>
  </div>
}

export default ProfileInfo;