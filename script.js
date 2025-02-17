const essayFrameworks = {
    writesAndWriteNots: {
        title: "Writes and Write-Nots",
        principles: [
            "Writing is a tool for discovering what you think",
            "Good writing requires constant rewriting",
            "The best writing comes from genuine interest",
            "Writing ability correlates with thinking ability"
        ],
        checklist: [
            "Write down your raw thoughts without filtering",
            "Identify topics you can't stop thinking about",
            "Set aside dedicated time for rewriting",
            "Share drafts with thoughtful readers",
            "Keep a list of interesting observations"
        ],
        questions: [
            "What do you think about but never write about?",
            "Which parts of your writing feel forced?",
            "What would you write if no one would judge you?",
            "What ideas keep coming back to you?"
        ]
    },
    originsWokeness: {
        title: "The Origins of Wokeness",
        principles: [
            "Ideas evolve like organisms through cultural selection",
            "Movements often drift from their original purposes",
            "Social phenomena can be understood through their evolution",
            "Good intentions can lead to unexpected outcomes"
        ],
        checklist: [
            "Trace the historical roots of the movement",
            "Identify key turning points in its evolution",
            "Map out how meanings have shifted over time",
            "Analyze the incentive structures at play",
            "Examine unintended consequences"
        ],
        questions: [
            "How has the meaning evolved from its origins?",
            "What selection pressures shaped this movement?",
            "What were the original intentions vs current state?",
            "What mechanisms amplified certain aspects over others?"
        ]
    },
    startupIdeas: {
        title: "How to Get Startup Ideas",
        principles: [
            "The best ideas come from problems you personally experience",
            "Look for things that seem missing from the world",
            "Don't try to think of startup ideas, notice them",
            "The best ideas often seem bad at first"
        ],
        checklist: [
            "Identify a problem you personally have",
            "List 3 existing solutions and their weaknesses",
            "Write down what's missing in your field",
            "Talk to potential users about their problems",
            "Build a simple prototype to test assumptions"
        ],
        questions: [
            "What's something that should exist but doesn't?",
            "What do you wish someone would build for you?",
            "What's frustrating in your daily work?",
            "What seems inefficient in your industry?"
        ]
    },
    doWork: {
        title: "How to Do Great Work",
        principles: [
            "Work on things that interest you",
            "Ignore prestige when choosing what to work on",
            "Develop a nose for what's important",
            "Learn to distinguish good work from bad"
        ],
        checklist: [
            "List your genuine interests",
            "Identify what excites you intellectually",
            "Remove prestige-driven motivations",
            "Set aside time for deep work",
            "Find ways to get rapid feedback"
        ],
        questions: [
            "What would you work on if you didn't need money?",
            "What topics do you keep coming back to?",
            "Where do you have unique insights?",
            "What feels like play to you but work to others?"
        ]
    },
    writing: {
        title: "Writing Like You Talk",
        principles: [
            "Write in spoken language",
            "Don't try to sound impressive",
            "Write about what interests you",
            "Rewrite until it sounds natural"
        ],
        checklist: [
            "Read your writing out loud",
            "Remove any sentences that feel unnatural",
            "Simplify complex explanations",
            "Use examples from your experience",
            "Get feedback from readers"
        ],
        questions: [
            "Would you say this sentence in conversation?",
            "Can you explain this idea to a friend?",
            "What's the simplest way to make your point?",
            "Are you writing to impress or to explain?"
        ]
    },
    makeMoney: {
        title: "How to Make Wealth",
        principles: [
            "Wealth is created by making things people want",
            "Small groups are more efficient at creating wealth",
            "Technology enables wealth creation multiplication",
            "Measurement and leverage are key to wealth creation"
        ],
        checklist: [
            "Identify opportunities for wealth creation vs. wealth transfer",
            "Join or create a small, focused team",
            "Find ways to measure individual contribution",
            "Look for technological leverage points",
            "Focus on creating measurable value"
        ],
        questions: [
            "What value are you creating?",
            "How can you measure your contribution?",
            "Where can you apply technological leverage?",
            "Are you in a position to capture the value you create?"
        ]
    },
    disagree: {
        title: "How to Disagree",
        principles: [
            "Focus on the central argument, not surface issues",
            "Stronger forms of disagreement address substance, not tone",
            "Quote the exact claim you're responding to",
            "Explicitly state your counterargument"
        ],
        checklist: [
            "Identify the core argument being made",
            "Quote specific statements you're addressing",
            "Present concrete counterexamples",
            "Acknowledge valid points in the original argument",
            "Focus on facts rather than personalities"
        ],
        questions: [
            "What's the strongest version of their argument?",
            "What evidence would change your mind?",
            "Are you addressing the argument or the person?",
            "Can you steelman their position?"
        ]
    },
    think: {
        title: "How to Think",
        principles: [
            "Keep your identity small",
            "Hold beliefs provisionally",
            "Seek out disconfirming evidence",
            "Think in terms of probabilities, not certainties"
        ],
        checklist: [
            "List your strongly held beliefs",
            "Identify emotional attachments to ideas",
            "Actively seek opposing viewpoints",
            "Practice expressing uncertainty levels",
            "Regular review and update of beliefs"
        ],
        questions: [
            "What beliefs am I emotionally attached to?",
            "What would change my mind about this?",
            "What's the strongest argument against my position?",
            "How certain am I about this, and why?"
        ]
    },
    learn: {
        title: "How to Learn",
        principles: [
            "Learn by doing real things",
            "Follow your curiosity",
            "Build things you want to exist",
            "Don't worry about formal credentials"
        ],
        checklist: [
            "Start a concrete project in your area of interest",
            "Document what you don't understand",
            "Find others learning the same thing",
            "Build a minimal version quickly",
            "Share your learning process publicly"
        ],
        questions: [
            "What do I want to exist that doesn't?",
            "What am I curious about but afraid to try?",
            "Who can I learn from by watching them work?",
            "What's the smallest version I could build?"
        ]
    },
    ambitious: {
        title: "Ambitious Startup Ideas",
        principles: [
            "Look for problems you yourself encounter",
            "Don't be afraid of hard technical problems",
            "Consider ideas that seem too ambitious",
            "Look for new enabling technologies"
        ],
        checklist: [
            "List seemingly impossible things you want",
            "Identify recent technical breakthroughs",
            "Find high-impact problems that others ignore",
            "Talk to potential early adopters",
            "Build a small but working prototype"
        ],
        questions: [
            "What seems impossible but is actually possible?",
            "What new technology enables new solutions?",
            "What hard problem affects many people?",
            "What would you work on if you couldn't fail?"
        ]
    },
    persuade: {
        title: "How to Persuade",
        principles: [
            "Focus on truth rather than persuasion",
            "Understand the other side's position deeply",
            "Acknowledge valid counterarguments",
            "Use clear, simple language"
        ],
        checklist: [
            "Research opposing viewpoints thoroughly",
            "Find common ground first",
            "Use concrete examples and evidence",
            "Test arguments on friendly audiences",
            "Remove unnecessary jargon"
        ],
        questions: [
            "What does the other side really believe?",
            "What evidence would convince them?",
            "Where might I be wrong?",
            "How can I make this clearer?"
        ]
    },
    startupHub: {
        title: "How to Be Silicon Valley",
        principles: [
            "Talent and investors need to be concentrated",
            "Cities need to attract nerds and be tolerant",
            "Urban personality shapes startup culture",
            "Great cities develop organically, not through planning"
        ],
        checklist: [
            "Assess city's tolerance for weirdness",
            "Map the concentration of technical talent",
            "Identify gathering spots for founders",
            "Evaluate cost of living for bootstrappers",
            "Check for presence of good universities"
        ],
        questions: [
            "What makes your city attractive/unattractive to nerds?",
            "Where do technical people congregate?",
            "How easy is it to start something new here?",
            "What's missing from the ecosystem?"
        ]
    },
    lifeShort: {
        title: "Life is Short",
        principles: [
            "Life is shorter than it seems",
            "Avoid spending time on things you hate",
            "Be ruthless about saying no to time-wasters",
            "Focus on what matters most to you"
        ],
        checklist: [
            "List all your time commitments",
            "Identify and eliminate time-wasters",
            "Define what truly matters to you",
            "Schedule time for important relationships",
            "Create boundaries around your time"
        ],
        questions: [
            "What would you do if you had 5 years left?",
            "Which activities drain your energy?",
            "What have you been postponing?",
            "Who do you want to spend more time with?"
        ]
    },
    writeUsefully: {
        title: "How to Write Usefully",
        principles: [
            "Writing should be both novel and true",
            "Important ideas often seem obvious in retrospect",
            "Good writing is clear thinking made visible",
            "Useful writing teaches readers something new"
        ],
        checklist: [
            "Test your writing for novelty and truth",
            "Remove unnecessary qualifications",
            "Support claims with concrete examples",
            "Get feedback from target readers",
            "Revise until each sentence is clear"
        ],
        questions: [
            "What surprising truth does this convey?",
            "Would this help someone make better decisions?",
            "Is this clear to someone new to the topic?",
            "What evidence supports my claims?"
        ]
    },
    noob: {
        title: "Being a Noob",
        principles: [
            "Being a noob is an opportunity, not a weakness",
            "Expertise in one area makes you a noob in others",
            "Maintaining a beginner's mindset is valuable",
            "Growth comes from embracing noob status"
        ],
        checklist: [
            "Identify areas where you're a noob",
            "Start learning something completely new",
            "Document your beginner experiences",
            "Find mentors in your noob areas",
            "Embrace the discomfort of not knowing"
        ],
        questions: [
            "Where am I avoiding being a beginner?",
            "What would I learn if I weren't afraid of looking stupid?",
            "How can I maintain curiosity in familiar areas?",
            "What assumptions am I making as an expert?"
        ]
    }
};

