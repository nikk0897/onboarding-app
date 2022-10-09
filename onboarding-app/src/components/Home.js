import logo from "./Logo.png";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { useState } from "react";
import Information from "./Information";
import Congratulations from "./Congratulations";
import WorkspaceInfo from "./WorkspaceInfo";
import TeamSelect from "./TeamSelect";
import StepButton from "@mui/material/StepButton";

const steps = [1, 2, 3, 4];

const Home = () => {
  const [activepage, setActivePage] = useState(1);
  // const [complete, setComplete] = useState([]);
  /**
   * Display the page according to the information reuired
   *
   * @returns {Component}
   *    Whether it matches the page which needs the information
   */
  const PageDisplay = (currPage) => {
    if (currPage === 1) {
      return <Information page={activepage} setPage={setActivePage} />;
    } else if (currPage === 2) {
      return <WorkspaceInfo page={activepage} setPage={setActivePage} />;
    } else if (currPage === 3) {
      return <TeamSelect page={activepage} setPage={setActivePage} />;
    } else if (currPage === 4) {
      return <Congratulations setPage={setActivePage} />;
    }
  };

  const handleStep = (step) => {
    setActivePage(step);
  };

  return (
    <>
      <div>
        <img src={logo} className="center" alt="header" />
      </div>
      <Box sx={{ width:"auto", margin:4}}>
        <Stepper activeStep={activepage - 1} style={{width:300}}>
          {steps.map((label) => (
            <Step key={label}>
              <StepButton onClick={() => handleStep(label)}></StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div>{PageDisplay(activepage)}</div>
    </>
  );
};
export default Home;
