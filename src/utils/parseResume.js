export const getMockedFeedback = ({ text, numPages }) => {
    const feedback = [];
    const lower = text.toLowerCase();

    // Structural Sections
    if (!lower.includes("experience")) {
        feedback.push("🧠 Consider adding an 'Experience' section to highlight your work history.");
    }
    if (!lower.includes("skills")) {
        feedback.push("🛠 Add a 'Skills' section showcasing your technical and soft skills.");
    }
    if (!lower.includes("project")) {
        feedback.push("📁 Include a 'Projects' section to demonstrate your hands-on abilities.");
    }
    if (!lower.includes("education")) {
        feedback.push("🎓 Include an 'Education' section with degrees, certifications, or relevant courses.");
    }

    // Resume too short
    if (text.length < 300) {
        feedback.push("📏 Your resume seems short—add more content describing your impact and skills.");
    }

    // ATS Formatting & Optimization
    if (!/[•\-*]/.test(text)) {
        feedback.push("🎯 Ensure consistent formatting (e.g., bullet points, spacing, fonts).");
    }

    if (!/react|node|docker|python|java|aws|sql|git|postman|typescript/.test(lower)) {
        feedback.push("📂 Highlight key technologies used in your projects or roles (e.g., React, Docker, PostgreSQL).");
    }

    if (!/(linkedin\.com|github\.com|portfolio)/i.test(lower)) {
        feedback.push("🔗 Add links to your GitHub, LinkedIn, or portfolio.");
    }

    if (!/test|jest|cypress|unit test|integration test/.test(lower)) {
        feedback.push("🧪 Mention any testing experience—unit, integration, or E2E (e.g., Jest, Cypress).");
    }

    if (!/(increased|decreased|improved|reduced|grew|cut|saved|boosted|by \d+%)/i.test(lower)) {
        feedback.push("📌 Quantify achievements (e.g., 'Improved performance by 25%').");
    }

    if (!/(led|built|created|developed|optimized|engineered)/i.test(lower)) {
        feedback.push("🚀 Start bullet points with strong verbs like 'Led', 'Built', 'Optimized'.");
    }

    if (!/summary|profile/i.test(lower)) {
        feedback.push("🧠 Consider a short summary at the top outlining your expertise and goals.");
    }

    if (!/remote|hybrid|on-site|location|based in/i.test(lower)) {
        feedback.push("📍 Mention your location or willingness to work remotely.");
    }

    // Language and Tone
    if (/\bi\b|\bme\b/.test(lower)) {
        feedback.push("🗣 Avoid first-person language (e.g., 'I', 'me')—keep it professional.");
    }

    if (!/action|impact|results|delivered|achieved|designed/i.test(lower)) {
        feedback.push("📊 Use active language focused on impact and outcomes.");
    }

    if (!/font|margin|padding|spacing|format/.test(lower)) {
        feedback.push("✅ Use a clean layout with consistent fonts, spacing, and alignment.");
    }

    if (text.length > 1200) {
        feedback.push("📄 Consider trimming to 1–2 pages. Recruiters spend seconds per resume.");
    }

    // Miscellaneous
    if (!/github|gitlab/.test(lower)) {
        feedback.push("🛠 Highlight version control experience—mention Git or platforms like GitHub.");
    }

    if (!/mentored|managed|led team|collaborated|cross-functional/.test(lower)) {
        feedback.push("🎖 Include leadership, collaboration, or mentorship experience if applicable.");
    }

    if (!/@|\.com/.test(lower)) {
        feedback.push("📬 Ensure your email/contact info is visible.");
    }

    if (!/(achieved|increased|solved|delivered)/i.test(lower)) {
        feedback.push("📈 Showcase the results of your work, not just your responsibilities.");
    }

    if (numPages > 2) {
        feedback.push("📄 Consider trimming to 1–2 pages. Recruiters spend seconds per resume.");
    }

    if (!/typescript|javascript|python|java|go|c\+\+/.test(lower)) {
        feedback.push("💡 Add programming languages you’re comfortable with.");
    }

    return feedback;
};
