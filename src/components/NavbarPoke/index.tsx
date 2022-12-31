import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function NavbarPoke({ name }: any) {
  const pokeNameFormatter = () => {
    return name[0].toUpperCase() + name.substring(1);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <AppBar position="static" style={{ backgroundColor: "#1E1E1E" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <div style={{ fontSize: "20px" }}>
            <h2>{pokeNameFormatter()}</h2>
          </div>
          <img
            style={{ height: "25px" }}
            src={require("../../assets/icons/Vector.png")}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
