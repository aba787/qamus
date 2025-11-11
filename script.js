
// Enhanced Dictionary Database with Multiple Categories
const hrTerms = [
    // ===== BUSINESS TERMS - مصطلحات الأعمال =====
    {
        arabic: "إدارة الموارد البشرية",
        english: "Human Resource Management",
        category: "Business",
        synonyms: ["HR", "Personnel Management", "Staff Management"],
        example: "إدارة الموارد البشرية مسؤولة عن تطوير الموظفين - Human Resource Management is responsible for employee development."
    },
    {
        arabic: "الموظفين",
        english: "Employees",
        category: "noun (plural)",
        example: "الموظفين يحتاجون إلى تدريب مستمر - Employees need continuous training."
    },
    {
        arabic: "الوظيفة",
        english: "Job / Position",
        category: "noun",
        example: "هذه الوظيفة تتطلب خبرة سابقة - This job requires previous experience."
    },
    {
        arabic: "الراتب",
        english: "Salary",
        category: "noun",
        example: "الراتب يحدد بناء على الخبرة والمهارات - Salary is determined based on experience and skills."
    },
    {
        arabic: "تقييم الأداء",
        english: "Performance Evaluation",
        category: "noun",
        example: "تقييم الأداء يتم سنوياً في الشركة - Performance evaluation is conducted annually in the company."
    },
    {
        arabic: "التطوير",
        english: "Development",
        category: "noun",
        example: "التطوير المهني مهم لكل موظف - Professional development is important for every employee."
    },
    {
        arabic: "التدريب",
        english: "Training",
        category: "noun",
        example: "التدريب يحسن من مهارات الموظفين - Training improves employees' skills."
    },
    {
        arabic: "المهارة",
        english: "Skill",
        category: "noun",
        example: "المهارة في التواصل ضرورية للعمل - Communication skill is essential for work."
    },
    {
        arabic: "الخبرة",
        english: "Experience",
        category: "noun",
        example: "الخبرة العملية مطلوبة للترقية - Practical experience is required for promotion."
    },
    {
        arabic: "المسمى الوظيفي",
        english: "Job Title",
        category: "noun",
        example: "المسمى الوظيفي يحدد المسؤوليات - Job title determines the responsibilities."
    },
    
    // مصطلحات تعليمية ومكتبية - Educational & Office Terms
    {
        arabic: "كتاب",
        english: "Book",
        category: "noun",
        example: "قرأت كتاباً مفيداً عن إدارة الأعمال - I read a useful book about business management."
    },
    {
        arabic: "الكتب",
        english: "Books",
        category: "noun (plural)",
        example: "الكتب مصدر مهم للمعرفة - Books are an important source of knowledge."
    },
    {
        arabic: "مكتبة",
        english: "Library",
        category: "noun",
        example: "المكتبة مليئة بالكتب المفيدة - The library is full of useful books."
    },
    {
        arabic: "قلم",
        english: "Pen",
        category: "noun",
        example: "استخدم القلم للكتابة - Use the pen to write."
    },
    {
        arabic: "ورقة",
        english: "Paper",
        category: "noun",
        example: "اكتب على الورقة - Write on the paper."
    },
    {
        arabic: "مكتب",
        english: "Office / Desk",
        category: "noun",
        example: "العمل في المكتب مريح - Working in the office is comfortable."
    },
    {
        arabic: "كمبيوتر",
        english: "Computer",
        category: "noun",
        example: "الكمبيوتر أداة مهمة في العمل - The computer is an important tool at work."
    },
    {
        arabic: "هاتف",
        english: "Phone",
        category: "noun",
        example: "الهاتف وسيلة تواصل سريعة - The phone is a fast communication tool."
    },
    {
        arabic: "رسالة",
        english: "Message / Letter",
        category: "noun",
        example: "أرسل رسالة إلى زميلك - Send a message to your colleague."
    },
    {
        arabic: "اجتماع",
        english: "Meeting",
        category: "noun",
        example: "الاجتماع غداً في الساعة العاشرة - The meeting is tomorrow at ten o'clock."
    },
    
    // مصطلحات يومية شائعة - Common Daily Terms
    {
        arabic: "الطعام",
        english: "Food",
        category: "noun",
        example: "الطعام الصحي مهم للجسم - Healthy food is important for the body."
    },
    {
        arabic: "الماء",
        english: "Water",
        category: "noun",
        example: "اشرب الماء يومياً - Drink water daily."
    },
    {
        arabic: "سيارة",
        english: "Car",
        category: "noun",
        example: "السيارة وسيلة نقل مريحة - The car is a comfortable means of transportation."
    },
    {
        arabic: "بيت",
        english: "House / Home",
        category: "noun",
        example: "البيت مكان الراحة - Home is a place of comfort."
    },
    {
        arabic: "مدرسة",
        english: "School",
        category: "noun",
        example: "المدرسة مكان التعلم - School is a place of learning."
    },
    {
        arabic: "طالب",
        english: "Student",
        category: "noun",
        example: "الطالب يدرس بجد - The student studies hard."
    },
    {
        arabic: "معلم",
        english: "Teacher",
        category: "noun",
        example: "المعلم يشرح الدرس - The teacher explains the lesson."
    },
    {
        arabic: "صديق",
        english: "Friend",
        category: "noun",
        example: "الصديق الوفي نعمة - A loyal friend is a blessing."
    },
    {
        arabic: "عائلة",
        english: "Family",
        category: "noun",
        example: "العائلة أهم شيء في الحياة - Family is the most important thing in life."
    },
    {
        arabic: "وقت",
        english: "Time",
        category: "General",
        synonyms: ["Duration", "Period", "Moment"],
        example: "الوقت من ذهب - Time is gold."
    },

    // ===== TECHNOLOGY TERMS - مصطلحات التقنية =====
    {
        arabic: "الذكاء الاصطناعي",
        english: "Artificial Intelligence",
        category: "Technology",
        synonyms: ["AI", "Machine Intelligence", "Smart Technology"],
        example: "الذكاء الاصطناعي يغير مستقبل التكنولوجيا - Artificial Intelligence is changing the future of technology."
    },
    {
        arabic: "البرمجة",
        english: "Programming",
        category: "Technology",
        synonyms: ["Coding", "Software Development", "Development"],
        example: "البرمجة مهارة مطلوبة في العصر الرقمي - Programming is a required skill in the digital age."
    },
    {
        arabic: "قاعدة البيانات",
        english: "Database",
        category: "Technology",
        synonyms: ["DB", "Data Storage", "Information System"],
        example: "قاعدة البيانات تخزن المعلومات بشكل منظم - Database stores information in an organized way."
    },
    {
        arabic: "الأمن السيبراني",
        english: "Cybersecurity",
        category: "Technology",
        synonyms: ["Information Security", "Digital Security", "Network Security"],
        example: "الأمن السيبراني يحمي من التهديدات الرقمية - Cybersecurity protects against digital threats."
    },
    {
        arabic: "الحوسبة السحابية",
        english: "Cloud Computing",
        category: "Technology",
        synonyms: ["Cloud Services", "Remote Computing", "Internet Computing"],
        example: "الحوسبة السحابية توفر مرونة في العمل - Cloud computing provides flexibility in work."
    },
    {
        arabic: "التطبيق المحمول",
        english: "Mobile Application",
        category: "Technology",
        synonyms: ["Mobile App", "Smartphone App", "App"],
        example: "التطبيق المحمول يسهل الوصول للخدمات - Mobile application facilitates access to services."
    },
    {
        arabic: "التجارة الإلكترونية",
        english: "E-commerce",
        category: "Technology",
        synonyms: ["Online Commerce", "Digital Commerce", "Internet Shopping"],
        example: "التجارة الإلكترونية نمت بسرعة خلال الجائحة - E-commerce grew rapidly during the pandemic."
    },
    {
        arabic: "البيانات الضخمة",
        english: "Big Data",
        category: "Technology",
        synonyms: ["Large Data", "Data Analytics", "Massive Data"],
        example: "البيانات الضخمة تساعد في اتخاذ قرارات أفضل - Big Data helps make better decisions."
    },
    {
        arabic: "إنترنت الأشياء",
        english: "Internet of Things",
        category: "Technology",
        synonyms: ["IoT", "Connected Devices", "Smart Devices"],
        example: "إنترنت الأشياء يربط الأجهزة ببعضها - Internet of Things connects devices together."
    },
    {
        arabic: "التعلم الآلي",
        english: "Machine Learning",
        category: "Technology",
        synonyms: ["ML", "Automated Learning", "AI Learning"],
        example: "التعلم الآلي يحسن الأداء مع الخبرة - Machine Learning improves performance with experience."
    },

    // ===== MEDICAL TERMS - مصطلحات طبية =====
    {
        arabic: "الطبيب",
        english: "Doctor",
        category: "Medical",
        synonyms: ["Physician", "Medical Doctor", "Practitioner"],
        example: "الطبيب يفحص المريض بعناية - The doctor examines the patient carefully."
    },
    {
        arabic: "المستشفى",
        english: "Hospital",
        category: "Medical",
        synonyms: ["Medical Center", "Healthcare Facility", "Clinic"],
        example: "المستشفى يقدم رعاية طبية شاملة - The hospital provides comprehensive medical care."
    },
    {
        arabic: "التشخيص",
        english: "Diagnosis",
        category: "Medical",
        synonyms: ["Medical Assessment", "Examination", "Evaluation"],
        example: "التشخيص المبكر يحسن فرص الشفاء - Early diagnosis improves recovery chances."
    },
    {
        arabic: "العلاج",
        english: "Treatment",
        category: "Medical",
        synonyms: ["Therapy", "Medical Care", "Medication"],
        example: "العلاج الطبيعي مهم للتعافي - Physical therapy is important for recovery."
    },
    {
        arabic: "الصيدلية",
        english: "Pharmacy",
        category: "Medical",
        synonyms: ["Drugstore", "Apothecary", "Medicine Shop"],
        example: "الصيدلية تبيع الأدوية والمستلزمات الطبية - The pharmacy sells medicines and medical supplies."
    },
    {
        arabic: "التمريض",
        english: "Nursing",
        category: "Medical",
        synonyms: ["Patient Care", "Medical Nursing", "Healthcare"],
        example: "التمريض مهنة نبيلة تتطلب صبر وعناية - Nursing is a noble profession requiring patience and care."
    },
    {
        arabic: "الجراحة",
        english: "Surgery",
        category: "Medical",
        synonyms: ["Operation", "Medical Procedure", "Surgical Intervention"],
        example: "الجراحة تتطلب دقة ومهارة عالية - Surgery requires high precision and skill."
    },
    {
        arabic: "الطوارئ",
        english: "Emergency",
        category: "Medical",
        synonyms: ["Urgent Care", "Critical Care", "Emergency Room"],
        example: "قسم الطوارئ متاح على مدار الساعة - The emergency department is available 24/7."
    },
    {
        arabic: "التطعيم",
        english: "Vaccination",
        category: "Medical",
        synonyms: ["Immunization", "Vaccine", "Inoculation"],
        example: "التطعيم يحمي من الأمراض المعدية - Vaccination protects against infectious diseases."
    },
    {
        arabic: "الفحص الطبي",
        english: "Medical Examination",
        category: "Medical",
        synonyms: ["Health Check", "Physical Exam", "Medical Test"],
        example: "الفحص الطبي الدوري مهم للصحة - Regular medical examination is important for health."
    },

    // ===== TRAVEL TERMS - مصطلحات السفر =====
    {
        arabic: "المطار",
        english: "Airport",
        category: "Travel",
        synonyms: ["Terminal", "Aviation Hub", "Flight Hub"],
        example: "المطار مزدحم في موسم الإجازات - The airport is busy during holiday season."
    },
    {
        arabic: "الطائرة",
        english: "Airplane",
        category: "Travel",
        synonyms: ["Aircraft", "Plane", "Flight"],
        example: "الطائرة تقلع في الموعد المحدد - The airplane takes off on schedule."
    },
    {
        arabic: "الفندق",
        english: "Hotel",
        category: "Travel",
        synonyms: ["Resort", "Inn", "Accommodation"],
        example: "الفندق يقدم خدمة ممتازة للضيوف - The hotel provides excellent service to guests."
    },
    {
        arabic: "التأشيرة",
        english: "Visa",
        category: "Travel",
        synonyms: ["Entry Permit", "Travel Document", "Authorization"],
        example: "التأشيرة مطلوبة لدخول البلد - Visa is required to enter the country."
    },
    {
        arabic: "جواز السفر",
        english: "Passport",
        category: "Travel",
        synonyms: ["Travel Document", "Identity Document", "International ID"],
        example: "جواز السفر وثيقة سفر رسمية - Passport is an official travel document."
    },
    {
        arabic: "الحجز",
        english: "Reservation",
        category: "Travel",
        synonyms: ["Booking", "Appointment", "Registration"],
        example: "الحجز المبكر يوفر أسعار أفضل - Early reservation offers better prices."
    },
    {
        arabic: "الرحلة",
        english: "Trip",
        category: "Travel",
        synonyms: ["Journey", "Travel", "Voyage"],
        example: "الرحلة كانت ممتعة ومفيدة - The trip was enjoyable and beneficial."
    },
    {
        arabic: "الأمتعة",
        english: "Luggage",
        category: "Travel",
        synonyms: ["Baggage", "Suitcase", "Travel Bags"],
        example: "الأمتعة يجب أن تكون ضمن الوزن المسموح - Luggage must be within allowed weight."
    },
    {
        arabic: "السياحة",
        english: "Tourism",
        category: "Travel",
        synonyms: ["Sightseeing", "Travel Industry", "Vacation"],
        example: "السياحة تساهم في الاقتصاد المحلي - Tourism contributes to the local economy."
    },
    {
        arabic: "الدليل السياحي",
        english: "Tour Guide",
        category: "Travel",
        synonyms: ["Travel Guide", "Tourist Guide", "Local Guide"],
        example: "الدليل السياحي يشرح تاريخ المكان - The tour guide explains the history of the place."
    },

    // ===== EDUCATION TERMS - مصطلحات تعليمية =====
    {
        arabic: "التعليم الإلكتروني",
        english: "E-learning",
        category: "Education",
        synonyms: ["Online Learning", "Digital Education", "Distance Learning"],
        example: "التعليم الإلكتروني أصبح أكثر شيوعاً - E-learning has become more common."
    },
    {
        arabic: "الجامعة",
        english: "University",
        category: "Education",
        synonyms: ["College", "Higher Education", "Academic Institution"],
        example: "الجامعة تقدم برامج أكاديمية متنوعة - The university offers diverse academic programs."
    },
    {
        arabic: "البحث العلمي",
        english: "Scientific Research",
        category: "Education",
        synonyms: ["Research", "Academic Study", "Investigation"],
        example: "البحث العلمي يقدم معرفة جديدة - Scientific research provides new knowledge."
    },
    {
        arabic: "المنهج الدراسي",
        english: "Curriculum",
        category: "Education",
        synonyms: ["Study Program", "Course Content", "Academic Plan"],
        example: "المنهج الدراسي يشمل مواد متنوعة - The curriculum includes various subjects."
    },
    {
        arabic: "التقييم",
        english: "Assessment",
        category: "Education",
        synonyms: ["Evaluation", "Testing", "Grading"],
        example: "التقييم يقيس مدى فهم الطلاب - Assessment measures student understanding."
    },

    // ===== FINANCE TERMS - مصطلحات مالية =====
    {
        arabic: "البنك",
        english: "Bank",
        category: "Finance",
        synonyms: ["Financial Institution", "Banking", "Credit Union"],
        example: "البنك يقدم خدمات مالية متنوعة - The bank provides various financial services."
    },
    {
        arabic: "الاستثمار",
        english: "Investment",
        category: "Finance",
        synonyms: ["Capital Investment", "Financial Investment", "Portfolio"],
        example: "الاستثمار في التعليم مربح على المدى الطويل - Investment in education is profitable long-term."
    },
    {
        arabic: "القرض",
        english: "Loan",
        category: "Finance",
        synonyms: ["Credit", "Borrowing", "Financial Loan"],
        example: "القرض يساعد في تمويل المشاريع - Loan helps finance projects."
    },
    {
        arabic: "التأمين",
        english: "Insurance",
        category: "Finance",
        synonyms: ["Coverage", "Protection", "Policy"],
        example: "التأمين يحمي من المخاطر المالية - Insurance protects against financial risks."
    },
    {
        arabic: "الميزانية",
        english: "Budget",
        category: "Finance",
        synonyms: ["Financial Plan", "Spending Plan", "Financial Budget"],
        example: "الميزانية تساعد في إدارة الأموال - Budget helps manage money."
    }
];

