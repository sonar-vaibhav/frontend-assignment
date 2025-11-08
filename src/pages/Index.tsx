import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { UserDataDisplay } from "@/components/UserDataDisplay";
import { UserFormData } from "@/components/GetStartedModal";

const Index = () => {
  const [submittedUsers, setSubmittedUsers] = useState<UserFormData[]>([]);

  const handleUserSubmit = (userData: UserFormData) => {
    setSubmittedUsers((prev) => [...prev, userData]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero onUserSubmit={handleUserSubmit} />
      <Features />
      <Testimonials />
      <CTA />
      <UserDataDisplay users={submittedUsers} />
      <Footer />
    </div>
  );
};

export default Index;
