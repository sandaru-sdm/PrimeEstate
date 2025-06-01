        // Initialize AOS Animation
        AOS.init({
            duration: 1000,
            once: true
        });

        // Property Data
        const properties = [
            {
                id: 1,
                title: "Riverside Development Land",
                location: "Colombo",
                price: "Rs. 4,500,000",
                description: "Prime development land with stunning river views. This 5-acre parcel offers excellent opportunities for residential or commercial development with all utilities available at the property line. Zoned for mixed-use development.",
                image: "../assets/land3.jpg",
                badge: "Featured",
                size: "5 acres",
                type: "Commercial",
                zoning: "Mixed-Use",
                features: ["River Access", "Utilities Available", "Road Frontage", "Near City Center", "Flat Terrain"],
                coordinates: {
                    lat: 40.8903,
                    lng: -73.9170
                }
            },
            {
                id: 2,
                title: "Mountain View Estate Lot",
                location: "Gampaha",
                price: "Rs. 3,200,000",
                description: "Beautiful mountain estate lot with panoramic views. This 3-acre parcel is located in an exclusive gated community with amenities including private trails, community center, and 24-hour security. Perfect for your luxury custom home.",
                image: "../assets/land4.jpg",
                badge: "Premium",
                size: "3 acres",
                type: "Residential",
                zoning: "Single Family",
                features: ["Mountain Views", "Gated Community", "Private Utilities", "Building Site Ready", "HOA Amenities"],
                coordinates: {
                    lat: 40.0150,
                    lng: -105.2705
                }
            },
            {
                id: 3,
                title: "Agricultural Farmland",
                location: "Galle",
                price: "Rs. 2,750,000",
                description: "Productive agricultural land with rich soil and excellent irrigation. This 15-acre property has been actively farmed for decades and includes a small barn and equipment shed. Perfect for organic farming or traditional agriculture.",
                image: "../assets/land5.jpg",
                badge: null,
                size: "15 acres",
                type: "Agricultural",
                zoning: "Agricultural",
                features: ["Fertile Soil", "Irrigation System", "Barn Included", "Road Access", "No Flooding History"],
                coordinates: {
                    lat: 40.0379,
                    lng: -76.3055
                }
            },
            {
                id: 4,
                title: "Coastal Development Parcel",
                location: "Charleston, SC",
                price: "$1,200,000",
                description: "Rare coastal development opportunity with ocean views. This 2-acre parcel is approved for multi-family or hotel development with all preliminary permits in place. Located just minutes from downtown and beach access.",
                image: "/api/placeholder/600/400",
                badge: "Premium",
                size: "2 acres",
                type: "Commercial",
                zoning: "Multi-Family",
                features: ["Ocean Views", "Development Ready", "Preliminary Approvals", "Near Amenities", "High Demand Area"],
                coordinates: {
                    lat: 32.7765,
                    lng: -79.9311
                }
            },
            {
                id: 5,
                title: "Wooded Home Site",
                location: "Asheville, NC",
                price: "$125,000",
                description: "Secluded wooded home site in the rolling hills. This 1.5-acre lot offers privacy and natural beauty with mature hardwood trees and a small creek. Building site is already cleared and driveway installed.",
                image: "/api/placeholder/600/400",
                badge: null,
                size: "1.5 acres",
                type: "Residential",
                zoning: "Residential",
                features: ["Wooded Privacy", "Creek", "Prepared Building Site", "Underground Utilities", "Low HOA Fees"],
                coordinates: {
                    lat: 35.5951,
                    lng: -82.5515
                }
            },
            {
                id: 6,
                title: "Downtown Commercial Lot",
                location: "Austin, TX",
                price: "$850,000",
                description: "Prime commercial lot in downtown growth area. This 0.75-acre corner lot offers excellent visibility and access. Zoned for retail, office, or mixed-use development with high foot traffic and surrounded by new developments.",
                image: "/api/placeholder/600/400",
                badge: "Featured",
                size: "0.75 acres",
                type: "Commercial",
                zoning: "Commercial",
                features: ["Corner Lot", "High Visibility", "Downtown Location", "Development Ready", "Growth Area"],
                coordinates: {
                    lat: 30.2672,
                    lng: -97.7431
                }
            }
        ];

        // Function to load properties
        function loadProperties(propertiesList) {
            const container = document.getElementById('properties-container');
            container.innerHTML = '';
            
            propertiesList.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'col-lg-4 col-md-6 mb-4';
                propertyCard.setAttribute('data-aos', 'fade-up');
                
                propertyCard.innerHTML = `
                    <div class="property-card" data-id="${property.id}">
                        <div class="property-img" style="background-image: url('${property.image}')">
                            ${property.badge ? `<div class="property-badge">${property.badge}</div>` : ''}
                        </div>
                        <div class="property-info">
                            <h3 class="property-title">${property.title}</h3>
                            <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                            <div class="property-price">${property.price}</div>
                            <div class="property-details">
                                <span><i class="fas fa-ruler-combined"></i> ${property.size}</span>
                                <span><i class="fas fa-tag"></i> ${property.type}</span>
                                <span><i class="fas fa-city"></i> ${property.zoning}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(propertyCard);
                
                // Add click event to open modal
                propertyCard.querySelector('.property-card').addEventListener('click', () => {
                    openPropertyModal(property);
                });
            });
        }

        // Function to open property modal
        function openPropertyModal(property) {
            const modalTitle = document.getElementById('propertyModalLabel');
            const modalContent = document.getElementById('propertyModalContent');
            
            modalTitle.textContent = property.title;
            
            let featuresHTML = '';
            property.features.forEach(feature => {
                featuresHTML += `<div class="property-feature"><i class="fas fa-check-circle"></i> ${feature}</div>`;
            });
            
            modalContent.innerHTML = `
                <div class="property-modal-img" style="background-image: url('${property.image}')"></div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="property-modal-price">${property.price}</div>
                        <p class="mb-4">${property.description}</p>
                        <h4 class="mb-3">Property Features</h4>
                        ${featuresHTML}
                    </div>
                    <div class="col-md-4">
                        <div class="contact-form">
                            <h4 class="mb-3">Interested?</h4>
                            <form id="interestForm">
                                <input type="text" class="form-control" placeholder="Your Name" required>
                                <input type="email" class="form-control" placeholder="Your Email" required>
                                <input type="tel" class="form-control" placeholder="Your Phone" required>
                                <textarea class="form-control" rows="3" placeholder="Message" required></textarea>
                                <button type="submit" class="submit-btn mt-2">Request Info</button>
                            </form>
                        </div>
                    </div>
                </div>
            `;
            
            const propertyModal = new bootstrap.Modal(document.getElementById('propertyModal'));
            propertyModal.show();
            
            // Initialize form submission
            document.getElementById('interestForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your interest! Our team will contact you shortly about this property.');
                propertyModal.hide();
            });
        }

        // Initialize filter functionality
        document.getElementById('filter-btn').addEventListener('click', function() {
            const locationFilter = document.getElementById('location-filter').value;
            const priceFilter = document.getElementById('price-filter').value;
            const sizeFilter = document.getElementById('size-filter').value;
            
            // In a real application, you would filter based on these values
            // For now, we'll just show all properties
            loadProperties(properties);
            
            // Add animation to show filtering is complete
            document.getElementById('properties-container').classList.add('fade');
            setTimeout(() => {
                document.getElementById('properties-container').classList.remove('fade');
            }, 300);
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you shortly.');
            this.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (!target) return;
                
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = 'none';
            }
        });

        // Load properties on page load
        document.addEventListener('DOMContentLoaded', function() {
            loadProperties(properties);
            
            // Add a slight delay for the initial animation effect
            setTimeout(() => {
                document.querySelectorAll('.property-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 500);
        });

        // Function to filter properties based on selected criteria
function filterProperties() {
    const locationFilter = document.getElementById('location-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const sizeFilter = document.getElementById('size-filter').value;
    
    // Create a copy of the original properties array to filter
    let filteredProperties = [...properties];
    
    // Filter by location
    if (locationFilter !== 'All Locations') {
        // Extract city from location
        filteredProperties = filteredProperties.filter(property => {
            const city = property.location.split(',')[0].trim();
            
            // Match location categories based on cities in your data
            if (locationFilter === 'Urban') {
                return ['New York', 'Austin', 'Charleston'].includes(city);
            } else if (locationFilter === 'Suburban') {
                return ['Riverdale', 'Boulder'].includes(city);
            } else if (locationFilter === 'Rural') {
                return ['Lancaster', 'Asheville'].includes(city);
            }
            return true;
        });
    }
    
    // Filter by price
    if (priceFilter !== 'All Prices') {
        filteredProperties = filteredProperties.filter(property => {
            // Extract numeric price value (remove $ and commas)
            const priceValue = parseFloat(property.price.replace(/[$,]/g, ''));
            
            if (priceFilter === 'Under $250,000') {
                return priceValue < 250000;
            } else if (priceFilter === '$250,000 - $500,000') {
                return priceValue >= 250000 && priceValue <= 500000;
            } else if (priceFilter === '$500,000 - $1,000,000') {
                return priceValue > 500000 && priceValue <= 1000000;
            } else if (priceFilter === 'Over $1,000,000') {
                return priceValue > 1000000;
            }
            return true;
        });
    }
    
    // Filter by size
    if (sizeFilter !== 'All Sizes') {
        filteredProperties = filteredProperties.filter(property => {
            // Extract numeric size value and convert to number
            const sizeValue = parseFloat(property.size.split(' ')[0]);
            
            if (sizeFilter === 'Under 1 Acre') {
                return sizeValue < 1;
            } else if (sizeFilter === '1-5 Acres') {
                return sizeValue >= 1 && sizeValue <= 5;
            } else if (sizeFilter === '5-10 Acres') {
                return sizeValue > 5 && sizeValue <= 10;
            } else if (sizeFilter === 'Over 10 Acres') {
                return sizeValue > 10;
            }
            return true;
        });
    }
    
    // Display filtered properties or show "No results" message
    if (filteredProperties.length === 0) {
        const container = document.getElementById('properties-container');
        container.innerHTML = '<div class="col-12 text-center py-5"><p>No properties match your criteria. Try adjusting your filters.</p></div>';
    } else {
        loadProperties(filteredProperties);
    }
    
    // Add animation to show filtering is complete
    document.getElementById('properties-container').classList.add('fade');
    setTimeout(() => {
        document.getElementById('properties-container').classList.remove('fade');
    }, 300);
    
    // Update results count
    updateResultsCount(filteredProperties.length);
}

// Function to update results count
function updateResultsCount(count) {
    // Create or update results counter element
    let resultsCounter = document.getElementById('results-counter');
    
    if (!resultsCounter) {
        resultsCounter = document.createElement('div');
        resultsCounter.id = 'results-counter';
        resultsCounter.className = 'results-counter mb-3';
        const propertiesContainer = document.getElementById('properties-container');
        propertiesContainer.parentNode.insertBefore(resultsCounter, propertiesContainer);
    }
    
    resultsCounter.innerHTML = `<p><strong>${count}</strong> properties found</p>`;
}

// Initialize filter functionality
document.getElementById('filter-btn').addEventListener('click', function() {
    filterProperties();
});

// Add clear filters button
function addClearFiltersButton() {
    const filterBar = document.querySelector('.filter-bar .row');
    
    // Check if button already exists
    if (!document.getElementById('clear-filters')) {
        const clearFilterDiv = document.createElement('div');
        clearFilterDiv.className = 'col-12 mt-3';
        clearFilterDiv.innerHTML = '<button id="clear-filters" class="btn btn-outline-secondary btn-sm">Clear Filters</button>';
        filterBar.appendChild(clearFilterDiv);
        
        // Add event listener
        document.getElementById('clear-filters').addEventListener('click', function() {
            // Reset all filter dropdowns
            document.getElementById('location-filter').value = 'All Locations';
            document.getElementById('price-filter').value = 'All Prices';
            document.getElementById('size-filter').value = 'All Sizes';
            
            // Load all properties
            loadProperties(properties);
            
            // Update counter
            updateResultsCount(properties.length);
        });
    }
}

// Initialize price filter with correct values (replace in the existing HTML)
function initializePriceFilter() {
    const priceFilter = document.getElementById('price-filter');
    priceFilter.innerHTML = `
        <option selected>All Prices</option>
        <option>Under $250,000</option>
        <option>$250,000 - $500,000</option>
        <option>$500,000 - $1,000,000</option>
        <option>Over $1,000,000</option>
    `;
}

// Add event listeners for on-change filtering (for better UX)
function addImmediateFiltering() {
    const filters = [
        document.getElementById('location-filter'),
        document.getElementById('price-filter'),
        document.getElementById('size-filter')
    ];
    
    filters.forEach(filter => {
        filter.addEventListener('change', function() {
            filterProperties();
        });
    });
}

// Initialize all filters on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProperties(properties);
    addClearFiltersButton();
    initializePriceFilter();
    addImmediateFiltering();
    updateResultsCount(properties.length);
});