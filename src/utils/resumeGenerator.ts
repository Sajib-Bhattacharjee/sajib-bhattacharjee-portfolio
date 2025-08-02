import jsPDF from "jspdf";

// Function to generate and download a PDF resume
export const generateResume = () => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Set font styles
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);

  // Add header
  doc.text("SAJIB BHATTACHARJEE", 105, 20, { align: "center" });

  doc.setFontSize(13);
  doc.setFont("helvetica", "normal");
  doc.text("Front-End Web Developer", 105, 27, { align: "center" });

  // Add contact info
  doc.setFontSize(10);
  doc.text("📱 +8801708009080 | ✉ sajibbhattacharjee2000@gmail.com", 105, 35, {
    align: "center",
  });
  doc.text(
    "🔗 linkedin.com/in/sajib-bhattacharjee-42682a178 | 🌐 sajibbhattacharjee.netlify.app",
    105,
    40,
    { align: "center" }
  );
  doc.text("📍 Khulna, Bangladesh", 105, 45, { align: "center" });

  // Add summary section
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("SUMMARY", 20, 55);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const summary =
    "Passionate Front-End Web Developer skilled in HTML, CSS, JavaScript, and React, dedicated to creating dynamic, responsive, and user-friendly web applications. Committed to continuous learning and improving coding skills, eager to contribute to a professional team that values innovation and exceptional user experiences.";

  const splitSummary = doc.splitTextToSize(summary, 170);
  doc.text(splitSummary, 20, 62);

  // Add skills section
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("SKILLS", 20, 80);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(
    "HTML | CSS | Bootstrap | JavaScript | SASS | EJS | React | Node.js | Express.js | MongoDB",
    20,
    87
  );
  doc.text(
    "Web Authentication | Git | GitHub | Visual Studio Code | NPM | REST | Netlify | Vercel",
    20,
    93
  );

  // Add experience section
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("EXPERIENCE", 20, 105);

  doc.setFontSize(11);
  doc.text("Self-Directed Learning", 20, 112);

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text("freeCodeCamp.org", 20, 117);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("📅 07/2023 - 12/2023 | 📍 Khulna, Bangladesh", 20, 122);

  doc.setFontSize(10);
  const experienceDesc =
    "freeCodeCamp is a free online platform offering coding courses and projects to help learners build web development and programming skills.";
  const splitExperience = doc.splitTextToSize(experienceDesc, 170);
  doc.text(splitExperience, 20, 127);

  doc.text(
    "• Completed Responsive Web Design and Front-End Development Libraries courses, gaining hands-on",
    20,
    135
  );
  doc.text("  experience with HTML, CSS, JavaScript, and React.", 20, 140);

  // Add projects section (truncated due to space)
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("PROJECTS", 20, 152);

  doc.setFontSize(11);
  doc.text("E-Learning Platform", 20, 159);

  doc.setFontSize(9);
  doc.text("📅 02/2024 - 02/2024", 20, 164);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(
    "A responsive e-learning platform for seamless online course access.",
    20,
    169
  );
  doc.text(
    "• Developed a user-friendly interface using HTML, Bootstrap, and JavaScript.",
    20,
    174
  );
  doc.text(
    "• GitHub: github.com/Sajib-Bhattacharjee/e-learning-platform",
    20,
    179
  );

  // Add education section
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("EDUCATION", 20, 191);

  doc.setFontSize(11);
  doc.text("B.Sc. in Computer Science & Engineering", 20, 198);

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.text("North Western University", 20, 203);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("📅 2020 - 07/2024 | 📍 Khulna, Bangladesh", 20, 208);

  // Add certifications (truncated)
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("CERTIFICATIONS", 20, 220);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("• Responsive Web Design (FreeCodeCamp)", 20, 227);
  doc.text("• Front End Development Libraries (FreeCodeCamp)", 20, 232);
  doc.text("• Web Development (Sololearn)", 20, 237);
  doc.text("• JavaScript Intermediate (Sololearn)", 20, 242);

  // Add languages section
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("LANGUAGES", 20, 254);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("English (Advanced) | Hindi (Advanced) | Bangla (Native)", 20, 261);

  // Save the PDF
  doc.save("Sajib-Bhattacharjee-Resume.pdf");
};

export default generateResume;
