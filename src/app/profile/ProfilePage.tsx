// library imports
import { SessionProvider } from "next-auth/react";
import React from 'react';
// internal imports
import { auth } from "../../components/Auth/auth";

//component imports
import Profile from "../../components/Profile/profile";

const ProfilePage = async() => {
    const session = await auth();
    return (
        <SessionProvider session={session}>
            <Profile />
        </SessionProvider>
    );
}

export default ProfilePage