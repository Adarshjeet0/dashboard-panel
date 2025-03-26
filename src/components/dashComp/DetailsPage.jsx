// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Typography,
//   Container,
//   Avatar,
//   Menu,
//   MenuItem,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   TextField,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import LogoutIcon from "@mui/icons-material/Logout";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import { useNavigate } from "react-router-dom";

// const mockData = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];

// const DetailsPage = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState(mockData);
//   const [drawerOpen, setDrawerOpen] = useState(true);
//   const navigate = useNavigate();

//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   const handleDeleteAccount = () => {
//     localStorage.clear();
//     navigate("/signup");
//   };

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <>
//     <Box sx={{ display: "flex" }}>
//       {/* Sidebar */}
      
      
//       {/* Navbar */}
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" color="green" onClick={toggleDrawer}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <IconButton onClick={handleMenuOpen}>
//             <Avatar />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleLogout}>
//               <LogoutIcon sx={{ marginRight: 1 }} /> Logout
//             </MenuItem>
//             <MenuItem onClick={handleDeleteAccount}>
//               <DeleteIcon sx={{ marginRight: 1 }} /> Delete Account
//             </MenuItem>
//           </Menu>
//         </Toolbar>
//       </AppBar>
      
//       {/* Main Content */}
      
//     </Box>
//     <Box sx={{ display: "flex" , border:"3px solid black"}}>
//         <Box sx={{border:"2px solid red",width:"20%"}}>
//             <Drawer 
//         variant="persistent" 
//         anchor="left" 
//         open={drawerOpen} 
//         sx={{ 
//           width: 240, 
//           flexShrink: 0, 
//           "& .MuiDrawer-paper": {
//             width: 240,
//             top: "64px" // Ensures the sidebar does not overlap the navbar
//           }
//         }}
//       >
//         <List>
//           <ListItem button>
//             <ListItemText primary="Details" />
//           </ListItem>
//         </List>
//       </Drawer>
//         </Box>
//         <Box sx={{border:"2px solid green"  ,width:"78%"}} >
//             <Container sx={{ mt: 2 }}>
//                 <TextField
//                 label="Search"
//                 variant="outlined"
//                 fullWidth
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 sx={{ mb: 2 }}
//                 />
//                 <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                     <TableRow>
//                         <TableCell>ID</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Email</TableCell>
//                     </TableRow>
//                     </TableHead>
//                     <TableBody>
//                     {data
//                         .filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
//                         .map((row) => (
//                         <TableRow key={row.id}>
//                             <TableCell>{row.id}</TableCell>
//                             <TableCell>{row.name}</TableCell>
//                             <TableCell>{row.email}</TableCell>
//                         </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//                 </TableContainer>
//             </Container>
//         </Box>
//     </Box>

//     </>
//   );
// };

// export default DetailsPage;



import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import DataTable from "./DataTable";

const mockData = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

const DetailsPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(mockData);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", false);
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    localStorage.clear();
    navigate("/signup");
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* Navbar */}
        <AppBar position="fixed">
          <Toolbar>
            {/* <IconButton edge="start" sx={{ color: "white" }} onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton> */}
            <Box sx={{ flexGrow: 1 }}>
              <img src="./assets/algoroot_logo.png" alt="companyLogo" style={{ height: 40 }} />
            </Box>

            {/* <Typography variant="h6" sx={{ flexGrow: 1 }}> */}
            {/* </Typography> */}
            <IconButton onClick={handleMenuOpen}>
              <Avatar />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleLogout}>
              
                <Person2Icon sx={{ marginRight: 1 }} /> {name}
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <EmailIcon sx={{ marginRight: 1 }} /> {email}
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <LogoutIcon sx={{ marginRight: 1 }} /> Logout
              </MenuItem>
              <MenuItem onClick={handleDeleteAccount}>
                <DeleteIcon sx={{ marginRight: 1 }} /> Delete Account
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        {/* Sidebar */}
        <Drawer
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": { width: 240, top: "64px" }, // Adjust to avoid overlapping navbar
          }}
        >
          <List>
            <ListItem component="button">
              <ListItemText primary="Details" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>
          <Container sx={{
            width: "80vw", // Set container width (adjust as needed)
            height: "80vh", // Set container height (adjust as needed)
            display: "flex",
            flexDirection: "column", // Keeps search box on top and DataTable below
            gap: 2, // Adds spacing between elements
            p: 2, // Padding inside container
          }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ mb: 2 }}
            />
            {/* <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .filter((row) => row.name.toLowerCase().includes(search.toLowerCase()))
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer> */}
            <DataTable />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DetailsPage;





// import React, { useState } from "react";
// import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemText, Avatar, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const drawerWidth = 240;

// const mockData = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];

