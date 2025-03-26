import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig"; 
import { doc, updateDoc, collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "../firebaseConfig"; 
import { updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

function ManageAcc({ isOpen, onClose, user }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: user?.email || "",
        currentPassword: "",
        newPassword: "",
        avatar: null,
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const usersCollection = collection(db, "signups");
                const q = query(usersCollection, where("email", "==", user.email));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const userData = userDoc.data();
                    const { name, password } = userData;

                    
                    const [firstName, ...rest] = name?.split(" ") || ["", ""];
                    const lastName = rest.join(" ");

                    setFormData((prev) => ({
                        ...prev,
                        firstName: firstName || "",
                        lastName: lastName || "",
                        currentPassword: password || "",
                    }));
                } else {
                    console.error("User document does not exist in Firestore.");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (user?.email) {
            fetchUserData();
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, avatar: e.target.files[0] });
    };

    const handleSave = async () => {
        try {
            const usersCollection = collection(db, "signups");
            const q = query(usersCollection, where("email", "==", formData.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0];
                const userRef = doc(db, "signups", userDoc.id);

                
                await updateDoc(userRef, {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                });

                
                if (formData.newPassword) {
                    const userAuth = auth.currentUser;

                    if (!userAuth) {
                        throw new Error("User is not authenticated. Please log in again.");
                    }

                    const credential = EmailAuthProvider.credential(
                        userAuth.email,
                        formData.currentPassword
                    );

                    
                    await reauthenticateWithCredential(userAuth, credential);

                    
                    await updatePassword(userAuth, formData.newPassword);

                    
                    await updateDoc(userRef, { password: formData.newPassword });

                    alert("Password updated successfully.");
                }

                alert("Account updated successfully.");
                onClose();
            } else {
                console.error("User document does not exist.");
                alert("Failed to update account. User not found.");
            }
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("The current password is incorrect. Please try again.");
            } else if (error.code === "auth/requires-recent-login") {
                alert("Please log in again to update sensitive account details.");
            } else {
                console.error("Error updating account details:", error.message);
                alert("Failed to update account. Please try again.");
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <h2 className="text-lg font-bold mb-4">Manage Account</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly
                            className="w-full px-3 py-2 border rounded-md bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            readOnly
                            className="w-full px-3 py-2 border rounded-md bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Enter new password"
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Avatar</label>
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full"
                        />
                        {formData.avatar && (
                            <img
                                src={URL.createObjectURL(formData.avatar)}
                                alt="Preview"
                                className="mt-2 w-20 h-20 rounded-full object-cover"
                            />
                        )}
                    </div>
                </form>
                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ManageAcc;