// Get the dropdown element
const dropdown = document.querySelector('.dropdown-select');

// Add event listener for dropdown changes
dropdown.addEventListener('change', (e) => {
    const selectedEssay = e.target.value;
    if (selectedEssay && essayFrameworks[selectedEssay]) {
        displayFramework(selectedEssay);
    } else {
        hideFramework();
    }
});

function displayFramework(essayKey) {
    const framework = essayFrameworks[essayKey];
    const content = document.getElementById('frameworkContent');
    
    document.getElementById('essayTitle').textContent = framework.title;
    
    // Populate principles
    const principlesList = document.getElementById('principlesList');
    principlesList.innerHTML = framework.principles
        .map(principle => `<li>${principle}</li>`)
        .join('');
    
    // Populate checklist
    const actionChecklist = document.getElementById('actionChecklist');
    actionChecklist.innerHTML = framework.checklist
        .map(action => `
            <div class="checklist-item">
                <input type="checkbox" id="${action.replace(/\s+/g, '')}">
                <label for="${action.replace(/\s+/g, '')}">${action}</label>
            </div>
        `)
        .join('');
    
    // Populate questions
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = framework.questions
        .map(question => `<li>${question}</li>`)
        .join('');
    
    // Add progress tracking
    const progress = calculateProgress(essayKey);
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.innerHTML = `
        <div class="progress-fill" style="width: ${progress}%"></div>
        <span>${progress}% Complete</span>
    `;
    content.insertBefore(progressBar, content.firstChild);
    
    // Add related frameworks
    showRelatedFrameworks(framework);
    
    // Save to recent
    saveToRecent(essayKey);
    
    // Add AI Insights section
    const aiInsights = generateAIInsights(framework);
    const insightsSection = document.createElement('div');
    insightsSection.className = 'ai-insights';
    insightsSection.innerHTML = `
        <h3><i class="fas fa-robot"></i> AI Insights</h3>
        <ul>
            ${aiInsights.map(insight => `<li>${insight}</li>`).join('')}
        </ul>
        <button class="ai-action-btn" onclick="generatePersonalizedPlan('${essayKey}')">
            Generate Personal Action Plan
        </button>
    `;
    
    content.insertBefore(insightsSection, content.querySelector('.framework-sections'));
    
    // Add AI-powered checklist tracking
    setupAIChecklist(essayKey);
    
    content.classList.remove('hidden');
}

