const siteData = {
    trips: [
        {
            id: 1,
            title: "Cultural Triangle Explorer",
            image: "assets/images/cultural-triangle.webp",
            rating: 4.9,
            duration: "5 Days",
            locations: "Anuradhapura, Sigiriya, Kandy",
            description: "Explore Sri Lanka's ancient cities and cultural heritage sites including UNESCO World Heritage locations.",
            tags: ["Temple Visits", "Historical Sites", "Cultural Shows"],
            price: "$599",
            badge: {
                text: "Best Seller",
                type: "warning"
            }
        },
        {
            id: 2,
            title: "Wildlife Safari Adventure",
            image: "assets/images/safari-tour.webp",
            rating: 4.8,
            duration: "4 Days",
            locations: "Yala, Udawalawe",
            description: "Experience thrilling wildlife safaris in Sri Lanka's most famous national parks to spot leopards, elephants, and more.",
            tags: ["Jeep Safaris", "Wildlife Viewing", "Nature Walks"],
            price: "$499"
        },
        {
            id: 3,
            title: "Beach Paradise Getaway",
            image: "assets/images/beach-paradise.webp",
            rating: 4.7,
            duration: "6 Days",
            locations: "Mirissa, Unawatuna, Bentota",
            description: "Relax on Sri Lanka's pristine beaches, enjoy water sports, and witness the magical sunset views.",
            tags: ["Snorkeling", "Whale Watching", "Beach Relaxation"],
            price: "$649"
        },
        {
            id: 4,
            title: "Hill Country Experience",
            image: "assets/images/hill-country.webp",
            rating: 4.8,
            duration: "5 Days",
            locations: "Nuwara Eliya, Ella, Horton Plains",
            description: "Journey through Sri Lanka's picturesque hill country with tea plantations, waterfalls, and scenic train rides.",
            tags: ["Tea Plantations", "Train Journeys", "Hiking"],
            price: "$549"
        },
        {
            id: 5,
            title: "Ayurvedic Wellness Retreat",
            image: "assets/images/ayurvedic-treat.webp",
            rating: 4.9,
            duration: "7 Days",
            locations: "Beruwala, Bentota",
            description: "Rejuvenate your mind, body, and soul with traditional Ayurvedic treatments and yoga sessions.",
            tags: ["Ayurvedic Spa", "Yoga", "Meditation"],
            price: "$899",
            badge: {
                text: "New",
                type: "warning"
            }
        },
        {
            id: 6,
            title: "Complete Sri Lanka Circuit",
            image: "assets/images/complete-tour.webp",
            rating: 4.9,
            duration: "14 Days",
            locations: "Island-wide",
            description: "The ultimate Sri Lankan experience covering cultural sites, wildlife, beaches, and hill country.",
            tags: ["All-inclusive", "Comprehensive", "Premium"],
            price: "$1,499"
        }
    ],
    
    management: [
        {
            name: "Rajith Fernando",
            position: "Founder & CEO",
            image: "assets/images/rajith-fernando.webp",
            description: "With over 15 years in tourism, Rajith's vision and passion for Sri Lanka drives our company's success."
        },
        {
            name: "Amali Perera",
            position: "Operations Director",
            image: "assets/images/amali-perera.webp",
            description: "Amali ensures that every tour runs smoothly, with meticulous attention to detail and customer satisfaction."
        },
        {
            name: "Dinesh Jayawardena",
            position: "Head of Guides",
            image: "assets/images/Dinesh-Jayawardana.webp",
            description: "A historian and naturalist, Dinesh trains our guides to provide rich, informative experiences for all travelers."
        }
    ],
    
    guides: [
        {
            name: "Sunil Rathnayake",
            position: "Cultural Guide",
            image: "assets/images/sunil-rathnayake.webp",
            description: "Specializes in ancient history and Buddhist heritage sites.",
            languages: ["English", "German", "French"]
        },
        {
            name: "Priya Mendis",
            position: "Wildlife Expert",
            image: "assets/images/Priya-Mendis.webp",
            description: "Former park ranger with extensive knowledge of Sri Lankan fauna.",
            languages: ["English", "Italian", "Japanese"]
        },
        {
            name: "Lakshmi Silva",
            position: "Culinary Guide",
            image: "assets/images/lakshmi-silva.webp",
            description: "Leads food tours and cooking classes featuring authentic Sri Lankan cuisine.",
            languages: ["English", "Spanish", "Chinese"]
        },
        {
            name: "Nimal Gunaratne",
            position: "Adventure Guide",
            image: "assets/images/nimal-gunarathne.webp",
            description: "Leads hiking, rafting, and climbing expeditions throughout the island.",
            languages: ["English", "Russian", "Dutch"]
        }
    ],
    
    drivers: [
        {
            name: "Chaminda Perera",
            position: "Senior Driver",
            image: "assets/images/chaminda-perera.webp",
            description: "12+ years experience, specializes in long-distance tours.",
            languages: ["English", "German"]
        },
        {
            name: "Rohan Dissanayake",
            position: "Safari Driver",
            image: "assets/images/Rohan-Dissanayake.webp",
            description: "Expert in wildlife spotting and off-road driving.",
            languages: ["English", "French"]
        },
        {
            name: "Ajith Bandara",
            position: "Mountain Driver",
            image: "assets/images/Ajith-Bandara.webp",
            description: "Specializes in hill country routes and tea plantation tours.",
            languages: ["English", "Chinese"]
        },
        {
            name: "Lasith Kumara",
            position: "City Driver",
            image: "assets/images/Lasith-Kumara.webp",
            description: "Expert in navigating Colombo and other urban areas.",
            languages: ["English", "Russian"]
        }
    ],
    
    destinations: [
        {
            title: "Sigiriya Rock Fortress",
            image: "assets/images/sigiriya.webp",
            description: "Ancient palace and fortress complex with stunning views"
        },
        {
            title: "Ella & Tea Plantations",
            image: "assets/images/ella.webp",
            description: "Breathtaking mountain views and lush tea estates"
        },
        {
            title: "Galle Fort",
            image: "assets/images/galle-fort.webp",
            description: "Colonial-era fortress with charming streets and ocean views"
        }
    ],
    
    testimonials: [
        {
            quote: "Our trip with Samma Travelers was absolutely amazing! Our guide was knowledgeable and friendly, and the itinerary was perfectly balanced. We saw all the major attractions while still having time to relax and enjoy.",
            author: "Sarah & David",
            location: "UK, Cultural Tour"
        },
        {
            quote: "The wildlife safari exceeded all our expectations! We saw elephants, leopards, and countless birds. Our guide was incredibly knowledgeable about the animals and their habitats. Highly recommend!",
            author: "Michael Johnson",
            location: "Australia, Wildlife Tour"
        },
        {
            quote: "As a solo female traveler, safety was my top concern. Samma Travelers made me feel secure throughout my journey. The driver was professional, and the accommodations were excellent. I'll definitely be back!",
            author: "Emma Chen",
            location: "Canada, Beach & Culture Tour"
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'trips.html') {
        loadTrips();
        loadCategoryTrips();
    }
    
    if (currentPage === 'team.html') {
        loadManagementTeam();
        loadGuides();
        loadDrivers();
    }
    
    if (currentPage === 'index.html' || currentPage === '') {
        loadDestinations();
        loadTestimonials();
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
                        
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
            alertDiv.role = 'alert';
            alertDiv.innerHTML = `
                <strong>Thank you, ${name}!</strong> Your message has been sent successfully. We'll get back to you soon.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            `;
            
            contactForm.parentNode.insertBefore(alertDiv, contactForm);
            
            contactForm.reset();
            
            setTimeout(function() {
                alertDiv.remove();
            }, 5000);
        });
    }

    const newsletterForms = document.querySelectorAll('.newsletter-form');
    if (newsletterForms.length > 0) {
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = form.querySelector('input[type="email"]');
                const email = emailInput.value;
                
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
                alertDiv.role = 'alert';
                alertDiv.innerHTML = `
                    <strong>Thank you!</strong> You've been subscribed to our newsletter.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
                
                form.parentNode.insertBefore(alertDiv, form);
                
                form.reset();
                
                setTimeout(function() {
                    alertDiv.remove();
                }, 5000);
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else if (link.classList.contains('active') && linkHref !== currentPage) {
            link.classList.remove('active');
        }
    });

    const tripModal = document.getElementById('tripModal');
    if (tripModal) {
        tripModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            
            const tripCard = button.closest('.trip-card');
            
            const tripTitle = tripCard.querySelector('.h5').textContent;
            const tripPrice = tripCard.querySelector('.price-value').textContent;
            const tripDuration = tripCard.querySelector('.trip-meta span:first-child').textContent.trim();
            const tripLocation = tripCard.querySelector('.trip-meta span:last-child').textContent.trim();
            
            const modalTitle = tripModal.querySelector('.modal-title');
            modalTitle.textContent = tripTitle;
            
            const modalPrice = tripModal.querySelector('.trip-info-list li:nth-child(5)');
            if (modalPrice) {
                modalPrice.innerHTML = `<i class="fas fa-tag text-warning me-2"></i> Price: ${tripPrice} per person`;
            }
        });
    }
});

function loadTrips() {
    const tripsContainer = document.getElementById('all');
    if (!tripsContainer) return;
    
    tripsContainer.querySelector('.row').innerHTML = '';
    
    siteData.trips.forEach(trip => {
        const tripHTML = `
            <div class="col-lg-4 col-md-6">
                <div class="card h-100 border-0 shadow-sm trip-card">
                    <div class="position-relative">
                        <img src="${trip.image}" class="card-img-top" alt="${trip.title}">
                        ${trip.badge ? `<span class="position-absolute top-0 end-0 bg-warning text-white px-3 py-1 m-2 rounded-pill">${trip.badge.text}</span>` : ''}
                    </div>
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h3 class="card-title h5 mb-0">${trip.title}</h3>
                            <div>
                                <i class="fas fa-star text-warning"></i>
                                <span>${trip.rating}</span>
                            </div>
                        </div>
                        <div class="mb-3 text-muted small trip-meta">
                            <span class="me-3"><i class="far fa-clock me-1"></i> ${trip.duration}</span>
                            <span><i class="fas fa-map-marker-alt me-1"></i> ${trip.locations}</span>
                        </div>
                        <p class="card-text">${trip.description}</p>
                        <div class="mb-3">
                            ${trip.tags.map(tag => `<span class="badge bg-light text-dark me-1">${tag}</span>`).join('')}
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="fw-bold text-warning fs-5 price-value">${trip.price}</span>
                                <span class="text-muted small">per person</span>
                            </div>
                            <a href="#" class="btn btn-sm btn-warning text-white" data-bs-toggle="modal" data-bs-target="#tripModal">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        tripsContainer.querySelector('.row').innerHTML += tripHTML;
    });
}
function loadCategoryTrips() {
    const culturalTrips = filterTripsByCategory('cultural');
    const adventureTrips = filterTripsByCategory('adventure');
    const beachTrips = filterTripsByCategory('beach');
    const wildlifeTrips = filterTripsByCategory('wildlife');

    loadCategoryTripsToContainer('cultural', culturalTrips);
    loadCategoryTripsToContainer('adventure', adventureTrips);
    loadCategoryTripsToContainer('beach', beachTrips);
    loadCategoryTripsToContainer('wildlife', wildlifeTrips);
}

