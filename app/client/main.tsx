import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import { ExampleHomePage } from "/ui-modules/home-example/ExampleHomePage";
import { AboutPage } from "/ui-modules/about/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "/app/store";
import { TopNavbar } from "/ui-modules/shared/Navbar";
import { BottomNavbar } from "/ui-modules/shared/BottomNavbar";
import { SideNavBar } from "/ui-modules/shared/SideNavbar";

Meteor.startup(initialiseReactRoot);

function initialiseReactRoot(): void {
  const container = document.getElementById("react-target");
  if (!container) {
    throw new Error("React root container 'react-target' not found in HTML");
  }
  const root = createRoot(container);

  root.render(<AppRoot />);
}

function AppRoot(): React.JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          {/* TopNavbar: Pass `setSidebarOpen` prop to control sidebar state */}
          <TopNavbar setSidebarOpen={setSidebarOpen} />
          
          <Routes>
            <Route path="/" element={<ExampleHomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/test" element={<ExampleHomePage />} />
          </Routes>

          {/* Sidebar & Backdrop */}
          <SideNavBar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
          <BottomNavbar />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
