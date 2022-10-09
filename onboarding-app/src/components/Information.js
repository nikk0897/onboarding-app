import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState } from "react";
import { useSnackbar } from "notistack";

const Information = ({ page, setPage }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState({
    fullName: "",
    displayName: "",
  });

  // on change of partiucluar input field,
  const onUpdate = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
    // console.log(name);
  };

  /**
   *  This is the function that is to be called to set the data to the local sotorage
   * @param {{fullName:string , displayName:string}}
   *
   */
  const createWorkspcae = (event,fullName, displayName) => {
    event.preventDefault();
        if (validateUser(fullName, displayName)) {
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("displayName", displayName);
      enqueueSnackbar("Data enterd successfully !", { variant: "success" });
      setPage(page + 1);
    }
  };

  /**
   * Validate the input values so that any bad or illegal values are not passed to the backend.
   *
   * @param {{ fullName: string, displayName: string }}
   *
   * @returns {boolean}
   *    Whether validation has passed or not
   *
   * -    Check that fullName field is not an empty value - "fullName is a required field"
   * -    Check that displayName field is not an empty value - "displayName is a required field"
   * -    Check that fullname and displayName length  - "greater or equal to 4"
   * */
  const validateUser = (fName, dName) => {
    if (fName === "") {
      enqueueSnackbar("Full name is a required field", { variant: "warning" });
      return false;
    } else if (dName === "") {
      enqueueSnackbar("Display name is a required field", {
        variant: "warning",
      });
      return false;
    } else if (fName.length >= 4 && dName.length >= 4) {
      return true;
    } else {
      enqueueSnackbar(
        "The length of full name and display name must be greater or equal to 4",
        { variant: "warning" }
      );
      return false;
    }
  };
  return (
    <>
      <form onSubmit={(e) => createWorkspcae(e,name.fullName, name.displayName)}>
        <Box
          sx={{
            width: "auto",
            height: "auto",
            textAlign: "left",
            marginTop: 3,
          }}
        >
          <Stack spacing={2}>
            <div className="heading">
              <h2>Welcome! First things first...</h2>
              <div className="text-muted">You can always change them later</div>
            </div>
            <label>Full Name</label>
            <TextField
              id="outlined-basic"
              placeholder="Steve Jobs"
              variant="outlined"
              name="fullName"
              value={name.fullName}
              onChange={onUpdate}
            />
            <label>Display Name</label>
            <TextField
              id="outlined-basic"
              placeholder="Steve"
              variant="outlined"
              name="displayName"
              value={name.displayName}
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
export default Information;
