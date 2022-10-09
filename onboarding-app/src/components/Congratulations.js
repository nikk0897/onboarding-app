import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Congratulations = ({ setPage }) => {
  let name = localStorage.getItem("displayName");
  // console.log(name);

  const LaunchEden = () => {
    let userData = {
      fullName: localStorage.getItem("fullName"),
      displayName: name,
      workspaceName: localStorage.getItem("workspaceName"),
      workspaceURL: localStorage.getItem("workspaceURL"),
      team: localStorage.getItem("team"),
    };
    console.log(userData);
    setPage(1);
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          width: "auto",
          height: 300,
        }}
      >
        <Stack spacing={2}>
          <div className="center">
            <CheckCircleIcon className="circleIcon" />
          </div>
          <h2>Congratulations! {name}</h2>
          <div className="text-muted">
            You have completed onboarding, you can start using the Eden
          </div>
          <Button id="button" onClick={LaunchEden}>
            Launch Eden
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default Congratulations;
