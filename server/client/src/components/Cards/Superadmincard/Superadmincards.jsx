// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket, FaMinusCircle } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../Public/logo.png";
// import loginLogo from "../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Cards = () => {
//   const [cardDetails, setCardDetails] = useState({});
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const [showActive, setShowActive] = useState(true); // Define showActive state
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/cards/me",
//         config
//       );
//       setCardDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="dashboard carddash-dashboard">
//       <aside className="sidebar-carddash-sidebar">
//         <div className="logo-container carddash-logo-container">
//           <div className="logo carddash-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="nav-container carddash-nav-container">
//           <nav className="nav carddash-nav">
//             <ul>
//               <li
//                 className="nav-item carddash-nav-item"
//                 style={{ marginTop: "120px" }}
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaUserCircle className="nav-icon carddash-nav-icon" />{" "}
//                 Organizations
//               </li>
//               <li
//                 className="nav-item carddash-nav-item"
//                 onClick={() => handleNavigation("/admindash")} // Navigate to Admin Dashboard
//               >
//                 <FaRocket className="nav-icon carddash-nav-icon" /> Program
//                 Manager
//               </li>
//               <li
//                 className="nav-item carddash-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaRocket className="nav-icon carddash-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="main-content carddash-main-content">
//         <header className="header carddash-header">
//           <span
//             className="founder carddash-founder"
//             style={{ fontSize: "24px" }}
//           >
//             <FiMenu style={{ color: "#909090" }} /> Superadmin Dashboard
//           </span>

//           <div className="profile-section carddash-profile-section">
//             <div className="user-info carddash-user-info">
//               <span className="user-initials carddash-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="user-details carddash-user-details">
//                 <span className="user-name carddash-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="drop carddash-drop" />
//                 </span>
//                 <span className="user-email carddash-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="logout-button carddash-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="content carddash-content">
//           <div className="cards-container">
//             <div
//               className="card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 3
//               </div>
//               <div className="card-label">Active Organization</div>
//             </div>
//             <div
//               className="card"
//               onClick={() => handleNavigation("/SuperadminDash/inactive")}
//             >
//               <div
//                 className="card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 9
//               </div>
//               <div className="card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 406
//               </div>
//               <div className="card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 50
//               </div>
//               <div className="card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 0
//               </div>
//               <div className="card-label">Active Startup</div>
//             </div>
//             <div
//               className="card"
//               onClick={() => handleNavigation("/SuperadminDash/inactive")}
//             >
//               <div
//                 className="card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 0
//               </div>
//               <div className="card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Cards;




//api working as per count

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket, FaMinusCircle } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../Public/logo.png";
// import loginLogo from "../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Cards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [activeOrgs, inactiveOrgs] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "120px" }}
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organizations
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/admindash")} // Navigate to Admin Dashboard
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span className="card-founder" style={{ fontSize: "24px" }}>
//             <FiMenu style={{ color: "#909090" }} /> Superadmin Dashboard
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Cards;







// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket, FaMinusCircle } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../Public/logo.png";
// import loginLogo from "../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Cards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [activeOrgs, inactiveOrgs] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "120px" }}
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organizations
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/admindash")} // Navigate to Admin Dashboard
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span className="card-founder" style={{ fontSize: "24px" }}>
//             <FiMenu style={{ color: "#909090" }} /> Superadmin Dashboard
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Cards;




//org active counts

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../Public/logo.png";
// import loginLogo from "../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Cards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [activeOrgs, inactiveOrgs] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route) => {
//     navigate(route);
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "120px" }}
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organizations
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/admindash")} // Navigate to Admin Dashboard
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span className="card-founder" style={{ fontSize: "24px" }}>
//             <FiMenu style={{ color: "#909090" }} /> Superadmin Dashboard
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Cards;










