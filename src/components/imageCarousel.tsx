import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import ImageDialog from "./imageDialog";

import data from "../data/data.json";

function ImageCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data[0].images.length;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

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
    <Box sx={{ maxWidth: 500, flexGrow: 1, overflow: "hidden" }}>
      {data[0].images.map((image, index) => (
        <div key={index++}>
          {Math.abs(activeStep - index) <= 0 ? (
            <div>
              <Box
                onClick={handleToggle}
                component="img"
                sx={{
                  height: "auto",
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: { xs: 0, sm: "1rem" },
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                  },
                }}
                src={`${process.env.PUBLIC_URL}/${image.bigImage}`}
                alt="shoe"
              />
              {/* DIALOG HERE */}
              <ImageDialog open={open} close={handleClose} />
              {/* DIALOG HERE */}
            </div>
          ) : null}
        </div>
      ))}

      <Box
        sx={{
          position: "relative",
          bottom: "14rem",
          backgroundColor: "transparent",
          display: { xs: "flex", sm: "none" },
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          padding: "0 1.5rem",
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
        sx={{ display: { xs: "none", sm: "flex" }, marginTop: "1rem" }}
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
                  activeStep === index ? `1.5px solid hsl(26, 100%, 55%)` : "",
                "&:hover": {
                  border: `1px solid hsl(26, 100%, 55%)`,
                  opacity: 0.5,
                },
                cursor: "pointer",
              }}
              src={`${process.env.PUBLIC_URL}/${image.thumbnail}`}
              alt="shoe"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImageCarousel;
