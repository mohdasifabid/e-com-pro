import React from "react";
import Navbar from "./Navbar";
import OfferBar from "./OfferBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      <OfferBar />
      <div>{children}</div>
    </main>
  );
}