//reg 7a ug
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../Public/logo.png";
// import loginLogo from "../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Cards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [activeOrgs, inactiveOrgs] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route, state) => {
//     navigate(route, { state });
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "120px" }}
//                 onClick={() => handleNavigation("/SuperadminDash", { showActive: true })} // Show active IDs
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organizations
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/admindash")} // Navigate to Admin Dashboard
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span className="card-founder" style={{ fontSize: "24px" }}>
//             <FiMenu style={{ color: "#909090" }} /> Superadmin Dashboard
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash", { showActive: true })}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash", { showActive: false })}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Cards;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../Public/logo.png";
// import loginLogo from "../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Cards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [
//         activeOrgs,
//         inactiveOrgs,
//         activeProgramManagers,
//         inactiveProgramManagers,
//       ] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//         axios.get("http://localhost:5000/api/programmanagers/active", config),
//         axios.get("http://localhost:5000/api/programmanagers/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//         activeProgramManagers: activeProgramManagers.data.length,
//         inactiveProgramManagers: inactiveProgramManagers.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route, state) => {
//     navigate(route, { state });
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "120px" }}
//                 onClick={() =>
//                   handleNavigation("/SuperadminDash", { showActive: true })
//                 } // Show active IDs
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organizations
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/admindash")} // Navigate to Admin Dashboard
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")} // Show active IDs
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span className="card-founder" style={{ fontSize: "24px" }}>
//             <FiMenu style={{ color: "#909090" }} /> Superadmin Dashboard
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/SuperadminDash", { showActive: true })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/SuperadminDash", { showActive: false })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Cards;






//Working 8 aug
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../../Public/logo.png";
// import loginLogo from "../../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Superadmincards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [
//         activeOrgs,
//         inactiveOrgs,
//         activeProgramManagers,
//         inactiveProgramManagers,
//       ] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//         axios.get("http://localhost:5000/api/programmanagers/active", config),
//         axios.get("http://localhost:5000/api/programmanagers/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//         activeProgramManagers: activeProgramManagers.data.length,
//         inactiveProgramManagers: inactiveProgramManagers.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route, state) => {
//     navigate(route, { state });
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "0px" }}
//                 onClick={() =>
//                   handleNavigation("/SuperadminDash", { showActive: true })
//                 }
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organization
//               </li>

//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/admindash")}
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")}
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span
//             className="card-founder"
//             style={{ fontSize: "24px", fontWeight: "700" }}
//           >
//             <FiMenu style={{ color: "#909090" }} /> Super Admin
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/SuperadminDash", { showActive: true })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/SuperadminDash", { showActive: false })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/admindash/inactive")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Superadmincards;






// //working dashboard 13 aug 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUserCircle, FaRocket } from "react-icons/fa";
// import { FiMenu } from "react-icons/fi";
// import axios from "axios";
// import logo from "../../Public/logo.png";
// import loginLogo from "../../Public/login.png";
// import "./Superadmincard.css"; // Assuming you have a CSS file for styling

// const Superadmincards = () => {
//   const [cardDetails, setCardDetails] = useState({
//     activeOrganizations: 0,
//     inactiveOrganizations: 0,
//     activeProgramManagers: 0,
//     inactiveProgramManagers: 0,
//     activeStartups: 0,
//     inactiveStartups: 0,
//   });
//   const [superAdminDetails, setSuperAdminDetails] = useState({});
//   const navigate = useNavigate();

//   const fetchCardDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };

//       const [
//         activeOrgs,
//         inactiveOrgs,
//         activeProgramManagers,
//         inactiveProgramManagers,
//       ] = await Promise.all([
//         axios.get("http://localhost:5000/api/organizations/active", config),
//         axios.get("http://localhost:5000/api/organizations/inactive", config),
//         axios.get("http://localhost:5000/api/programmanagers/active", config),
//         axios.get("http://localhost:5000/api/programmanagers/inactive", config),
//       ]);

//       setCardDetails({
//         activeOrganizations: activeOrgs.data.length,
//         inactiveOrganizations: inactiveOrgs.data.length,
//         activeProgramManagers: activeProgramManagers.data.length,
//         inactiveProgramManagers: inactiveProgramManagers.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching cards details:", error);
//     }
//   };

//   const fetchSuperAdminDetails = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.get(
//         "http://localhost:5000/api/superadmins/me",
//         config
//       );
//       setSuperAdminDetails(response.data);
//     } catch (error) {
//       console.error("Error fetching super admin details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCardDetails();
//     fetchSuperAdminDetails();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleNavigation = (route, state) => {
//     navigate(route, { state });
//   };

//   return (
//     <div className="card-dashboard">
//       <aside className="card-sidebar">
//         <div className="card-logo-container">
//           <div className="card-logo">
//             <img src={logo} alt="Logo" />
//           </div>
//         </div>
//         <div className="card-nav-container">
//           <nav className="card-nav">
//             <ul>
//               <li
//                 className="card-nav-item"
//                 style={{ marginTop: "0px" }}
//                 onClick={() =>
//                   handleNavigation("/SuperadminDash", { showActive: true })
//                 }
//               >
//                 <FaUserCircle className="card-nav-icon" /> Organization
//               </li>