function hideFramework() {
    document.getElementById('frameworkContent').classList.add('hidden');
}

// Add search and filter functionality
function initializeSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = 'Search frameworks...';
    
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-tags';
    
    // Add common tags from frameworks
    const tags = ['Startups', 'Writing', 'Thinking', 'Learning', 'Career'];
    tags.forEach(tag => {
        const tagButton = document.createElement('button');
        tagButton.className = 'filter-tag';
        tagButton.textContent = tag;
        tagButton.onclick = () => filterFrameworks(tag);
        filterContainer.appendChild(tagButton);
    });
    
    const searchContainer = document.querySelector('.dropdown-container');
    searchContainer.insertBefore(searchInput, searchContainer.firstChild);
    searchContainer.insertBefore(filterContainer, searchContainer.firstChild);
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterDropdownOptions(searchTerm);
    });
}

function filterDropdownOptions(searchTerm) {
    const options = Array.from(dropdown.options);
    options.forEach(option => {
        const framework = essayFrameworks[option.value];
        if (!framework) return;
        
        const matchesSearch = 
            framework.title.toLowerCase().includes(searchTerm) ||
            framework.principles.some(p => p.toLowerCase().includes(searchTerm)) ||
            framework.questions.some(q => q.toLowerCase().includes(searchTerm));
            
        option.style.display = matchesSearch ? '' : 'none';
    });
}

