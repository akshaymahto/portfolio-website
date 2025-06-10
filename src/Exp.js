
import { Box, Typography } from "@mui/material";
import Heading from "./components/heading";
import Navbar from "./components/navbar";
import solitaireinfosys from "./images/solitaireinfosys.png";
import tcs from "./images/tcs.png";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@mui/material";

const Exp = () => {
  const isNotMobile = useMediaQuery("(min-width:1024px)");
  return (
    <Box mb="10rem">
      <Heading name="Experience" />

      <Box mt="3rem" maxWidth={"80%"} ml="auto" mr="auto">
        <Fade cascade damping={0.5}>
          <Box border="1px solid #13BAD4" mb="2rem">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Systems Engineer - Tata COnsultancy services
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                Nov 2021 - August 2024
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <img
                src={tcs}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="pic"
              />
              

              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
                
Java Developer<br />
Tata Consultancy Services (TCS) – Client: Barclays Bank PLC | Jan 2023 – Aug 2024 | Remote<br />

- Developed and maintained backend services using Java and Spring Boot in a microservices architecture, supporting high-volume banking operations and ensuring system reliability.<br />

- Built and deployed scalable RESTful APIs, enabling seamless integration with frontend systems and third-party services in a secure and efficient manner.<br />

- Designed and optimized SQL and MySQL database schemas, queries, and indexes for improved performance, data consistency, and query speed.<br />

- Implemented NoSQL solutions using MongoDB for flexible, schema-less data storage supporting dynamic business requirements.<br />

- Automated build and deployment workflows using Jenkins, improving CI/CD efficiency and reducing deployment-related incidents.<br />

- Worked in Unix/Linux environments for scripting, deployment automation, and system-level troubleshooting using Shell scripting.<br />

- Participated in all phases of the Agile SDLC, including sprint planning, backlog grooming, daily stand-ups, retrospectives, and sprint reviews.<br />

- Collaborated closely with cross-functional teams—developers, QA, DevOps, and product owners—to gather requirements and deliver high-quality software.<br />

- Monitored application health and infrastructure using Splunk, Kibana, and AppDynamics, proactively identifying and resolving bottlenecks and failures.<br />

- Technologies/Tools: Java · Spring Boot · REST APIs · SQL · MySQL · MongoDB · Jenkins · Unix/Linux · Shell Scripting · Git · Agile · JIRA · Splunk · Kibana · AppDynamics · Microservices Architecture · SDLC · CI/CD Pipelines · DevOps Collaboration
              </Typography>
            </Box>
          </Box>

          <Box border="1px solid #13BAD4">
            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              justifyContent={"space-between"}
              p="0.5rem"
              borderBottom="1px solid #13BAD4"
            >
              <Typography
                color="#6AFFF0"
                fontWeight={"400"}
                fontSize="1.2rem"
                fontStyle={"italic"}
                fontFamily="Poppins"
              >
                {">> "} Android Developer Intern - Solitaire Infosys Pvt. Ltd.
              </Typography>
              <Typography
                color="#13BAD4"
                fontFamily="Poppins"
                fontWeight={"400"}
                fontStyle={"italic"}
              >
                Jun 2019 - jan 2020
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={isNotMobile ? "row" : "column"}
              gap={isNotMobile ? "4rem" : "2rem"}
              p="2rem"
              backgroundColor="#07091B"
            >
              <img
                src={solitaireinfosys}
                width={isNotMobile ? "80px" : "100px"}
                height={isNotMobile ? "80px" : "100px"}
                style={{ objectFit: "cover" }}
                alt="pic"
              />
              <Typography
                fontFamily="Poppins"
                backgroundColor="#07091B"
                fontSize={"15px"}
              >
 Solitaire Infosys Pvt. Ltd. <br />
 Android Developer Intern Jan 2020 – June 2020 | Mohali, Punjab, India <br />

- Developed and maintained mobile applications using Java and Android SDK, contributing to end-to-end Android app lifecycle from concept to deployment.<br />

- Designed intuitive and responsive user interfaces (UI) using XML layouts, ConstraintLayout, and Material Design principles.<br />

- Integrated third-party APIs and services (e.g., Google Maps API, Firebase) for real-time features such as location tracking, notifications, and authentication.<br />

- Utilized Android Studio, Gradle, and Emulator tools for building, testing, and debugging Android apps.<br />

- Worked with SQLite and Room Database for local data storage, and handled REST API calls using Retrofit and Volley.<br />

- Collaborated in Agile development cycles, participated in daily stand-ups, sprint planning, and peer code reviews.<br />

- Conducted rigorous testing using JUnit and Espresso, improving app stability and reducing crash reports.<br />

- Deployed beta builds through Firebase App Distribution for UAT and collected real-time user feedback for performance improvements.<br />

- Technologies & Tools: Java · Android SDK · Android Studio · SQLite · Room · Firebase · Retrofit · REST APIs · XML · Material Design · Git · JIRA · Gradle · JSON · Agile<br />

- Skills Gained: Android App Development · UI/UX Design · API Integration · Firebase Services · Mobile Testing · Debugging · Agile Collaboration · Version Control<br />
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Box>
      <Navbar prev="" next="skills" />
    </Box>
  );
};

export default Exp;