function filterTripsByCategory(category) {
    return siteData.trips.filter(trip => {
        const title = trip.title.toLowerCase();
        const desc = trip.description.toLowerCase();
        const tags = trip.tags.map(tag => tag.toLowerCase());
        
        switch(category) {
            case 'cultural':
                return title.includes('cultural') || 
                       desc.includes('heritage') || 
                       desc.includes('history') ||
                       tags.some(tag => tag.includes('temple') || 
                                        tag.includes('historical') || 
                                        tag.includes('cultural'));
            case 'adventure':
                return title.includes('adventure') || 
                       title.includes('hill country') || 
                       tags.some(tag => tag.includes('hiking') || 
                                        tag.includes('train') || 
                                        tag.includes('adventure'));
            case 'beach':
                return title.includes('beach') || 
                       title.includes('paradise') ||
                       tags.some(tag => tag.includes('beach') || 
                                        tag.includes('snorkeling') || 
                                        tag.includes('whale'));
            case 'wildlife':
                return title.includes('wildlife') || 
                       title.includes('safari') ||
                       desc.includes('wildlife') ||
                       desc.includes('national parks') ||
                       tags.some(tag => tag.includes('wildlife') || 
                                        tag.includes('safari') || 
                                        tag.includes('nature'));
            default:
                return false;
        }
    });
}