// Initialize the enhanced application
document.addEventListener('DOMContentLoaded', function() {
    displayAllTerms();
    initializeStats();
    
    // Load voices when available
    if ('speechSynthesis' in window) {
        speechSynthesis.addEventListener('voiceschanged', function() {
            console.log('Available voices loaded');
        });
    }
    
    // Add category filter event listener
    document.getElementById('categoryFilter').addEventListener('change', function() {
        const query = document.getElementById('searchInput').value.trim();
        if (query || this.value !== 'all') {
            searchTerm();
        } else {
            hideSearchResults();
        }
    });
    
    // Add enter key functionality to search
    // Search functionality - Enter key
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchTerm();
        }
    });
    
    // Real-time search as user types
    document.getElementById('searchInput').addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length >= 1) {
            searchTerm();
        } else if (query.length === 0) {
            hideSearchResults();
        }
    });
    
    // Search button click event
    const searchButton = document.querySelector('button[onclick="searchTerm()"]');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            searchTerm();
        });
    }
    
    // Add ripple effect to buttons
    addRippleEffect();
    
    // Add loading animation
    addLoadingAnimations();
    
    // Initialize particles background
    initParticles();
    
    // Add voice settings panel
    createVoiceSettings();
});

// Display all terms in the dictionary tab with enhanced features
function displayAllTerms() {
    const termsList = document.getElementById('termsList');
    termsList.innerHTML = '';
    
    // Add statistics header
    const statsHeader = createStatsHeader();
    termsList.appendChild(statsHeader);
    
    hrTerms.forEach(term => {
        const termCard = createTermCard(term);
        termsList.appendChild(termCard);
    });
}