// const DetailsPage = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const filteredData = mockData.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const drawer = (
//     <Box sx={{ width: drawerWidth, bgcolor: "#1976D2", height: "100vh", color: "white", p: 2 }}>
//       <Typography variant="h6" fontWeight="bold">Dashboard</Typography>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* Sidebar */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{ "& .MuiDrawer-paper": { width: drawerWidth } }}
//       >
//         {drawer}
//       </Drawer>
//       <Box sx={{ flexGrow: 1 }}>
//         {/* Navbar */}
//         <AppBar position="static" sx={{ bgcolor: "#1976D2" }}>
//           <Toolbar>
//             <IconButton edge="start" color="inherit" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
//             <Avatar sx={{ bgcolor: "white", color: "#1976D2" }}>
//               <AccountCircleIcon />
//             </Avatar>
//           </Toolbar>
//         </AppBar>
//         {/* Content */}
//         <Box sx={{ p: 3, width: "100%" }}>
//           <TextField
//             label="Search"
//             variant="outlined"
//             fullWidth
//             sx={{ mb: 2 }}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Email</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredData.map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell>{row.id}</TableCell>
//                     <TableCell>{row.name}</TableCell>
//                     <TableCell>{row.email}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default DetailsPage;



// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box, Paper, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Drawer, List, ListItem, ListItemText, Avatar } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const mockData = [
//   { id: 1, name: 'Alice', email: 'alice@example.com' },
//   { id: 2, name: 'Bob', email: 'bob@example.com' },
//   { id: 3, name: 'Charlie', email: 'charlie@example.com' },
//   { id: 4, name: 'David', email: 'david@example.com' },
//   { id: 5, name: 'Eva', email: 'eva@example.com' },
// ];

// function DetailsPage() {
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(3);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const handleSearch = (event) => setSearch(event.target.value);
//   const handlePageChange = (_, newPage) => setPage(newPage);
//   const handleRowsPerPageChange = (event) => setRowsPerPage(parseInt(event.target.value, 10));

//   const filteredData = mockData.filter((row) =>
//     row.name.toLowerCase().includes(search.toLowerCase()) ||
//     row.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box sx={{ display: 'flex' , border:"5px solid yellow"}}>
//       {/* Sidebar */}
      

//       <Box sx={{ flexGrow: 1 ,border:"5px solid green"}}>
//         {/* Navbar */}
//         <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
//           <Toolbar>
//             <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1 }}>Company Logo</Typography>
//             <Avatar>
//               <AccountCircle />
//             </Avatar>
//           </Toolbar>
//         </AppBar>

//         {/* Content */}
//         <Box sx={{ padding: 2 , border:"5px solid black"}}>

//           <Paper sx={{ padding: 2, marginBottom: 2, display: 'flex', alignItems: 'center' }}>
//             <InputBase placeholder="Search" value={search} onChange={handleSearch} sx={{ marginLeft: 1, flex: 1 }} />
//           </Paper>

//           <TableContainer component={Paper}>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell>ID</TableCell>
//                   <TableCell>Name</TableCell>
//                   <TableCell>Email</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
//                   <TableRow key={row.id}>
//                     <TableCell>{row.id}</TableCell>
//                     <TableCell>{row.name}</TableCell>
//                     <TableCell>{row.email}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//             <TablePagination
//               rowsPerPageOptions={[3, 5, 10]}
//               component="div"
//               count={filteredData.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handlePageChange}
//               onRowsPerPageChange={handleRowsPerPageChange}
//             />
//           </TableContainer>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default DetailsPage;












// import React, { useState } from "react";
// import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const mockData = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
//   { id: 4, name: "David", email: "david@example.com" },
//   { id: 5, name: "Emma", email: "emma@example.com" },
//   { id: 6, name: "Frank", email: "frank@example.com" },
//   { id: 7, name: "Grace", email: "grace@example.com" },
//   { id: 8, name: "Henry", email: "henry@example.com" },
//   { id: 9, name: "Ivy", email: "ivy@example.com" },
//   { id: 10, name: "Jack", email: "jack@example.com" }
// ];

// const ITEMS_PER_PAGE = 5;

// const DetailsPage = () => {
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [open, setOpen] = useState(true);

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };

//   const filteredData = mockData.filter((row) =>
//     row.name.toLowerCase().includes(search.toLowerCase()) ||
//     row.email.toLowerCase().includes(search.toLowerCase())
//   );

//   const paginatedData = filteredData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Navbar */}
//       <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
//         <Toolbar>
//           <IconButton edge="start" color="inherit" onClick={() => setOpen(!open)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Company Logo
//           </Typography>
//           <IconButton color="inherit">
//             <AccountCircleIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
      
//       {/* Sidebar */}
//       <Drawer 
//         variant="persistent" 
//         anchor="left" 
//         open={open} 
//         sx={{ 
//           width: 240, 
//           flexShrink: 0, 
//           "& .MuiDrawer-paper": {
//             width: 240,
//             top: "64px" // Ensures the sidebar does not overlap the navbar
//           }
//         }}
//       >
//         <List>
//           <ListItem button>
//             <ListItemText primary="Details" />
//           </ListItem>
//         </List>
//       </Drawer>
      
//       {/* Main Content */}
//       <Container sx={{ mt: 10, ml: open ? "240px" : "0px", width: "100%" }}>
//         <TextField label="Search" variant="outlined" fullWidth margin="normal" value={search} onChange={handleSearch} />
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((row) => (
//                 <TableRow key={row.id}>
//                   <TableCell>{row.id}</TableCell>
//                   <TableCell>{row.name}</TableCell>
//                   <TableCell>{row.email}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Pagination count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)} page={page} onChange={(e, value) => setPage(value)} sx={{ mt: 2, display: "flex", justifyContent: "center" }} />
//       </Container>
//     </div>
//   );
// };

// export default DetailsPage;