function loadCategoryTripsToContainer(categoryId, trips) {
    const container = document.getElementById(categoryId);
    if (!container) return;
    
    const row = container.querySelector('.row');
    if (!row) return;
    
    row.innerHTML = '';
    
    if (trips.length === 0) {
        row.innerHTML = `
            <div class="col-12 text-center py-5">
                <p>No ${categoryId} trips available at this time.</p>
            </div>
        `;
        return;
    }
    
    trips.forEach(trip => {
        const tripHTML = `
            <div class="col-lg-4 col-md-6">
                <div class="card h-100 border-0 shadow-sm trip-card">
                    <div class="position-relative">
                        <img src="${trip.image}" class="card-img-top" alt="${trip.title}">
                        ${trip.badge ? `<span class="position-absolute top-0 end-0 bg-warning text-white px-3 py-1 m-2 rounded-pill">${trip.badge.text}</span>` : ''}
                    </div>
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h3 class="card-title h5 mb-0">${trip.title}</h3>
                            <div>
                                <i class="fas fa-star text-warning"></i>
                                <span>${trip.rating}</span>
                            </div>
                        </div>
                        <div class="mb-3 text-muted small trip-meta">
                            <span class="me-3"><i class="far fa-clock me-1"></i> ${trip.duration}</span>
                            <span><i class="fas fa-map-marker-alt me-1"></i> ${trip.locations}</span>
                        </div>
                        <p class="card-text">${trip.description}</p>
                        <div class="mb-3">
                            ${trip.tags.map(tag => `<span class="badge bg-light text-dark me-1">${tag}</span>`).join('')}
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <span class="fw-bold text-warning fs-5 price-value">${trip.price}</span>
                                <span class="text-muted small">per person</span>
                            </div>
                            <a href="#" class="btn btn-sm btn-warning text-white" data-bs-toggle="modal" data-bs-target="#tripModal">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        row.innerHTML += tripHTML;
    });
}

function loadManagementTeam() {
    const managementContainer = document.getElementById('management-team');
    if (!managementContainer) return;
    
    managementContainer.innerHTML = '';
    
    siteData.management.forEach(member => {
        const memberHTML = `
            <div class="col-lg-4 col-md-6">
                <div class="card h-100 border-0 shadow-sm text-center">
                    <div class="card-body p-4">
                        <div class="mb-3">
                            <img src="${member.image}" class="rounded-circle img-fluid" style="width: 150px; height: 150px; object-fit: cover;" alt="${member.name}">
                        </div>
                        <h3 class="card-title h5">${member.name}</h3>
                        <p class="text-warning fw-bold mb-2">${member.position}</p>
                        <p class="card-text text-muted mb-3">${member.description}</p>
                        <div class="d-flex justify-content-center gap-2">
                            <a href="#" class="btn btn-light rounded-circle">
                                <i class="fab fa-linkedin-in text-warning"></i>
                            </a>
                            <a href="#" class="btn btn-light rounded-circle">
                                <i class="fab fa-twitter text-warning"></i>
                            </a>
                            <a href="#" class="btn btn-light rounded-circle">
                                <i class="fas fa-envelope text-warning"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        managementContainer.innerHTML += memberHTML;
    });
}