// Initialize and display statistics
function initializeStats() {
    const totalTerms = hrTerms.length;
    const categories = [...new Set(hrTerms.map(term => term.category))];
    
    console.log(`📊 إحصائيات الموقع المحسن:
    - إجمالي المصطلحات: ${totalTerms}
    - عدد الفئات: ${categories.length}
    - الفئات: ${categories.join(', ')}
    - نظام البحث الذكي: متاح ✅
    - فلترة متقدمة: متاحة ✅
    - دعم المرادفات: متاح ✅`);
}

// Create statistics header for dictionary
function createStatsHeader() {
    const header = document.createElement('div');
    header.className = 'stats-header';
    
    const categoryStats = {};
    hrTerms.forEach(term => {
        categoryStats[term.category] = (categoryStats[term.category] || 0) + 1;
    });
    
    const totalTerms = hrTerms.length;
    const totalCategories = Object.keys(categoryStats).length;
    
    header.innerHTML = `
        <div class="dictionary-stats">
            <h4>📊 إحصائيات القاموس المحسن - Enhanced Dictionary Statistics</h4>
            <div class="stats-summary">
                <div class="stat-item">
                    <span class="stat-number">${totalTerms}</span>
                    <span class="stat-label">إجمالي المصطلحات<br>Total Terms</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">${totalCategories}</span>
                    <span class="stat-label">فئات متخصصة<br>Specialized Categories</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">✨</span>
                    <span class="stat-label">بحث ذكي<br>Smart Search</span>
                </div>
            </div>
            <div class="category-stats">
                ${Object.entries(categoryStats)
                    .sort((a, b) => b[1] - a[1])
                    .map(([category, count]) => 
                        `<span class="category-stat">
                            ${getCategoryIcon(category)} ${category}: ${count}
                        </span>`
                    ).join('')}
            </div>
        </div>
    `;
    
    return header;
}

