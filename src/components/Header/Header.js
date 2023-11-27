"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";
import { SoundContext } from "../SoundProvider/SoundProvider";

function Header() {
  const id = React.useId();

  const { isMuted, toggleMute } = React.useContext(SoundContext);
  // TODO: Global state?
  // const soundEnabled = true;

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button onClick={toggleMute}>
          {isMuted ? <VolumeX /> : <Volume2 />}
          <VisuallyHidden>
            {isMuted ? "Enable sound effects" : "Disable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;
