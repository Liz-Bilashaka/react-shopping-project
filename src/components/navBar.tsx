import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import Cart from "./cart";
import logo from "../logo.svg";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  quantity?: number;
}

const drawerWidth = 240;
const navItems = ["Collections", "Men", "Women", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window, quantity } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState("0");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <Typography variant="h6" sx={{ my: 2, ml: 2, cursor: "pointer" }}>
        <img src={`${process.env.PUBLIC_URL}/images/icon-close.svg`} alt="logo" />
      </Typography>
      <Divider sx={{ display: { xs: "none", sm: "block" } }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left", fontWeight: "bold" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minWidth: "321px" }}>
      <AppBar
        component="nav"
        color="default"
        variant="elevation"
        sx={{
          position: "relative",
          marginBottom: "1rem",
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Toolbar
          variant="regular"
          disableGutters={false}
          sx={{ marginBottom: "1.5rem" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000000" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              paddingRight: 6,
              paddingLeft: 0,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
            <TabContext value={value}>
              <TabList
                onChange={handleChange}
                aria-label="Nav Tab"
                sx={{ height: "7.6rem" }}
              >
                {navItems.map((item, index) => (
                  <Tab
                    label={item}
                    value={(index++).toString()}
                    key={index++}
                    sx={{
                      color: "hsl(219, 9%, 45%)",
                      fontSize: {
                        sm: "8px",
                        md: "1rem",
                        textTransform: "none",
                        minWidth: "40px",
                        height: "7rem",
                        "&:hover": {
                          color: "hsl(220, 13%, 13%)",
                        },
                      },
                    }}
                  />
                ))}
              </TabList>
            </TabContext>
          </Box>
          <Box sx={{ display: { xs: "flex", sm: "none" }, flexGrow: 1 }}>
            <img src={logo} alt="logo" />
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton
              sx={{ p: 1, "&:hover": { backgroundColor: "transparent" } }}
              onClick={handleClick}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton sx={{ p: 1 }}>
              <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/images/image-avatar.png`}/>
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                width: { xs: "100%", sm: "20rem", md: "20rem" },
                height: { xs: "14rem", sm: "12rem" },
              },
            }}
            sx={{
              left: { xs: "0", sm: "50px" },
              marginTop: { xs: "2.5rem", sm: "0.5rem" },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
                cursor: "auto",
              }}
            >
              <Typography variant="body1">Cart</Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <Cart />
            </MenuItem>
          </Menu>
        </Toolbar>

        <Divider
          sx={{
            marginBottom: "1.5rem",
            display: { xs: "none", sm: "block" },
            position: "relative",
            bottom: "1.6rem",
          }}
        />
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
