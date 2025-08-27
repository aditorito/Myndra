import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Crash overlay so a blank screen can't hide errors
function mountCrashOverlay() {
  const el = document.createElement("div");
  el.id = "crash-overlay";
  el.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:2147483647;padding:12px;font:12px/1.4 ui-monospace,Menlo,Consolas,monospace;";
  document.body.appendChild(el);

  const show = (msg) => {
    el.innerHTML = `
      <div style="max-width:960px;margin:12px auto">
        <div style="background:#fff0f0;border:1px solid #f99;color:#600;padding:12px;border-radius:8px;white-space:pre-wrap;box-shadow:0 8px 24px rgba(0,0,0,.15)">
          <strong>Runtime error</strong>\n${msg}
        </div>
      </div>`;
  };

  window.addEventListener("error", (e) => show(String(e.error || e.message)));
  window.addEventListener("unhandledrejection", (e) => show(String(e.reason)));
}

let root = document.getElementById("root");
if (!root) {
  root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
}

mountCrashOverlay();

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