// Create a term card element
function createTermCard(term, index = null) {
    const card = document.createElement('div');
    card.className = 'term-card';
    
    const termIndex = index !== null ? index : hrTerms.indexOf(term);
    const isFavorite = favoriteTerms.includes(termIndex);
    
    card.innerHTML = `
        <div class="term-header">
            <button class="speak-btn" onclick="speakText('${term.arabic}', 'ar')" title="استمع للنطق العربي">🔊</button>
            <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${termIndex})" title="إضافة للمفضلة">
                ${isFavorite ? '❤️' : '🤍'}
            </button>
        </div>
        <div class="term-arabic" onclick="speakText('${term.arabic}', 'ar')">${term.arabic}</div>
        <div class="term-english" onclick="speakText('${term.english}', 'en')">${term.english}</div>
        <div class="term-category">${term.category}</div>
        <div class="term-example">${term.example}</div>
        <button class="speak-btn-en" onclick="speakText('${term.english}', 'en')" title="Listen to English pronunciation">🔊 EN</button>
    `;
    
    return card;
}

// Enhanced Smart Search with AI-like capabilities
function searchTerm() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const query = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    // Add searching animation with enhanced effects
    searchInput.style.background = 'linear-gradient(135deg, rgba(139, 21, 56, 0.1), rgba(114, 47, 55, 0.1))';
    searchInput.style.transform = 'scale(1.02)';
    
    setTimeout(() => {
        searchInput.style.background = 'rgba(255, 255, 255, 0.9)';
        searchInput.style.transform = 'scale(1)';
    }, 300);
    
    if (!query && selectedCategory === 'all') {
        hideSearchResults();
        return;
    }
    
    // Advanced Smart Search Algorithm with multiple matching strategies
    const results = hrTerms.filter(term => {
        // Category filter
        if (selectedCategory !== 'all' && term.category !== selectedCategory) {
            return false;
        }
        
        // If no search query, return all terms in selected category
        if (!query) {
            return true;
        }
        
        // Multi-level search matching
        const searchMatches = [
            // Exact match (highest priority)
            term.arabic.toLowerCase() === query,
            term.english.toLowerCase() === query,
            
            // Starts with match (high priority)
            term.arabic.toLowerCase().startsWith(query),
            term.english.toLowerCase().startsWith(query),
            
            // Contains match (medium priority)
            term.arabic.toLowerCase().includes(query),
            term.english.toLowerCase().includes(query),
            
            // Synonyms search (medium priority)
            term.synonyms && term.synonyms.some(synonym => 
                synonym.toLowerCase().includes(query) || 
                synonym.toLowerCase().startsWith(query)
            ),
            
            // Category match (low priority)
            term.category.toLowerCase().includes(query),
            
            // Example search (low priority)
            term.example.toLowerCase().includes(query),
            
            // Partial word matching for Arabic/English
            query.length >= 2 && (
                term.arabic.toLowerCase().split(' ').some(word => word.includes(query)) ||
                term.english.toLowerCase().split(' ').some(word => word.includes(query))
            )
        ];
        
        return searchMatches.some(match => match);
    });
    
    // Sort results by relevance
    const sortedResults = results.sort((a, b) => {
        // Exact matches first
        const aExact = a.arabic.toLowerCase() === query || a.english.toLowerCase() === query;
        const bExact = b.arabic.toLowerCase() === query || b.english.toLowerCase() === query;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // Then starts with matches
        const aStarts = a.arabic.toLowerCase().startsWith(query) || a.english.toLowerCase().startsWith(query);
        const bStarts = b.arabic.toLowerCase().startsWith(query) || b.english.toLowerCase().startsWith(query);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;
        
        // Alphabetical order for similar relevance
        return a.arabic.localeCompare(b.arabic);
    });
    
    displaySearchResults(sortedResults, query, selectedCategory);
    
    // Enhanced logging for debugging
    console.log(`🎯 البحث الذكي: "${query}" في فئة: "${selectedCategory}" - وُجد: ${sortedResults.length} نتائج`);
    console.log('Smart search results:', sortedResults);
}

