// Dream Application: AI Resume Builder
// An app that helps users create natural, human-sounding resumes
// without AI hyphens or robotic language

// Values, Data Types, and Operations
// Using strings, numbers, and booleans to store user profile info
let userName = "Cierre";
let yearsOfExperience = 3;
let isPremiumUser = true;

console.log(userName, yearsOfExperience, isPremiumUser);

// Stringing Characters Together
// Using template literals to build a natural resume summary
let jobTitle = "Marketing Coordinator";
let company = "Creative Agency";

let resumeSummary = `${userName} is a ${jobTitle} at ${company} with ${yearsOfExperience} years of experience.`;
console.log(resumeSummary);

// Control Structures and Logic
// Checking if the resume meets basic requirements before generating
let wordCount = 250;

if (wordCount >= 200 && wordCount <= 700) {
  console.log("Resume length looks good!");
} else {
  console.log("Please adjust your resume length.");
}
// Building Arrays
// Storing different resume styles the user can pick from
let resumeStyles = ["Impact Driven", "EPIC Style", "Traditional", "Creative"];

console.log(resumeStyles);

// Using Arrays
// Checking if the selected style exists and grabbing it
let selectedStyle = "EPIC Style";
let styleIndex = resumeStyles.indexOf(selectedStyle);

if (styleIndex !== -1) {
  console.log("Style selected:", resumeStyles[styleIndex]);
} else {
  console.log("Style not found.");
}
// Working With Loops
// Looping through banned AI words and flagging them in the resume
let bannedWords = ["utilize", "leverage", "synergy", "spearheaded", "robust", "results-driven", "detail-oriented", "self-motivated", "team-player", "hard-working"];
let resumeText = "I spearheaded a robust team to leverage synergy. I am a results-driven and detail-oriented self-motivated team-player.";

for (let i = 0; i < bannedWords.length; i++) {
  if (resumeText.includes(bannedWords[i])) {
    console.log("Banned word found:", bannedWords[i]);
  }
}
