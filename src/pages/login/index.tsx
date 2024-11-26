import LoginForm from "./components/loginForm";
// import Logo from "../../components/logo/logo";

const LoginPage = () => {
	return (
		<div className="bg-background flex items-center justify-center w-screen h-screen">
			<div className="w-full max-w-[370px] flex flex-col items-center">
				{/* <Logo /> */}
				<h3 className="text-text-color text-base font-semibold my-6">
					Login to Flow
				</h3>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
