"use client";
import React, { Children } from "react";

export const SoundContext = React.createContext();

export default function SoundProvider({ children }) {
    const [isMuted, setIsMuted] = React.useState(false);
    return (
        <SoundContext.Provider value={{ isMuted, toggleMute }}>
            {children}
        </SoundContext.Provider>
    );

    function toggleMute() {
        setIsMuted(!isMuted);
    }
}