//               <li
//                 className="card-nav-item"
//                 onClick={() =>
//                   handleNavigation("/admindash", {
//                     showActive: true,
//                     allProgramManagers: true,
//                   })
//                 }
//               >
//                 <FaRocket className="card-nav-icon" /> Program Manager
//               </li>
//               <li
//                 className="card-nav-item"
//                 onClick={() => handleNavigation("/SuperadminDash")}
//               >
//                 <FaRocket className="card-nav-icon" /> Startup
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       <main className="card-main-content">
//         <header className="card-header">
//           <span
//             className="card-founder"
//             style={{ fontSize: "24px", fontWeight: "700" }}
//           >
//            Super Admin
//           </span>

//           <div className="card-profile-section">
//             <div className="card-user-info">
//               <span className="card-user-initials">
//                 <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
//               </span>
//               <div className="card-user-details">
//                 <span className="card-user-name">
//                   {superAdminDetails?.name || "Loading..."}
//                   <span className="card-drop" />
//                 </span>
//                 <span className="card-user-email">
//                   {superAdminDetails?.email || "Loading..."}
//                 </span>
//               </div>
//               <button
//                 className="card-logout-button"
//                 onClick={handleLogout}
//                 style={{ marginLeft: "10px", padding: "8px" }}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </header>

//         <section className="card-content">
//           <div className="card-cards-container">
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/SuperadminDash", { showActive: true })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#6a5acd" }}
//               >
//                 {cardDetails.activeOrganizations}
//               </div>
//               <div className="card-card-label">Active Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/SuperadminDash", { showActive: false })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#32cd32" }}
//               >
//                 {cardDetails.inactiveOrganizations}
//               </div>
//               <div className="card-card-label">Inactive Organization</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/admindash", {
//                   showActive: true,
//                   allProgramManagers: true,
//                 })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ff69b4" }}
//               >
//                 {cardDetails.activeProgramManagers}
//               </div>
//               <div className="card-card-label">Active Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() =>
//                 handleNavigation("/admindash", {
//                   showActive: false,
//                   allProgramManagers: true,
//                 })
//               }
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#ffd700" }}
//               >
//                 {cardDetails.inactiveProgramManagers}
//               </div>
//               <div className="card-card-label">Inactive Program Managers</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.activeStartups}
//               </div>
//               <div className="card-card-label">Active Startup</div>
//             </div>
//             <div
//               className="card-card"
//               onClick={() => handleNavigation("/SuperadminDash")}
//             >
//               <div
//                 className="card-card-number"
//                 style={{ backgroundColor: "#9370db" }}
//               >
//                 {cardDetails.inactiveStartups}
//               </div>
//               <div className="card-card-label">Inactive Startup</div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Superadmincards;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaRocket } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import axios from "axios";
import logo from "../../Public/logo.png";
import loginLogo from "../../Public/login.png";
import "./Superadmincard.css"; // Assuming you have a CSS file for styling

