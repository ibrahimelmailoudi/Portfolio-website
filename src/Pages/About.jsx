import { useContext } from "react";
import Container from "../components/Container";
import { ThemeContext } from "../Context/ThemeContext";

const About = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Container>
        <h1  className="text-black">ABOUT</h1>
        <p  className="text-black">
          pooooooooooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffpoooooooooooooooooooooo
          ooooooooffffffffffffffffffffffffffffffffffffffffffffpooooooooooooooooooooooooooooooffffffffffffffffffffffffffff
          ffffffffffffffffpooooooooooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffpoooooooooooooo
          ooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffpoooooooooooooooooooooooooooooofffffffffffff
          fffffffffffffffffffffffffffffffpooooooooooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffpoooooooo
          ooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffpooooooooooooooooooooooooooooooff
          ffffffffffffffffffffffffffffffffffffffffffpooooooooooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffff
          pooooooooooooooooooooooooooooooffffffffffffffffffffffffffffffffffffffffffffpooooooooooooooooooooo
          oooooooooffffffffffffffffffffffffffffffffffffffffffffpoooooooooooooooooooooooooooooofffffffffffffffffffffffff
          fffffffffffffffffff
        </p>
    </Container>
  );
};

export default About;
