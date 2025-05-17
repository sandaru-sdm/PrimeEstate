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
                location: "Riverdale, NY",
                price: "$450,000",
                description: "Prime development land with stunning river views. This 5-acre parcel offers excellent opportunities for residential or commercial development with all utilities available at the property line. Zoned for mixed-use development.",
                image: "/api/placeholder/600/400",
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
                location: "Boulder, CO",
                price: "$325,000",
                description: "Beautiful mountain estate lot with panoramic views. This 3-acre parcel is located in an exclusive gated community with amenities including private trails, community center, and 24-hour security. Perfect for your luxury custom home.",
                image: "/api/placeholder/600/400",
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
                location: "Lancaster, PA",
                price: "$275,000",
                description: "Productive agricultural land with rich soil and excellent irrigation. This 15-acre property has been actively farmed for decades and includes a small barn and equipment shed. Perfect for organic farming or traditional agriculture.",
                image: "/api/placeholder/600/400",
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