function loadGuides() {
    const guidesContainer = document.getElementById('guides-team');
    if (!guidesContainer) return;
    
    guidesContainer.innerHTML = '';
    
    siteData.guides.forEach(guide => {
        const guideHTML = `
            <div class="col-lg-3 col-md-6">
                <div class="card h-100 border-0 shadow-sm text-center">
                    <div class="card-body p-4">
                        <div class="mb-3">
                            <img src="${guide.image}" class="rounded-circle img-fluid" style="width: 120px; height: 120px; object-fit: cover;" alt="${guide.name}">
                        </div>
                        <h3 class="card-title h5">${guide.name}</h3>
                        <p class="text-warning fw-bold mb-2">${guide.position}</p>
                        <p class="card-text text-muted mb-3">${guide.description}</p>
                        <div class="d-flex justify-content-center">
                            ${guide.languages.map(lang => `<span class="badge bg-light text-dark me-1">${lang}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        guidesContainer.innerHTML += guideHTML;
    });
}

function loadDrivers() {
    const driversContainer = document.getElementById('drivers-team');
    if (!driversContainer) return;
    
    driversContainer.innerHTML = '';
    
    siteData.drivers.forEach(driver => {
        const driverHTML = `
            <div class="col-lg-3 col-md-6">
                <div class="card h-100 border-0 shadow-sm text-center">
                    <div class="card-body p-4">
                        <div class="mb-3">
                            <img src="${driver.image}" class="rounded-circle img-fluid" style="width: 120px; height: 120px; object-fit: cover;" alt="${driver.name}">
                        </div>
                        <h3 class="card-title h5">${driver.name}</h3>
                        <p class="text-warning fw-bold mb-2">${driver.position}</p>
                        <p class="card-text text-muted mb-3">${driver.description}</p>
                        <div class="d-flex justify-content-center">
                            ${driver.languages.map(lang => `<span class="badge bg-light text-dark me-1">${lang}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        driversContainer.innerHTML += driverHTML;
    });
}

