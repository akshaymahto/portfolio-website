
import { Box } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import Index from "./components/fun";
import currencycoverter from "./images/currencyconverter.png";
import tictactoe from "./images/tictactoe.png";
import rockpaperscissor from "./images/rockpaperscissor.png";
import { useMediaQuery } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const Fun = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="JustForFun" />

      <Box
        display="grid"
        gridTemplateColumns={isNotMobile ? "repeat(3,1fr)" : "repeat(1,ifr)"}
        gap="2rem"
        maxWidth={"80%"}
        ml="auto"
        mr="auto"
        mt="3rem"
        mb="10rem"
      >
        <Fade cascade damping={0.1}>
          <Index
            img={rockpaperscissor}
            name="Rock Paper Scissors"
            desc="press the button, play your move"
            link="https://akshaymahto.github.io/Rock_Paper_Scissors/"
          />

          <Index
            img={currencycoverter}
            name="Currency Converter"
            desc="Press the button, Get Exchange Rate"
            link="https://akshaymahto.github.io/Currency_Converter/"
          />

          <Index
            img={tictactoe}
            name="Tic Tac Toe"
            desc="Tic Tac Toe game"
            link="https://akshaymahto.github.io/Tic-Tac-Toe/"
          />
        </Fade>
      </Box>

      <Navbar prev="projects" next="contact" />
    </Box>
  );
};

export default Fun;
