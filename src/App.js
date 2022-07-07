import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RegistrationPage from "./Registration/registration";
import AuthenticationPage from "./Authentication/authentication";
import { RootPage } from "./pages/root";
import { ROUTES } from "./utils/constants/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const routes = [
  {
		path: "/login",
		name: "Login",
		main: <AuthenticationPage/>
	},
  {
		path: "/signup",
		name: "SignUp",
		main: <RegistrationPage/>
	}
]

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ROOT} element={<RootPage />} />
          {routes.map((route,index) => (
									<Route
										key = {index}
										path = {route.path}
										element = {route.main}
									/>
							))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