function loadDestinations() {
    const destinationsContainer = document.getElementById('destinations-container');
    if (!destinationsContainer) return;
    
    destinationsContainer.innerHTML = '';
    
    siteData.destinations.forEach(destination => {
        const destinationHTML = `
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm">
                    <img src="${destination.image}" class="card-img-top" alt="${destination.title}">
                    <div class="card-body p-4">
                        <h3 class="card-title h5">${destination.title}</h3>
                        <p class="card-text text-muted">${destination.description}</p>
                        <a href="trips.html" class="btn btn-sm btn-outline-warning mt-2">View Trips</a>
                    </div>
                </div>
            </div>
        `;
        
        destinationsContainer.innerHTML += destinationHTML;
    });
}

function loadTestimonials() {
    const testimonialsContainer = document.getElementById('testimonial-carousel-inner');
    if (!testimonialsContainer) return;
    
    testimonialsContainer.innerHTML = '';
    
    siteData.testimonials.forEach((testimonial, index) => {
        const testimonialHTML = `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="card border-0 shadow-sm">
                    <div class="card-body text-center p-5">
                        <div class="mb-3">
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                            <i class="fas fa-star text-warning"></i>
                        </div>
                        <p class="lead mb-4">"${testimonial.quote}"</p>
                        <div>
                            <h4 class="h6 mb-1">${testimonial.author}</h4>
                            <p class="small text-muted">${testimonial.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        testimonialsContainer.innerHTML += testimonialHTML;
    });
}