// Enhanced display search results with category info and synonyms
function displaySearchResults(results, query, category = 'all') {
    const searchResults = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');
    
    searchResults.style.display = 'block';
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        const categoryText = category !== 'all' ? ` في فئة "${category}"` : '';
        resultsContainer.innerHTML = `
            <div class="no-results">
                😔 لم يتم العثور على نتائج لـ "<strong>${query}</strong>"${categoryText}<br>
                😔 No results found for "<strong>${query}</strong>" ${category !== 'all' ? `in category "${category}"` : ''}<br>
                <small>💡 جرب كلمات مختلفة أو غير الفئة أو تحقق من الإملاء</small><br>
                <small>💡 Try different words, change category, or check spelling</small>
            </div>
        `;
        return;
    }
    
    // Enhanced results header with category statistics
    const categoryStats = getCategoryStats(results);
    const categoryText = category !== 'all' ? ` في فئة "${category}"` : '';
    
    resultsContainer.innerHTML = `
        <div class="results-header">
            <div class="results-summary">
                <strong>🎯 تم العثور على ${results.length} نتيجة لـ "${query}"${categoryText}</strong><br>
                <strong>🎯 Found ${results.length} result(s) for "${query}" ${category !== 'all' ? `in "${category}"` : ''}</strong>
            </div>
            <div class="category-breakdown">
                ${categoryStats.map(stat => `
                    <span class="category-tag" data-category="${stat.category}">
                        ${getCategoryIcon(stat.category)} ${stat.category}: ${stat.count}
                    </span>
                `).join('')}
            </div>
        </div>
    `;
    
    results.forEach(term => {
        const enhancedTermCard = createEnhancedTermCard(term, query);
        resultsContainer.appendChild(enhancedTermCard);
    });
    
    // Scroll to results smoothly with enhanced animation
    setTimeout(() => {
        searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Add highlight animation to results
        const termCards = resultsContainer.querySelectorAll('.term-card');
        termCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation = 'highlightResult 0.6s ease';
            }, index * 100);
        });
    }, 100);
}

// Get category statistics for results
function getCategoryStats(results) {
    const stats = {};
    results.forEach(term => {
        stats[term.category] = (stats[term.category] || 0) + 1;
    });
    
    return Object.entries(stats).map(([category, count]) => ({
        category,
        count
    })).sort((a, b) => b.count - a.count);
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        'Business': '💼',
        'Technology': '💻',
        'Medical': '🏥',
        'Travel': '✈️',
        'Education': '🎓',
        'Finance': '💰',
        'General': '📝'
    };
    return icons[category] || '📚';
}