// Add related frameworks recommendation
function showRelatedFrameworks(currentFramework) {
    const relatedContainer = document.createElement('div');
    relatedContainer.className = 'related-frameworks';
    relatedContainer.innerHTML = `
        <h3>Related Frameworks</h3>
        <div class="related-grid"></div>
    `;
    
    const relatedGrid = relatedContainer.querySelector('.related-grid');
    
    // Find related frameworks based on common principles or themes
    const related = findRelatedFrameworks(currentFramework);
    
    related.forEach(framework => {
        const card = createFrameworkCard(framework);
        relatedGrid.appendChild(card);
    });
    
    document.getElementById('frameworkContent').appendChild(relatedContainer);
}

function findRelatedFrameworks(currentFramework) {
    const related = [];
    const currentPrinciples = currentFramework.principles.join(' ').toLowerCase();
    
    Object.entries(essayFrameworks).forEach(([key, framework]) => {
        if (framework.title === currentFramework.title) return;
        
        const frameworkPrinciples = framework.principles.join(' ').toLowerCase();
        const similarity = calculateSimilarity(currentPrinciples, frameworkPrinciples);
        
        if (similarity > 0.3) { // Threshold for relatedness
            related.push({...framework, key});
        }
    });
    
    return related.slice(0, 3); // Return top 3 related frameworks
}

// Simple similarity score based on common words
function calculateSimilarity(text1, text2) {
    const words1 = new Set(text1.split(' '));
    const words2 = new Set(text2.split(' '));
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    return intersection.size / Math.max(words1.size, words2.size);
}

// Progress tracking
function calculateProgress(essayKey) {
    const savedProgress = JSON.parse(localStorage.getItem('frameworkProgress') || '{}');
    return savedProgress[essayKey] || 0;
}

