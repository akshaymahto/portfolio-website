
import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/navbar";
import bike from "./images/bike.png";
import tictactoe1 from "./images/tictoctoe1.png";
import linear from "./images/linear.png";
import heart from "./images/heart.png";
import Knn from "./images/Knn.png";
import { Fade } from "react-awesome-reveal";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ProjectComponent from "./components/projects";

const Projects = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box>
      <Heading name="Projects" />

      <Box
        display="flex"
        maxWidth="80%"
        ml="auto"
        mr="auto"
        mt="3rem"
        flexDirection={"column"}
        gap="2rem"
        mb="10rem"
      >
        <Fade cascade damping={0.1}>
          <ProjectComponent
            title="Predicting Bike Sharing Demand with Neural Network using Machine Learning R"
            description="Working with the bike sharing demand dataset from Kaggle. The dataset is comprised of hourly bike rental data spanning two years (2011-2012). The goal is to predict the total count of bike rentals based on features such as date, temperature, whether it is holiday, working day, etc. This data is time-series because the observations are in a sequence and there is a temporal order between them. However for the sake of this assignment, let’s assume that the observations are independent and identically distributed (i.i.d)."
            tech="R, RStudio, Keras, TensorFlow, dplyr, ggplot2, caret, tidyr, readr, corrplot, neural networks, regression modeling, RMSE"
            img={bike}
            link="https://github.com/akshaymahto/Predicting-Bike-Sharing-Demand-with-Neural-Networks"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Tic Tac Toe using Javascript"
            description="Tic Tac Toe, also known as Noughts and Crosses, is a classic and simple strategy game played between two players. It is typically played on a 3x3 grid, but variations with larger grids also exist. The objective is to place three of your marks (X or O) in a horizontal, vertical, or diagonal row before your opponent does."
            tech="HTML, CSS, JavaScript, DOM Manipulation, Event Handling, Algorithm Design, Game Logic Implementation"
            img={tictactoe1}
            link="https://akshaymahto.github.io/Tic-Tac-Toe/"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Exploring Heart Disease Dataset using Machine Learning with R."
            description="Going to explore the heart disease dataset from UCI. This dataset con- tains 76 attributes but only 14 of them are relevant and used in publications. These 14 attributes are already processed and extracted from the dataset. Download the four processed datasets: pro- cessed.cleveland.data, processed.hungarian.data, processed.switzerland.data, processed.va.data from Canvas."
            tech="R, RStudio, dplyr, tidyr, ggplot2, caret, glm, rpart, corrplot, ROC/AUC analysis, classification modeling"
            img={heart}
            link="https://github.com/akshaymahto/Machine-Learning-R"
            isNotMobile={isNotMobile}
          />

          <ProjectComponent
            title="Linear Logistic and Decision Trees using Machine learning with R."
            description="Using the Adult dataset from UCI. The goal is to use a logistic regression and a decision tree model to predict the binary variable income (> 50K or <= 50K) based on the other attributes in the dataset. Read the attribute information from the website, then click on the “DOWNLOAD” on the website and obtain the dataset of “adult.data”"
            tech="R, RStudio, dplyr, tidyr, ggplot2, glm, rpart, caret, ROCR, pROC, logistic regression, decision tree, classification metrics"
            img={linear}
            link="https://github.com/akshaymahto/Linear-Logistic-Regression-and-Decision-Trees"
            isNotMobile={isNotMobile}
          />

          <Box flexBasis="100%">
            <Typography
              fontSize="1.5rem"
              fontFamily={"Poppins"}
              color="#AEE3EB"
              fontWeight={400}
              pr="1rem"
              pt="0.5rem"
              pl="1rem"
            >
              {"    >>  "}k-Nearest Neighbors and Naive Bayes Classifiers using Machine Learning with R.
            </Typography>
            <Box display="flex" flexDirection={isNotMobile ? "row" : "column"}>
              <img
                src={Knn}
                width={isNotMobile ? "40%" : "100%"}
                alt="pic"
                style={{
                  padding: "1rem",
                }}
              />
              <Typography fontFamily={"Poppins"} p="1rem" color="#FFFFFF">
              Download the dataset bank-full.csv from Canvas. For this assignment, we will be using the bank marketing dataset from UCI. The data has 17 attributes and is related to marketing campaigns (phone calls) of a Portuguese banking institution. The classification goal is to predict if the client will subscribe a term deposit (the variable “y” in the dataset).
                <br />
                <br />
                <Typography color="#7FE3F2" fontFamily={"Poppins"}>
                R, RStudio, dplyr, tidyr, ggplot2, caret, glm, KNN, pROC, readr, classification modeling, one-hot encoding, feature engineering, model evaluation
                  <br />
                  <br />
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  border="1px solid white"
                  width="fit-content"
                  borderRadius="5px"
                  padding="0.3rem"
                >
                  <a
                    href="https://github.com/akshaymahto/k-NN-and-Naive-Bayes-Classifiers"
                    fontSize="10px"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                    <OpenInNewIcon fontSize="small" />
                  </a>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>

      <Navbar prev="skills" next="fun" />
    </Box>
  );
};

export default Projects;