// Create enhanced term card with synonyms and highlighting
function createEnhancedTermCard(term, searchQuery = '') {
    const card = document.createElement('div');
    card.className = 'term-card enhanced';
    
    const termIndex = hrTerms.indexOf(term);
    const isFavorite = favoriteTerms.includes(termIndex);
    
    // Highlight matching text
    const highlightText = (text, query) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="highlight">$1</mark>');
    };
    
    // Display synonyms if available
    const synonymsDisplay = term.synonyms ? 
        `<div class="synonyms">
            <strong>مرادفات:</strong> ${term.synonyms.join(', ')}
        </div>` : '';
    
    card.innerHTML = `
        <div class="term-header">
            <span class="category-badge" data-category="${term.category}">
                ${getCategoryIcon(term.category)} ${term.category}
            </span>
            <div class="term-actions">
                <button class="speak-btn" onclick="speakText('${term.arabic}', 'ar')" title="استمع للنطق العربي">🔊</button>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${termIndex})" title="إضافة للمفضلة">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
        <div class="term-arabic" onclick="speakText('${term.arabic}', 'ar')">${highlightText(term.arabic, searchQuery)}</div>
        <div class="term-english" onclick="speakText('${term.english}', 'en')">${highlightText(term.english, searchQuery)}</div>
        ${synonymsDisplay}
        <div class="term-example">${highlightText(term.example, searchQuery)}</div>
        <button class="speak-btn-en" onclick="speakText('${term.english}', 'en')" title="Listen to English pronunciation">🔊 EN</button>
    `;
    
    return card;
}

// Hide search results
function hideSearchResults() {
    document.getElementById('searchResults').style.display = 'none';
}

// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Hide search results when switching tabs
    hideSearchResults();
    
    // Clear search input
    document.getElementById('searchInput').value = '';
}

// Clear search functionality
function clearSearch() {
    document.getElementById('searchInput').value = '';
    hideSearchResults();
}

// Enhanced pronunciation feature with better voice settings and quality
function speakText(text, lang = 'ar') {
    if ('speechSynthesis' in window) {
        // Stop any current speech and clear queue
        speechSynthesis.cancel();
        
        // Wait a moment to ensure clean start
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Configure voice settings based on language for better clarity
            if (lang === 'ar') {
                utterance.lang = 'ar-SA';
                utterance.rate = 0.85; // Slower for better clarity in Arabic
                utterance.pitch = 1.0; // Natural pitch for clearer sound
                utterance.volume = 1.0; // Maximum volume for clarity
            } else {
                utterance.lang = 'en-US';
                utterance.rate = 0.75; // Slower English for better pronunciation
                utterance.pitch = 1.0; // Natural pitch
                utterance.volume = 1.0; // Maximum volume
            }
            
            // Enhanced voice selection for better quality
            const voices = speechSynthesis.getVoices();
            let selectedVoice = null;
            
            if (lang === 'ar') {
                // Priority order for Arabic voices
                selectedVoice = voices.find(voice => 
                    voice.lang.includes('ar-SA') || 
                    voice.lang.includes('ar-EG') || 
                    voice.lang.includes('ar')
                ) || voices.find(voice => voice.lang.startsWith('ar'));
            } else {
                // Priority order for English voices
                selectedVoice = voices.find(voice => 
                    voice.name.includes('Google') && voice.lang.includes('en-US')
                ) || voices.find(voice => 
                    voice.name.includes('Microsoft') && voice.lang.includes('en-US')
                ) || voices.find(voice => voice.lang.includes('en-US')) || 
                voices.find(voice => voice.lang.startsWith('en'));
            }
            
            if (selectedVoice) {
                utterance.voice = selectedVoice;
                console.log(`Using voice: ${selectedVoice.name} (${selectedVoice.lang})`);
            }
            
            // Enhanced event handlers for better experience
            utterance.onstart = function() {
                document.body.style.setProperty('--speech-active', '1');
                showSpeechIndicator();
                console.log(`Speaking: ${text}`);
            };
            
            utterance.onend = function() {
                document.body.style.setProperty('--speech-active', '0');
                hideSpeechIndicator();
                console.log('Speech ended successfully');
            };
            
            utterance.onerror = function(event) {
                console.error('Speech error:', event.error);
                hideSpeechIndicator();
                // Retry once if error occurs
                if (event.error === 'interrupted' || event.error === 'canceled') {
                    setTimeout(() => {
                        speechSynthesis.speak(utterance);
                    }, 100);
                }
            };
            
            utterance.onpause = function() {
                console.log('Speech paused');
            };
            
            utterance.onresume = function() {
                console.log('Speech resumed');
            };
            
            // Speak with enhanced settings
            speechSynthesis.speak(utterance);
            
        }, 50); // Small delay for clean speech start
        
    } else {
        alert('المتصفح لا يدعم ميزة النطق - Speech not supported in this browser');
    }
}

// Add favorite terms functionality
let favoriteTerms = JSON.parse(localStorage.getItem('favoriteTerms')) || [];

function toggleFavorite(index) {
    if (favoriteTerms.includes(index)) {
        favoriteTerms = favoriteTerms.filter(i => i !== index);
    } else {
        favoriteTerms.push(index);
    }
    localStorage.setItem('favoriteTerms', JSON.stringify(favoriteTerms));
    displayAllTerms(); // Refresh display
}

// Show favorites only
function showFavorites() {
    const termsList = document.getElementById('termsList');
    termsList.innerHTML = '';
    
    if (favoriteTerms.length === 0) {
        termsList.innerHTML = '<div class="no-results">لا توجد مصطلحات مفضلة بعد<br>No favorite terms yet</div>';
        return;
    }
    
    favoriteTerms.forEach(index => {
        if (hrTerms[index]) {
            const termCard = createTermCard(hrTerms[index], index);
            termsList.appendChild(termCard);
        }
    });
}

