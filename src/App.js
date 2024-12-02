import React, { Fragment } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { routesPage } from "./routes";
import DefaultLayout from "./layout";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
      retry: 0,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <DndProvider backend={HTML5Backend}>
          <Routes>
            {routesPage.map((routes, index) => {
              const Page = routes.component;
              const Layout = routes.layout === null ? Fragment : DefaultLayout;
              return (
                <Route
                  key={index}
                  path={routes.path}
                  element={
                    <Layout>
                      <Page/>
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </DndProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
