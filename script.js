// All your industry data in one place
const industryData = {
    tech: {
        title: "Tech",
        what: "Companies that build apps, websites, and software. Think Facebook, Flutterwave, Paystack.",
        why: "Money dey. You can work from home. Jobs dey plenty worldwide.",
        jobs: [
            "Frontend Developer - build what users see",
            "Data Analyst - find answers inside data", 
            "Product Manager - decide what to build"
        ],
        start: "Free course: 'CS50' on YouTube. Learn HTML first.",
        hard: "You must keep learning. Tech changes fast.",
        good: "High pay + you can work for companies outside Nigeria."
    },
    oil: {
        title: "Oil & Gas",
        what: "Companies that find, drill, and sell crude oil and gas. Think Shell, Chevron, NNPC.",
        why: "Big money in Nigeria. Strong job security. Travel opportunities.",
        jobs: [
            "Petroleum Engineer - plan how to drill oil",
            "Geologist - find where oil dey underground",
            "HSE Officer - make sure work is safe"
        ],
        start: "Study Engineering, Geology, or Chemistry. Intern at oil companies.",
        hard: "Jobs are competitive. You fit work offshore for weeks.",
        good: "Highest salaries in Nigeria. Free healthcare, housing allowance."
    },
    agric: {
        title: "Agriculture",
        what: "Growing food, raising animals, processing farm products. Think Olam, Flour Mills.",
        why: "People must chop every day. Government dey give loans. Export money dey.",
        jobs: [
            "Farm Manager - run large farms",
            "Agric Extension Officer - teach farmers new methods",
            "Food Scientist - turn raw crops to packaged food"
        ],
        start: "Start small garden. Study Agriculture. Apply for NIRSAL loans.",
        hard: "Weather risk. Takes time to see profit.",
        good: "No saturation. Food business never dies. You can start with small capital."
    },
    health: {
        title: "Healthcare",
        what: "Hospitals, clinics, drugs, medical tech. Think Reddington, Fidson, HealthPlus.",
        why: "People always need doctors. Respected profession. Can japa easily.",
        jobs: [
            "Nurse - take care of patients daily",
            "Pharmacist - give drugs and advice",
            "Medical Lab Scientist - run tests to find sickness"
        ],
        start: "Study Medicine, Nursing, Pharmacy, Med Lab. Volunteer at hospitals.",
        hard: "Long training years. Emotional stress. Night shifts.",
        good: "Job security 100%. You save lives. Can work anywhere in the world."
    },
    finance: {
        title: "Finance",
        what: "Banks, insurance, investment companies. Think GTBank, Zenith, ARM.",
        why: "Money moves the world. Smart people enter here. Good pay + bonuses.",
        jobs: [
            "Investment Banker - help companies raise money",
            "Risk Analyst - predict if loan will fail",
            "Financial Advisor - tell people how to invest"
        ],
        start: "Study Accounting, Economics, Finance. Learn Excel well. Do ICAN/ACCA.",
        hard: "Long hours. High pressure. You must be good with numbers.",
        good: "Big bonuses. You understand money. Can start your own firm later."
    }
};

// This code runs when industry.html loads
function loadIndustry() {
    // 1. Check the URL for?name=tech or?name=oil etc
    const urlParams = new URLSearchParams(window.location.search);
    const industryName = urlParams.get('name'); 
    
    // 2. Find that industry's data
    const data = industryData[industryName];
    
    // 3. If we no find am, show error
    if (!data) {
        document.getElementById('industry-title').innerText = "Industry Not Found";
        return;
    }
    
    // 4. Put the data inside the HTML
    document.getElementById('industry-title').innerText = data.title;
    document.getElementById('what').innerText = data.what;
    document.getElementById('why').innerText = data.why;
    document.getElementById('start').innerText = data.start;
    document.getElementById('hard').innerText = data.hard;
    document.getElementById('good').innerText = data.good;
    
    // 5. Build the jobs list
    const jobsList = document.getElementById('jobs');
    jobsList.innerHTML = ''; // clear old jobs
    data.jobs.forEach(job => {
        const li = document.createElement('li');
        li.innerText = job;
        jobsList.appendChild(li);
    });
}

// Run it immediately
loadIndustry();
console.log("IndustryWetin loaded");