// Add quiz functionality
let currentQuizTerm = null;
let quizScore = 0;
let quizTotal = 0;

function startQuiz() {
    const randomIndex = Math.floor(Math.random() * hrTerms.length);
    currentQuizTerm = hrTerms[randomIndex];
    
    const quizContainer = document.getElementById('quizContainer');
    const isArabicToEnglish = Math.random() > 0.5;
    
    quizContainer.innerHTML = `
        <div class="quiz-question">
            <h4>ترجم المصطلح التالي:</h4>
            <div class="quiz-term">${isArabicToEnglish ? currentQuizTerm.arabic : currentQuizTerm.english}</div>
            <input type="text" id="quizAnswer" placeholder="اكتب الترجمة هنا...">
            <button onclick="checkQuizAnswer(${isArabicToEnglish})">تحقق من الإجابة</button>
            <div id="quizResult"></div>
            <div class="quiz-score">النتيجة: ${quizScore}/${quizTotal}</div>
        </div>
    `;
    
    // Focus on input
    setTimeout(() => document.getElementById('quizAnswer').focus(), 100);
}

function checkQuizAnswer(isArabicToEnglish) {
    const userAnswer = document.getElementById('quizAnswer').value.trim().toLowerCase();
    const correctAnswer = isArabicToEnglish ? currentQuizTerm.english.toLowerCase() : currentQuizTerm.arabic;
    const resultDiv = document.getElementById('quizResult');
    
    quizTotal++;
    
    if (userAnswer === correctAnswer.toLowerCase() || userAnswer.includes(correctAnswer.toLowerCase().split(' ')[0])) {
        quizScore++;
        resultDiv.innerHTML = `<div class="correct">✅ صحيح! Correct!</div>`;
        resultDiv.className = 'quiz-result correct';
    } else {
        resultDiv.innerHTML = `<div class="incorrect">❌ خطأ! الإجابة الصحيحة: ${correctAnswer}</div>`;
        resultDiv.className = 'quiz-result incorrect';
    }
    
    // Update score display
    document.querySelector('.quiz-score').textContent = `النتيجة: ${quizScore}/${quizTotal}`;
    
    // Show next question button
    setTimeout(() => {
        resultDiv.innerHTML += '<button onclick="startQuiz()">سؤال آخر</button>';
    }, 2000);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click to copy functionality for terms
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('term-english') || e.target.classList.contains('term-arabic')) {
            const text = e.target.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show beautiful notification
                showCopyNotification(e.target, text);
            });
        }
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput').focus();
        }
    });
});

// Add ripple effect to buttons
function addRippleEffect() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.add('ripple');
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: rippleEffect 0.6s linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add loading animations
function addLoadingAnimations() {
    const cards = document.querySelectorAll('.term-card, .rule-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Show visual speech indicator
function showSpeechIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'speechIndicator';
    indicator.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #8B1538, #722F37);
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        font-size: 14px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(139, 21, 56, 0.4);
        animation: pulseIndicator 1.5s infinite;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    indicator.innerHTML = `
        <div style="width: 20px; height: 20px; background: white; border-radius: 50%; animation: bounce 1s infinite;"></div>
        جاري النطق... Speaking...
    `;
    
    document.body.appendChild(indicator);
}

// Hide speech indicator
function hideSpeechIndicator() {
    const indicator = document.getElementById('speechIndicator');
    if (indicator) {
        indicator.style.animation = 'fadeOut 0.5s ease';
        setTimeout(() => indicator.remove(), 500);
    }
}

// Beautiful copy notification
function showCopyNotification(element, text) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #8B1538, #722F37);
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 12px;
        z-index: 1000;
        opacity: 0;
        animation: copyNotification 2s ease;
        pointer-events: none;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    notification.textContent = '✓ تم النسخ!';
    
    const parent = element.parentElement;
    parent.style.position = 'relative';
    parent.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Initialize particles background
function initParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 20; i++) {
        createParticle(particlesContainer);
    }
}

// Create floating particles
function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: float ${Math.random() * 20 + 10}s infinite linear;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, (Math.random() * 20 + 10) * 1000);
}

// تم إزالة الدالة المكررة - الدالة الأساسية موجودة أعلاه

