import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ButtonGroup from "@mui/material/ButtonGroup";
import { orange } from "@mui/material/colors";

import { ProductContext } from "../context/productContext";

export default function ProductDetail() {
  const [quantity, setQuantity] = React.useState(0);

  // Get and Set the useContext for the child
  const { cartQuantity, setCartQuantity } = React.useContext(ProductContext);

  const addToCart = () =>
    quantity === 0
      ? setCartQuantity(cartQuantity + 1)
      : setCartQuantity(quantity + cartQuantity);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left",  overflow: "hidden", }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="subtitle2">SNEAKER COMPANY</Typography>
        </Grid>
        <Grid xs={12} sx={{ marginBottom: { xs: "0", sm: "1rem" } }}>
          <Typography variant="h3">Fall Limited Edition Sneakers</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="subtitle1">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </Typography>
        </Grid>
        <Grid
          xs={4}
          md={6}
          lg={4}
          sx={{ paddingRight: { xs: "1rem", md: "1rem" }, minWidth:"7rem" }}
        >
          <Typography variant="h4">$125.00</Typography>
        </Grid>
        <Grid
          xs={3}
          md={2}
          sx={{
            color: "hsl(26, 100%, 55%)",
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              backgroundColor: 'hsl(25, 100%, 94%)',
              borderRadius: "0.5rem",
              display: "grid",
              alignContent: "center",
              padding: "0 0.5rem",
              color:'hsl(26, 100%, 55%)'
            }}
          >
            50%
          </Typography>
        </Grid>
        <Grid xs={2} md={2}></Grid>
        <Grid xs={3} md={12}>
          <Typography
            variant="h6"
            sx={{ textDecoration: "line-through", color: "rgba(0,0,0,0.4)" }}
          >
            $250.00
          </Typography>
        </Grid>
        <Grid xs={12} md={5}>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
            fullWidth
            sx={{
              backgroundColor: "rgba(225,225,225,0.4)",
              height: "4rem",
              borderRadius: "1rem",
            }}
            size="large"
          >
            <Button
              variant="text"
              sx={{ fontSize: "2rem" }}
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 0}
            >
              -
            </Button>
            <Button
              disableElevation
              disabled
              variant="text"
              sx={{ fontSize: "1.5rem", color: "#000000" }}
            >
              <Typography variant="body1">
                {quantity}
              </Typography>
            </Button>
            <Button
              variant="text"
              sx={{ fontSize: "2rem" }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid xs={12} md={7}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            startIcon={<ShoppingCartOutlinedIcon />}
            sx={{ 
              textTransform: "capitalize",
               height: "4rem", 
               borderRadius: "1rem", 
               color:'hsl(223, 64%, 98%)',
               '&:hover':{
                opacity:0.5
               }
              }}
            onClick={addToCart}
          >
            <Typography variant="body2">
              Add to cart
            </Typography>
           
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