const Superadmincards = () => {
  const [cardDetails, setCardDetails] = useState({
    activeOrganizations: 0,
    inactiveOrganizations: 0,
    activeProgramManagers: 0,
    inactiveProgramManagers: 0,
    activeStartups: 0,
    inactiveStartups: 0,
  });
  const [superAdminDetails, setSuperAdminDetails] = useState({});
  const navigate = useNavigate();

  const fetchCardDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const [
        activeOrgs,
        inactiveOrgs,
        activeProgramManagers,
        inactiveProgramManagers,
      ] = await Promise.all([
        axios.get("https://mern3-9rgs.onrender.com/api/organizations/active", config),
        axios.get("https://mern3-9rgs.onrender.com/api/organizations/inactive", config),
        axios.get("https://mern3-9rgs.onrender.com/api/programmanagers/active", config),
        axios.get("https://mern3-9rgs.onrender.com/api/programmanagers/inactive", config),
      ]);

      setCardDetails({
        activeOrganizations: activeOrgs.data.length,
        inactiveOrganizations: inactiveOrgs.data.length,
        activeProgramManagers: activeProgramManagers.data.length,
        inactiveProgramManagers: inactiveProgramManagers.data.length,
      });
    } catch (error) {
      console.error("Error fetching cards details:", error);
    }
  };

  const fetchSuperAdminDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        "https://mern3-9rgs.onrender.com/api/superadmins/me",
        config
      );
      setSuperAdminDetails(response.data);
    } catch (error) {
      console.error("Error fetching super admin details:", error);
    }
  };

  useEffect(() => {
    fetchCardDetails();
    fetchSuperAdminDetails();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleNavigation = (route, state) => {
    navigate(route, { state });
  };

  return (
    <div className="card-dashboard">
      <aside className="card-sidebar">
        <div className="card-logo-container">
          <div className="card-logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="card-nav-container">
          <nav className="card-nav">
            <ul>
              <li
                className="card-nav-item"
                style={{ marginTop: "0px" }}
                onClick={() =>
                  handleNavigation("/SuperadminDash", { showActive: true })
                }
              >
                <FaUserCircle className="card-nav-icon" /> Organization
              </li>

              <li
                className="card-nav-item"
                onClick={() =>
                  handleNavigation("/admindash", {
                    showActive: true,
                    allProgramManagers: true,
                  })
                }
              >
                <FaRocket className="card-nav-icon" /> Program Manager
              </li>
              <li
                className="card-nav-item"
                onClick={() => handleNavigation("/SuperadminDash")}
              >
                <FaRocket className="card-nav-icon" /> Startup
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <main className="card-main-content">
        <header className="card-header">
          <span
            className="card-founder"
            style={{ fontSize: "24px", fontWeight: "700" }}
          >
           Super Admin
          </span>

          <div className="card-profile-section">
            <div className="card-user-info">
              <span className="card-user-initials">
                <img src={loginLogo} alt="Login" style={{ width: "40px" }} />
              </span>
              <div className="card-user-details">
                <span className="card-user-name">
                  {superAdminDetails?.name || "Loading..."}
                  <span className="card-drop" />
                </span>
                <span className="card-user-email">
                  {superAdminDetails?.email || "Loading..."}
                </span>
              </div>
              <button
                className="card-logout-button"
                onClick={handleLogout}
                style={{ marginLeft: "10px", padding: "8px" }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        <section className="card-content">
          <div className="card-cards-container">
            <div
              className="card-card"
              onClick={() =>
                handleNavigation("/SuperadminDash", { showActive: true })
              }
            >
              <div
                className="card-card-number"
                style={{ backgroundColor: "#6a5acd" }}
              >
                {cardDetails.activeOrganizations}
              </div>
              <div className="card-card-label">Active Organization</div>
            </div>
            <div
              className="card-card"
              onClick={() =>
                handleNavigation("/SuperadminDash", { showActive: false })
              }
            >
              <div
                className="card-card-number"
                style={{ backgroundColor: "#32cd32" }}
              >
                {cardDetails.inactiveOrganizations}
              </div>
              <div className="card-card-label">Inactive Organization</div>
            </div>
            <div
              className="card-card"
              onClick={() =>
                handleNavigation("/admindash", {
                  showActive: true,
                  allProgramManagers: true,
                })
              }
            >
              <div
                className="card-card-number"
                style={{ backgroundColor: "#ff69b4" }}
              >
                {cardDetails.activeProgramManagers}
              </div>
              <div className="card-card-label">Active Program Managers</div>
            </div>
            <div
              className="card-card"
              onClick={() =>
                handleNavigation("/admindash", {
                  showActive: false,
                  allProgramManagers: true,
                })
              }
            >
              <div
                className="card-card-number"
                style={{ backgroundColor: "#ffd700" }}
              >
                {cardDetails.inactiveProgramManagers}
              </div>
              <div className="card-card-label">Inactive Program Managers</div>
            </div>
            <div
              className="card-card"
              onClick={() => handleNavigation("/SuperadminDash")}
            >
              <div
                className="card-card-number"
                style={{ backgroundColor: "#9370db" }}
              >
                {cardDetails.activeStartups}
              </div>
              <div className="card-card-label">Active Startup</div>
            </div>
            <div
              className="card-card"
              onClick={() => handleNavigation("/SuperadminDash")}
            >
              <div
                className="card-card-number"
                style={{ backgroundColor: "#9370db" }}
              >
                {cardDetails.inactiveStartups}
              </div>
              <div className="card-card-label">Inactive Startup</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Superadmincards;
