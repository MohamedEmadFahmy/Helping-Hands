import React, { useState, useEffect } from 'react';
import OrganizationCard from '../components/OrganizationCard';
import OrganizationNavbar from '../components/OrganizationNavbar';
import Footer from '../components/Footer';
import filterIcon from '../assets/images/gand/filterr.jpeg'; // Assuming the image path is correct

const OrganizationAccount = () => {
  const [activeFilter, setActiveFilter] = useState(''); // State to track active filter
  const [searchText, setSearchText] = useState(''); // State to track search term
  const [showFilterOptions, setShowFilterOptions] = useState(false); // State to control filter options visibility
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State to track navbar visibility

  const filterOptions = ['Government', 'Area', 'Organization Type']; // Array of filter labels

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Implement logic to filter organizations based on the selected filter (if needed)
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Implement logic to filter organizations based on the search term (if needed)
  };

  const toggleFilterOptions = () => {
    setShowFilterOptions(!showFilterOptions); // Toggle visibility on click
  };

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position
      setIsNavbarVisible(scrollY <= 10); // Hide navbar if scrolled more than 10px (adjustable)
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="organization-account-container bg-gray-100">
      {isNavbarVisible && <OrganizationNavbar />}

      <main className="organization-account-content">
        <div className="flex flex-col justify-center items-center mb-6">
          {/* ... your title and margin elements ... */}
        </div>

        <div className="flex mb-4 items-center">
          {/* ... your search bar and filter button elements ... */}
        </div>

        {/* Organization Cards */}
        <div className="organization-cards">
          <OrganizationCard />
          <OrganizationCard />
          <OrganizationCard /> {/* Added another card for demonstration */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrganizationAccount;
