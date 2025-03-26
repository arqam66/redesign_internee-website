import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TaskRow from "../components/TaskRow"; 
import ManageAcc from "./ManageAcc";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { query, where, collection, getDocs } from "firebase/firestore";

function InterneePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "User";
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const q = query(collection(db, "signups"), where("email", "==", email));
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          const { name } = userData;
  
          
          const [firstName, ...rest] = name.split(" ");
          const lastName = rest.join(" ");
  
          setUserDetails({ firstName, lastName });
        } else {
          console.error("No user data found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUserData();
  }, [email]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/LoginPortal"); 
    } catch (error) {
      console.error("Error during logout:", error.message);
      alert("Failed to logout. Please try again.");
    }
  };

  const userName = `${userDetails.firstName} ${userDetails.lastName}`.trim() || email;

  
  const tasks = [
    {
      id: "TSK-000-2",
      category: "React Internship",
      task: "Introducing Yourself Task",
      status: "Complete",
      isLocked: true,
    },
    {
      id: "TSK-000-41",
      category: "React Internship",
      task: "Redesign Internee.pk Website",
      status: "Complete",
      isLocked: true,
    },
    {
      id: "TSK-000-42",
      category: "React Internship",
      task: "User Authentication with Firebase",
      status: "Unlocked",
      isLocked: false,
    },
    {
      id: "TSK-000-43",
      category: "React Internship",
      task: "Redux State Management",
      status: "Locked",
      isLocked: true,
    },
    {
      id: "TSK-000-44",
      category: "React Internship",
      task: "RESTful API Integration",
      status: "Locked",
      isLocked: true,
    },
    {
      id: "TSK-000-45",
      category: "React Internship",
      task: "Responsive UI Design",
      status: "Locked",
      isLocked: true,
    },
  ];

  return (
    <div className="h-screen w-full flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="text-white text-2xl focus:outline-none"
          >
            &#9776;
          </button>
          <h1 className="text-lg font-bold">
            Pakistan's Virtual Internship Platform
          </h1>
        </div>
        <div className="relative flex items-center space-x-4">
          <button className="text-white text-xl">⛶</button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-sm font-medium focus:outline-none flex items-center"
            >
              {userName} <span className="ml-1">&#x25BC;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                    onClick={() => setIsManageModalOpen(true)}
                  >
                    <span className="text-gray-600">⚙️</span>
                    <span>Manage Account</span>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                    onClick={handleLogout}
                  >
                    <span className="text-gray-600">⏻</span>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            isSidebarCollapsed ? "w-16" : "w-64"
          } h-full bg-gray-800 text-white transition-all duration-300`}
        >
          <div className="p-4 text-lg font-bold">
            {isSidebarCollapsed ? "IP" : "Internee.pk"}
          </div>
          <ul>
            <li className="p-3 hover:bg-gray-700 cursor-pointer flex items-center space-x-3">
              <span>🏠</span>
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="flex-grow p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-800">Home</h2>
          <hr className="my-2 border-green-600" />
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <p className="text-gray-700">
              Welcome from Internee.pk, <span className="font-bold">{userName}</span>!
            </p>
          </div>

          {/* Running Task Table */}
          <div className="bg-white rounded-lg shadow-md mt-6">
            <div className="border-b p-4">
              <h3 className="text-lg font-bold text-gray-800">Your Running Task</h3>
            </div>
            <table className="w-full text-sm text-left text-gray-600">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4">#</th>
                  <th className="p-4">Task ID</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Task</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <TaskRow
                    key={task.id}
                    index={index + 1}
                    taskId={task.id}
                    category={task.category}
                    task={task.task}
                    status={task.status}
                    isLocked={task.isLocked}
                  />
                ))}
              </tbody>
            </table>
            <div className="p-4 text-center">
              <button
                className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                disabled
              >
                Claim Certificate
              </button>
              <p className="text-gray-500 text-sm mt-2">
                Complete all tasks to claim certificate
              </p>
            </div>
          </div>
        </main>
      </div>

      {/* Manage Account Modal */}
      <ManageAcc
        isOpen={isManageModalOpen}
        onClose={() => setIsManageModalOpen(false)}
        user={{
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email,
        }}
      />
    </div>
  );
}

export default InterneePage;
