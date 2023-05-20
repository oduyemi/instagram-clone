import { useState } from "react";
import getPhotoUrl from "get-photo-url";
import profileIcon from "../assets/profileIcon.svg"




export const Bio = () => {
    const [userDetails, setUserDetails] = useState({
        name: "Damilola Cole",
        about: "Simple. Easy-going. Lover of life. Crazy AF. Badass foodie",
    })

    const [editFormIsOpen, setEditFormIsOpen] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState({profileIcon})

    const updateProfilePhoto = async () => {
        const newProfilePhoto = await getPhotoUrl("#profilePhotoInput")
        setProfilePhoto(newProfilePhoto)
    }
 
    const updateUserDetails = (event) => {
        event.preventDefault()
        setUserDetails({
            name: event.target.username.value,
            about: event.target.aboutUser.value,
        })
        setEditFormIsOpen(false);
    }

   


    const editForm = (
        <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
            <input type="text" id="" name="username" placeholder="Your name" required />
            <br /><br />
            <input type="text" id="" name="aboutUser" placeholder="About you" required />
            <br />
            <button type="button" className="cancel-button" onClick={() => {setEditFormIsOpen(false)}}>Cancel</button>
            <button type="submit">Save</button>
        </form>
    ) 

    const editButton = <button onClick={() => {setEditFormIsOpen(true)}}>Edit</button>

  
    return(
        <section className="bio">
            <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
                <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                    <div className="profile-photo" role="button" title="Click to edit photo">
                    <img src={profilePhoto} alt="profile" />
                    </div>
                </label>
            <div className="profile-info">
                <p className="name">{userDetails.name}</p>
                <p className="about">{userDetails.about}</p>
                {editFormIsOpen ? editForm: editButton}
            </div>
        </section>
    )
}