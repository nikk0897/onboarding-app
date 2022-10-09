import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";

const TeamSelect = ({ page, setPage }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [team, setTeam] = useState("");

  /**
   * This is the function that is to be called for managing the setup enviroment
   * either you want to choose for your work or team work
   */
  const teamHanlder = () => {
    if (team === "single") {
      enqueueSnackbar("You have choosen Eden for your work", {
        variant: "success",
      });
      localStorage.setItem("team", team);
      setPage(page + 1);
    } else if (team === "multiple") {
      enqueueSnackbar("You have choosen Eden for team work", {
        variant: "success",
      });
      localStorage.setItem("team", team);
      setPage(page + 1);
    } else {
      enqueueSnackbar("Please select the team setup", { variant: "warning" });
    }
  };

  return (
    <>
      <Box
        sx={{
          textAlign: "left",
        }}
      >
        <Stack spacing={2}>
          <h2>How are you planning to use Eden?</h2>
          <div className="text-muted">
            We'll streamline your setup experience accordingly
          </div>
          <Stack direction="row" spacing={2} style={{ marginBottom: "15px" }}>
            <button id="team-selected">
              <Box
                onClick={() => {
                  setTeam("single");
                }}
                sx={{
                  width: 180,
                  height: 150,
                  textAlign: "left",
                  padding: 0.5,
                }}
              >
                <PersonIcon />
                <h4 style={{ color: "black" }}>For myself</h4>
                <div className="text-muted">
                  Write better. Think more clearly. stay organized
                </div>
              </Box>
            </button>
            <button id="team-selected">
              <Box
                onClick={() => {
                  setTeam("multiple");
                }}
                sx={{
                  width: 180,
                  height: 150,
                  textAlign: "left",
                  padding: 0.5,
                }}
              >
                <GroupsIcon />
                <h4 style={{ color: "black" }}>With my team</h4>
                <div className="text-muted">
                  Wiki, docs, tasks & projects, all in one place
                </div>
              </Box>
            </button>
          </Stack>
          <Button id="button" fullWidth onClick={teamHanlder}>
            Create Workspace
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default TeamSelect;
