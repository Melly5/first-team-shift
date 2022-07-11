import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import RegistrationPage from "./pages/Registration/Registration";
import AuthenticationPage from "./pages/Authentication/Authentication";
import ChatPage from "./pages/Chat/Chat";
//import { ROUTES } from "./utils/constants/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
//<Route path={ROUTES.ROOT} element={<RootPage />} />
const routes = [
  {
    path: "/login",
    name: "Login",
    main: <AuthenticationPage />,
  },
  {
    path: "/signup",
    name: "SignUp",
    main: <RegistrationPage />,
  },
  {
    path: "/chat",
    name: "Chat",
    main: <ChatPage />,
  },
];

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.main} />
          ))}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