function updateProgress(essayKey, checkedItems) {
    const totalItems = essayFrameworks[essayKey].checklist.length;
    const progress = Math.round((checkedItems / totalItems) * 100);
    
    const savedProgress = JSON.parse(localStorage.getItem('frameworkProgress') || '{}');
    savedProgress[essayKey] = progress;
    localStorage.setItem('frameworkProgress', JSON.stringify(savedProgress));
    
    return progress;
}

// Recent frameworks tracking
function saveToRecent(essayKey) {
    const recent = JSON.parse(localStorage.getItem('recentFrameworks') || '[]');
    const updated = [essayKey, ...recent.filter(key => key !== essayKey)].slice(0, 5);
    localStorage.setItem('recentFrameworks', JSON.stringify(updated));
}

// AI Helper functions
function generateAIInsights(framework) {
    // Simulate AI analysis of the framework
    const insights = [
        `This framework aligns with ${findRelatedTopics(framework)} topics you've explored`,
        `Based on your progress, focus on "${suggestNextStep(framework)}"`,
        `${framework.title} pairs well with ${findComplementaryFramework(framework).title}`,
        `Pro tip: ${generateCustomTip(framework)}`
    ];
    
    return insights;
}

function findRelatedTopics(framework) {
    const topics = new Set();
    const text = [...framework.principles, ...framework.questions].join(' ').toLowerCase();
    
    if (text.includes('write') || text.includes('communicate')) topics.add('Writing');
    if (text.includes('learn') || text.includes('study')) topics.add('Learning');
    if (text.includes('startup') || text.includes('business')) topics.add('Startups');
    if (text.includes('think') || text.includes('mindset')) topics.add('Thinking');
    
    return Array.from(topics).slice(0, 2).join(' and ');
}

function suggestNextStep(framework) {
    const savedProgress = JSON.parse(localStorage.getItem('frameworkProgress') || '{}');
    const checklist = framework.checklist;
    
    // Find uncompleted items and suggest the most impactful one
    const uncompletedItems = checklist.filter((_, index) => {
        const checkboxId = `checkbox-${index}`;
        return !document.querySelector(`#${checkboxId}:checked`);
    });
    
    return uncompletedItems[0] || checklist[0];
}

// Add AI-powered personalized plan generation
function generatePersonalizedPlan(essayKey) {
    const framework = essayFrameworks[essayKey];
    const userProgress = calculateProgress(essayKey);
    const userHistory = JSON.parse(localStorage.getItem('recentFrameworks') || '[]');
    
    const plan = document.createElement('div');
    plan.className = 'ai-plan';
    plan.innerHTML = `
        <h3>Your Personalized Action Plan</h3>
        <div class="plan-steps">
            ${generatePlanSteps(framework, userProgress, userHistory)}
        </div>
        <div class="plan-timeline">
            ${generateTimeline(framework)}
        </div>
    `;
    
    const existingPlan = document.querySelector('.ai-plan');
    if (existingPlan) existingPlan.remove();
    
    document.querySelector('.framework-sections').prepend(plan);
}

function generatePlanSteps(framework, progress, history) {
    const steps = [];
    const intensity = determineUserIntensity(history);
    
    // Generate personalized steps based on user's learning style and progress
    if (progress < 30) {
        steps.push(`🎯 Start with: ${framework.checklist[0]}`);
        steps.push(`📚 Read: Related essay "${framework.title}"`);
    } else if (progress < 70) {
        steps.push(`🔄 Deep dive: ${framework.principles[1]}`);
        steps.push(`💡 Apply: ${framework.questions[1]} to your current work`);
    } else {
        steps.push(`🚀 Advanced: Combine with ${findComplementaryFramework(framework).title}`);
        steps.push(`📈 Create: Your own principles based on experience`);
    }
    
    return steps.map(step => `<div class="plan-step">${step}</div>`).join('');
}

// Initialize the enhanced features
initializeSearch(); 