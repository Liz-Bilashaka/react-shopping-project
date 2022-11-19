import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
// import data
import data from "../data/data.json";
import { ProductContext } from "../context/productContext";

export default function CartItem() {
  const { cartQuantity, setCartQuantity } = React.useContext(ProductContext);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      {cartQuantity > 0 ? (
        <Grid container spacing={2}>
          <Grid xs={2}>
            <Box
              component="img"
              sx={{
                height: "auto",
                overflow: "hidden",
                width: "100%",
                borderRadius: "0.5rem",
              }}
              
              src={`${process.env.PUBLIC_URL}/${data[0].images[0].thumbnail}`}
              alt={`${process.env.PUBLIC_URL}/${data[0].name}`}
            />
          </Grid>
          <Grid xs={8}>
            <Typography
              variant="body2"
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                width: "100%",
                fontWeight: 400,
                color: "hsl(219, 9%, 45%)",
              }}
            >
              Fall Limited Edition Sneakers
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 400, color: "hsl(219, 9%, 45%)" }}
            >
              $125.00 x {cartQuantity}{" "}
              <b>${(125.0 * cartQuantity).toFixed(2)}</b>
            </Typography>
          </Grid>
          <Grid xs={1}>
            <IconButton aria-label="delete" onClick={() => setCartQuantity(0)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "capitalize",
                "&:hover": {
                  opacity: "0.7",
                },
              }}
            >
              <Typography variant="body2" sx={{ color: "#fff" }}>
                Checkout
              </Typography>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            height: "4rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>Your cart is empty.</Typography>
        </Box>
      )}
    </Box>
  );
}
