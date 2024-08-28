// const express = require("express");
// const connectDB = require("./config/db");
// const dotenv = require("dotenv");
// const cors = require("cors");

// // Load environment variables
// dotenv.config();

// // Connect to the database
// connectDB();

// const app = express();

// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
// };

// app.use(cors(corsOptions));

// app.use(express.json());

// app.get("/", (req, res) => res.send("API Running"));

// // Define Routes
// app.use("/api/superadmins", require("./routes/superadmins"));

// app.use("/api/organizations", require("./routes/organizations"));
// app.use("/api/admins", require("./routes/admins"));
// app.use("/api/programmanagers", require("./routes/programmanagers"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://localhost:3000/Rolebasedlogin", // or your frontend URL
//   })
// );

// const express = require("express");
// const connectDB = require("./config/db");
// const dotenv = require("dotenv");
// const cors = require("cors");
// require("dotenv").config();

// // Load environment variables
// dotenv.config();

// // Connect to the database
// connectDB();

// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
// };

// app.use(
//   cors({
//     origin: "http://localhost:3000", // or use '*' to allow all origins
//     allowedHeaders: ["Content-Type", "Authorization"],
//     credentials: true,
//   })
// );

// app.use(cors(corsOptions));

// app.use(express.json());

// app.get("/", (req, res) => res.send("API Running"));

// // Define Routes
// app.use("/api/superadmins", require("./routes/superadmins"));
// app.use("/api/organizations", require("./routes/organizations"));
// app.use("/api/admins", require("./routes/admins"));
// app.use("/api/programmanagers", require("./routes/programmanagers"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const express = require("express");
// const connectDB = require("./config/db");
// const cors = require("cors");
// require("dotenv").config(); // Load environment variables

// // Connect to the database
// connectDB();

// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
//   credentials: true, // Enable this if your frontend needs to send cookies with requests
// };

// app.use(cors(corsOptions)); // Apply CORS with the defined options
// app.use(express.json()); // Middleware to parse JSON bodies

// app.get("/", (req, res) => res.send("API Running"));

// // Define Routes
// app.use("/api/superadmins", require("./routes/superadmins"));
// app.use("/api/organizations", require("./routes/organizations"));
// app.use("/api/admins", require("./routes/admins"));
// app.use("/api/programmanagers", require("./routes/programmanagers"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const express = require("express");
// const connectDB = require("./config/db");
// const dotenv = require("dotenv");
// const cors = require("cors");
// require("dotenv").config();

// // Load environment variables
// dotenv.config();

// // Connect to the database
// connectDB();
// ``;
// const app = express();

// // CORS configuration
// // const corsOptions = {
// //   origin: "http://localhost:3000", // Allow requests from this origin
// //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// //   allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
// // };

// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
  
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Handle preflight requests
// app.use(express.json());





// app.get("/", (req, res) => res.send("API Running"));

// // Define Routes
// app.use("/api/superadmins", require("./routes/superadmins"));
// app.use("/api/organizations", require("./routes/organizations"));
// app.use("/api/disableOrganization", require("./routes/disableOrganization"));
// app.use("/api/admins", require("./routes/admins"));
// app.use("/api/programmanagers", require("./routes/programmanagers"));
// app.use("/api/forms", require("./routes/forms")); // Include the forms route
// app.use("/api/evaluationForms", require("./routes/evaluationForms"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));








//chalu current
// const express = require("express");
// const connectDB = require("./config/db");
// const dotenv = require("dotenv");
// const cors = require("cors");
// require("dotenv").config();

// // Load environment variables
// dotenv.config();

// // Connect to the database
// connectDB();

// const app = express();

// // CORS configuration
// const corsOptions = {
//   origin: "http://localhost:3000", // Allow requests from this origin
//   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Handle preflight requests

// // Middleware to parse JSON requests
// app.use(express.json());

// app.get("/", (req, res) => res.send("API Running"));

// // Define Routes
// app.use("/api/superadmins", require("./routes/superadmins"));
// app.use("/api/organizations", require("./routes/organizations"));
// app.use("/api/disableOrganization", require("./routes/disableOrganization"));
// app.use("/api/admins", require("./routes/admins"));
// app.use("/api/programmanagers", require("./routes/programmanagers"));
// app.use("/api/forms", require("./routes/forms")); // Include the forms route
// app.use("/api/evaluationForms", require("./routes/evaluationForms"));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   // Intercept OPTIONS method
//   if (req.method === "OPTIONS") {
//     return res.status(200).json({});
//   }
//   next();
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "*", // Use an environment variable or allow all origins
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// API routes
app.get("/", (req, res) => res.send("API Running"));
app.use("/api/superadmins", require("./routes/superadmins"));
app.use("/api/organizations", require("./routes/organizations"));
app.use("/api/disableOrganization", require("./routes/disableOrganization"));
app.use("/api/admins", require("./routes/admins"));
app.use("/api/programmanagers", require("./routes/programmanagers"));
app.use("/api/forms", require("./routes/forms"));
app.use("/api/evaluationForms", require("./routes/evaluationForms"));

// Catch-all route to serve React's index.html for any request that doesn't match an API route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
