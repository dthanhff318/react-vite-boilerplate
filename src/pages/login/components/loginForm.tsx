import { useRef } from "react";
import toast from "react-hot-toast";

const LoginForm = () => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const handleLogin = () => {
		const username = usernameRef.current?.value;
		const password = passwordRef.current?.value;
		if (!username && !password) {
			toast("Enter your username and password.");
			return;
		}
		if (!username) {
			toast("Enter your username.");
			return;
		}
		if (!password) {
			toast("Enter your password.");
			return;
		}
	};
	return (
		<div className="flex flex-col w-full">
			<input
				ref={usernameRef}
				type="text"
				className="bg-background-bold outline outline-[#f3f5f726] outline-[0.5px] rounded-2xl p-4 text-text-color mb-2"
				placeholder="Username"
			/>
			<input
				ref={passwordRef}
				type="password"
				className="bg-background-bold outline outline-[#f3f5f726] outline-[0.5px] rounded-2xl p-4 text-text-color mb-4"
				placeholder="Password"
			/>
			<button
				className="rounded-2xl p-4 bg-opposite-black text-sm font-semibold"
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
};

export default LoginForm;
