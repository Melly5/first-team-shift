import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { RegistrationPage } from "./pages/Authentication/Registration/Registration";
import { AuthorizationPage } from "./pages/Authentication/Authorization/Authorization";
import { ChatPage } from "./pages/Chat/Chat";
import { Friends } from "./pages/Friends/Friends";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

//<Route path={ROUTES.ROOT} element={<RootPage />} />

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/login" element={<AuthorizationPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
