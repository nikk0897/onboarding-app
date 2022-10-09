import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";

const WorkspaceInfo = ({ page, setPage }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({
    workspaceName: "",
    workspaceURL: "",
  });

  // on change of partiucluar input field,
  const onUpdate = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(name);
  };

  /**
   * This is the function that is to be called to set the data to the local sotorage
   *
   * @param {{workspaceName:string, workspaceURL}}
   *
   */
  const createWorkspcae = (event, workspaceName, workspaceURL) => {
    event.preventDefault();
    if (validateUser(workspaceName)) {
      localStorage.setItem("workspaceName", workspaceName);
      localStorage.setItem("workspaceURL", workspaceURL);
      enqueueSnackbar("Data enterd successfully !", { variant: "success" });
      setPage(page + 1);
    }
  };

  /**
   * Validate the input values so that any bad or illegal values are not passed to the backend.
   *
   * @param {{ workspaceName: string}}
   *
   * @returns {boolean}
   *    Whether validation has passed or not
   *
   * -    Check that workspaceName field is not an empty value - "fullName is a required field"
   * -    Check that workspaceName length  - "greater or equal to 4"
   * */
  const validateUser = (wName) => {
    if (wName === "") {
      enqueueSnackbar("workspace Name is a required field", {
        variant: "warning",
      });
      return false;
    } else if (wName.length >= 4) {
      if(wName !== localStorage.getItem("displayName")){
        return true;
      }
      else{
        enqueueSnackbar(
          "The workspace name and display name must be different",
          { variant: "warning" }
        );
        return false;
      }
     
    } else {
      enqueueSnackbar(
        "The length of workspace name must be greater or equal to 4",
        { variant: "warning" }
      );
      return false;
    }
  };

  return (
    <>
      <form
        onSubmit={(e) =>
          createWorkspcae(e, data.workspaceName, data.workspaceURL)
        }
      >
        <Box
          sx={{
            width: "auto",
            height: 400,
            textAlign: "left",
            marginTop: 3,
          }}
        >
          <Stack spacing={2}>
            <div className="heading">
              <h2>Let's set up a home for all your work</h2>
              <div className="text-muted">
                You can always create another workspace later
              </div>
            </div>
            <label>Workspace Name</label>
            <TextField
              id="outlined-basic"
              placeholder="Eden"
              variant="outlined"
              name="workspaceName"
              value={data.workspaceName}
              onChange={onUpdate}
            />
            <label>
              Workspace URL <span className="text-muted">(optional)</span>
            </label>
            <TextField
              id="outlined-basic"
              placeholder="www.eden.com"
              variant="outlined"
              name="workspaceURL"
              value={data.workspaceURL}
              onChange={onUpdate}
            />
            <Button fullWidth id="button" type="submit">
              Create Workspace
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};
export default WorkspaceInfo;
