import { TypeAnimation } from "react-type-animation";
import { useProfile } from "@/hooks";

export const LandingAboutMe = () => {
  const { base, loop } = useProfile();

  const writer = loop.flatMap((value) => [base, 150, base + value, 150]);

  return (
    <TypeAnimation
      sequence={writer}
      repeat={Infinity}
      style={{
        padding: 4,
        color: "white",
        backgroundColor: "black",
        display: "inline",
        fontSize: "1.5em",
      }}
    />
  );
};
