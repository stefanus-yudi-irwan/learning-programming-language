import { ProfileContext } from "./ProfileContext.jsx";
import Profile from "./Profile.jsx"
import ProfileAddress from "./ProfileAddress.jsx";
import ProfileForm from "./ProfileForm.jsx";
import { useState } from "react";

export default function ProfileApp() {
    const [name, setName] = useState("Yudi");

    return (
        <>
            <ProfileContext.Provider value={name}>
                <h1>Profile App</h1>
                <ProfileForm name={name} setName={setName}/>
                <Profile/>
                <ProfileAddress/>
            </ProfileContext.Provider>
        </>
    )
}