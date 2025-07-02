
import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Guarantees from '../components/Guarantees';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Features />
      <Guarantees />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
