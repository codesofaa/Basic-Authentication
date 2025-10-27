let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full Access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited Access granted";
} else {
    accessLevel = "No Access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Admin";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let access = "employee";
let accessStatus;

if (access === "employee") {
    accessStatus = " You are authorized to have access to Dietary Services";
} else if (access === "enrolled_member") {
        accessStatus = "You are authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
} else if (access === "subscriber") {
        accessStatus = "You are authorized to have partial access to facilitate Dietary Services only";
} else {
        accessStatus = "You need to enroll or at least subscribe first to avail this facility.";
}

console.log("Access Status:", accessStatus);