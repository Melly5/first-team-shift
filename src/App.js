import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { RootPage } from "./pages/root";
import { ROUTES } from "./utils/constants/router";
import Header from './Global/Header/Header';
import AuthenticationPage from './Authentication/Authentication';
import RegistrationPage from "./Registration/Registration";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function getRoute(path) {
	return routes.find(x => x.path === path);
}

const routes = [
	{
		path: "/login",
		name: "Login",
		header: <Header signed={false}/>,
		main: <AuthenticationPage/>
	},
  {
		path: "/signup",
		name: "SignUp",
		header: <Header signed={false}/>,
		main: <RegistrationPage/>
	},
	{
		path: "/signup",
		name: "signup",
		header: <Header signed={false}/>,
		main: <RegistrationPage/>
	},

	{
		path: "/home",
		name: "Home",
		header: <EmptyHeader/>,
		main: <LinkBody route="/tasks" text="Привет!"/> // а нахрена нам эта страничка
	},
	{
		path: "*",
		name: "404",
		header: <EmptyHeader/>,
		main: <LinkBody route="/login" text="Нет такой странички!"/>
	}
]
function EmptyHeader()
{
	return (
		<div></div>
	);
}

function LinkBody(props)
{
	return (
		<div><Link to={props.route}>{props.text}</Link></div>
	);
}
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.ROOT} element={<RootPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
