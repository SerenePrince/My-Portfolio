import { useState, useEffect } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-container" id="hero">
      <img
        src="/assets/images/hero_profile.jpg"
        alt="A profile picture of me, Noah. :)"
        className={isVisible ? "visible" : ""}
      />
      <div className="text-container">
        <h1>
          Hi <span className="wave">👋</span> I&apos;m Noah.
        </h1>
        <h2>
          An aspiring software developer exploring the limitless possibilities
          of computer science.
        </h2>
      </div>
    </div>
  );
}

export default Hero;
