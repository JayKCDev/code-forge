"use client";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";

const CredentialsToast = () => {
	const { user } = useUser();

	useEffect(() => {
		// If user is logged in then don't render the toast
		if (user) return;

		// Show the toast and store its ID
		const proUserToast = toast.success(
			"Pro User credentials:\n\nEmail: pro.user@codeforge.com\nPassword: code2025forge",
			{
				position: "bottom-right",
				style: {
					minWidth: "250px",
				},
				duration: Infinity,
			},
		);

		// Show the toast and store its ID
		const userToast = toast.success(
			"User credentials:\n\nEmail: user@codeforge.com\nPassword: code2025forge",
			{
				position: "bottom-right",
				style: {
					minWidth: "290px",
				},
				duration: Infinity,
			},
		);

		// Cleanup function to remove the toast when component unmounts
		return () => {
			toast.dismiss(proUserToast);
			toast.dismiss(userToast);
		};
	});

	return null; // No UI, just triggering the toast
};

export default CredentialsToast;
