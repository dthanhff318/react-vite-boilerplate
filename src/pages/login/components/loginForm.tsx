import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../../api/auth/mutations";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
	const { toast } = useToast();
	const usernameRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	const [login, { loading }] = useMutation(LOGIN_USER, {
		onCompleted: (data) => {
			if (!data.Login) return;
			const displayName = data.Login.username ?? "Unknown";
			toast({
				title: "Login success",
				description: `Welcome ${displayName} to Tizz-flow`,
			});
		},
		onError: (err) => {
			toast({
				title: "Login failed",
				description: err.message ?? "Unexpected error, try again!.",
				variant: "destructive",
			});
		},
	});
	const handleLogin = async () => {
		try {
			const username = usernameRef.current?.value;
			const password = passwordRef.current?.value;
			if (!username && !password) {
				toast({
					title: "Missing information",
					description: "Enter your username and password.",
					variant: "destructive",
				});
				return;
			}
			if (!username) {
				toast({
					title: "Missing information",
					description: "Enter your username.",
					variant: "destructive",
				});
				return;
			}
			if (!password) {
				toast({
					title: "Missing information",
					description: "Enter your password.",
					variant: "destructive",
				});
				return;
			}
			login({
				variables: {
					LoginInput: { username, password },
				},
			});
		} catch (error: any) {}
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
			<Button
				className="rounded-2xl p-4 text-sm font-semibold"
				onClick={handleLogin}
				disabled={loading}
			>
				{loading && <Loader2 className="animate-spin" />}
				Login
			</Button>
		</div>
	);
};

export default LoginForm;
