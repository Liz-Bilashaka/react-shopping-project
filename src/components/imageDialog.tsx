import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Close from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import data from "../data/data.json";

function ImageDialog(Props: any) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data[0].images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSelectThumbnail = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Dialog
      open={Props.open}
      onClose={Props.close}
      keepMounted
      disableEscapeKeyDown
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        backgroundColor: "rgba(0,0,0,0.8)",
        display: { xs: "none", sm: "block" },
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          backgroundColor: "transparent",
        },
      }}
    >
      <DialogContent>
        <Box
          sx={{
            display: "block",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "hsl(26, 100%, 55%)",
            marginLeft: "29rem",
          }}
        >
          <Close onClick={Props.close} />
        </Box>
        <Box
          sx={{
            maxWidth: 500,
            flexGrow: 1,
          }}
        >
          {data[0].images.map((image, index) => (
            <div key={index++}>
              {Math.abs(activeStep - index) <= 0 ? (
                <Box       
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: { xs: 0, sm: "1rem" },
                  }}
                  src={image.bigImage}
                  alt="shoe"
                />
              ) : null}
            </div>
          ))}

          <Box
            sx={{
              position: "relative",
              bottom: "16rem",
              backgroundColor: "transparent",
              display: { xs: "none", sm: "flex" },
              width: "107%",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
              left: "-1rem",
              overflowX: "hidden",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: "50%",
                width: "2rem",
                height: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            </Box>
          </Box>
          <Grid
            container
            spacing={3}
            sx={{
              display: { xs: "none", sm: "flex" },
              marginTop: "1rem",
            }}
          >
            {data[0].images.map((image, index) => (
              <Grid item xs={3} key={index++}>
                <Box
                  component="img"
                  onClick={() => handleSelectThumbnail(index - 1)}
                  sx={{
                    height: "auto",
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: "0.5rem",
                    opacity: activeStep === index ? 0.5 : 1,
                    border:
                      activeStep === index
                        ? `1.5px solid hsl(26, 100%, 55%)`
                        : "",
                    "&:hover": {
                      border: "1px solid hsl(26, 100%, 55%)",
                      opacity: 0.6,
                      backgroundColor: "white",
                    },

                    cursor: "pointer",
                  }}
                  src={image.thumbnail}
                  alt="shoe"
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ImageDialog;