// Create voice settings panel
function createVoiceSettings() {
    const settingsBtn = document.createElement('button');
    settingsBtn.innerHTML = '🎙️ إعدادات الصوت';
    settingsBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: linear-gradient(135deg, #8B1538, #722F37);
        color: white;
        border: none;
        border-radius: 25px;
        padding: 12px 20px;
        font-size: 14px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(139, 21, 56, 0.4);
    `;
    
    settingsBtn.onclick = function() {
        const panel = document.getElementById('voicePanel');
        if (panel) {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        } else {
            createVoicePanel();
        }
    };
    
    document.body.appendChild(settingsBtn);
}

// Create voice control panel
function createVoicePanel() {
    const panel = document.createElement('div');
    panel.id = 'voicePanel';
    panel.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 20px;
        width: 300px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-size: 14px;
    `;
    
    panel.innerHTML = `
        <h4 style="margin-bottom: 15px; color: #667eea;">إعدادات النطق عالي الجودة</h4>
        <div style="margin-bottom: 10px;">
            <label>سرعة النطق العربي (للوضوح):</label>
            <input type="range" id="arabicSpeed" min="0.3" max="1.5" step="0.05" value="0.85">
            <span id="arabicSpeedValue">0.85</span>
        </div>
        <div style="margin-bottom: 10px;">
            <label>سرعة النطق الإنجليزي (للوضوح):</label>
            <input type="range" id="englishSpeed" min="0.3" max="1.5" step="0.05" value="0.75">
            <span id="englishSpeedValue">0.75</span>
        </div>
        <div style="margin-bottom: 10px;">
            <label>مستوى الصوت (أقصى وضوح):</label>
            <input type="range" id="volumeLevel" min="0.5" max="1" step="0.05" value="1.0">
            <span id="volumeValue">1.0</span>
        </div>
        <button onclick="testVoice()" style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 8px 15px; border-radius: 10px; cursor: pointer;">🎵 اختبار الصوت</button>
    `;
    
    document.body.appendChild(panel);
    
    // Add event listeners for sliders
    document.getElementById('arabicSpeed').oninput = function() {
        document.getElementById('arabicSpeedValue').textContent = this.value;
    };
    
    document.getElementById('englishSpeed').oninput = function() {
        document.getElementById('englishSpeedValue').textContent = this.value;
    };
    
    document.getElementById('volumeLevel').oninput = function() {
        document.getElementById('volumeValue').textContent = this.value;
    };
}

// Enhanced test voice function with improved clarity
function testVoice() {
    const arabicSpeed = document.getElementById('arabicSpeed').value;
    const englishSpeed = document.getElementById('englishSpeed').value;
    const volume = document.getElementById('volumeLevel').value;
    
    // Stop any current speech
    speechSynthesis.cancel();
    
    // Test Arabic with enhanced settings
    setTimeout(() => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance('مرحباً، هذا اختبار للصوت العربي الواضح بدون تقطع');
            utterance.lang = 'ar-SA';
            utterance.rate = parseFloat(arabicSpeed);
            utterance.volume = parseFloat(volume);
            utterance.pitch = 1.0;
            
            // Find best Arabic voice
            const voices = speechSynthesis.getVoices();
            const arabicVoice = voices.find(voice => 
                voice.lang.includes('ar-SA') || voice.lang.includes('ar')
            );
            if (arabicVoice) {
                utterance.voice = arabicVoice;
            }
            
            utterance.onend = function() {
                // Test English after Arabic completes
                setTimeout(() => {
                    if ('speechSynthesis' in window) {
                        const englishUtterance = new SpeechSynthesisUtterance('Hello, this is a clear English voice test without interruption');
                        englishUtterance.lang = 'en-US';
                        englishUtterance.rate = parseFloat(englishSpeed);
                        englishUtterance.volume = parseFloat(volume);
                        englishUtterance.pitch = 1.0;
                        
                        // Find best English voice
                        const englishVoice = voices.find(voice => 
                            voice.lang.includes('en-US') && 
                            (voice.name.includes('Google') || voice.name.includes('Microsoft'))
                        ) || voices.find(voice => voice.lang.includes('en-US'));
                        
                        if (englishVoice) {
                            englishUtterance.voice = englishVoice;
                        }
                        
                        speechSynthesis.speak(englishUtterance);
                    }
                }, 200);
            };
            
            speechSynthesis.speak(utterance);
        }
    }, 200);
}

// Update speakText to use enhanced custom settings for clarity
const originalSpeakText = speakText;
speakText = function(text, lang = 'ar') {
    const arabicSpeed = document.getElementById('arabicSpeed')?.value || 0.85;
    const englishSpeed = document.getElementById('englishSpeed')?.value || 0.75;
    const volume = document.getElementById('volumeLevel')?.value || 1.0;
    
    if ('speechSynthesis' in window) {
        // Enhanced stopping and clearing for better audio quality
        speechSynthesis.cancel();
        
        setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(text);
            
            if (lang === 'ar') {
                utterance.lang = 'ar-SA';
                utterance.rate = parseFloat(arabicSpeed);
                utterance.pitch = 1.0; // Natural pitch for clarity
                utterance.volume = parseFloat(volume);
            } else {
                utterance.lang = 'en-US';
                utterance.rate = parseFloat(englishSpeed);
                utterance.pitch = 1.0; // Natural pitch for clarity
                utterance.volume = parseFloat(volume);
            }
            
            // Enhanced voice selection
            const voices = speechSynthesis.getVoices();
            let selectedVoice = null;
            
            if (lang === 'ar') {
                selectedVoice = voices.find(voice => 
                    voice.lang.includes('ar-SA') || voice.lang.includes('ar')
                );
            } else {
                selectedVoice = voices.find(voice => 
                    voice.lang.includes('en-US') && 
                    (voice.name.includes('Google') || voice.name.includes('Microsoft'))
                ) || voices.find(voice => voice.lang.includes('en-US'));
            }
            
            if (selectedVoice) {
                utterance.voice = selectedVoice;
            }
            
            utterance.onstart = function() {
                showSpeechIndicator();
            };
            
            utterance.onend = function() {
                hideSpeechIndicator();
            };
            
            utterance.onerror = function(event) {
                console.error('Speech error:', event.error);
                hideSpeechIndicator();
            };
            
            speechSynthesis.speak(utterance);
        }, 50); // Small delay for cleaner audio
    }
};

// تم نقل جميع الـ CSS animations إلى ملف style.css لتحسين التنظيم
console.log('جميع الـ CSS animations موجودة الآن في style.css');
