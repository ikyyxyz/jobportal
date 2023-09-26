// JobContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();
export const JobProvider = ({ children }) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const storedApplicants =
      JSON.parse(localStorage.getItem("applicants")) || [];
    setApplicants(storedApplicants);
  }, []);
  useEffect(() => {
    localStorage.setItem("applicants", JSON.stringify(applicants));
  }, [applicants]);
  const addApplicant = (applicant) => {
    setApplicants([...applicants, applicant]);
  };
  return (
    <JobContext.Provider value={{ applicants, addApplicant }}>
      {children}
    </JobContext.Provider>
  );
};
export const useJobContext = () => {
  return useContext(JobContext);
};

// -------------------------------------saveJob1------------------------------------------------------------------
const SavedJobsContext = createContext();
export const SavedJobsProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishhlist")) || [];
    setWishlist(storedWishlist);
  }, []);
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);
  const addWishlist = (wish) => {
    setWishlist([...wishlist, wish]);
  };
  return (
    <SavedJobsContext.Provider value={{ wishlist, addWishlist }}>
      {children}
    </SavedJobsContext.Provider>
  );
};
export const useSavedJobs = () => {
  return useContext(SavedJobsContext);
};
