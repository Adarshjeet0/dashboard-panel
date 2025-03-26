# React.js/Next.js Authentication & Dashboard Application

## 📌 Objective
This project is a **React.js/Next.js** application that includes user authentication and a dashboard with a data table featuring sorting, filtering, and pagination functionalities.

## 📂 Project Structure
The application consists of two main pages:

1. **Login/Signup Page** – Enables users to create an account or log in using email and password.
2. **Details Page (Dashboard)** – Displays a navbar, sidebar, and a data table after a user logs in.

## 🚀 Features

### 1️⃣ User Authentication (Login/Signup)
- Users can sign up or log in using their email and password.
- Input fields include validation, and error messages are displayed for invalid entries.
- User session details are stored in **local storage**.
- After successful login, users are redirected to the **Details Page**.

### 2️⃣ Dashboard (After Login)
- **Navbar Features:**
  - Logo (on the left).
  - User icon (on the right) with a dropdown menu:
    - Displays logged-in user details (name/email).
    - Logout option (clears local storage and logs out the user).
    - Delete Account option (removes user data from local storage).
- **Sidebar:**
  - Displays a menu item named **Details** to indicate the current page.

### 3️⃣ Details Page (Data Table)
- Displays a **table with mock data** (fetched from a local JSON file or a third-party mock API).
- Includes the following features:
  - **Sorting:** Enables ascending/descending sorting on table columns.
  - **Searching:** Users can filter data based on input.
  - **Pagination:** Displays a limited number of rows per page.

### 4️⃣ General Requirements
- **Local Storage:** Used for user authentication and session management.
- **Responsive Design:** Ensures optimal usability on both desktop and mobile devices.
- **State Management:** Uses `useContext` or `useReducer` for managing state (Redux can also be used if preferred).

## 🛠️ Technologies Used
- **Frontend:** React.js / Next.js
- **UI Library:** Material-UI (MUI) / Tailwind CSS
- **State Management:** useContext / useReducer / Redux (if required)
- **Data Handling:** Local JSON or Mock APIs
- **Storage:** Local Storage for session management

## 🏗️ Installation & Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/auth-dashboard.git
   cd auth-dashboard
   ```
2. **Install Dependencies:**
   ```sh
   npm install  # or yarn install
   ```
3. **Start the Application:**
   ```sh
   npm start  # or yarn dev (for Next.js)
   ```

## 📌 Future Enhancements
- Integrate **JWT-based authentication** instead of local storage.
- Implement a **real database** (Firebase, MongoDB, etc.).
- Add **role-based access control (RBAC)** for different user permissions.

---

### 📞 Need Help?
If you have any questions or issues, feel free to raise an issue in the repository!

---
🚀 **Happy Coding!**

