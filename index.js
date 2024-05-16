const ADMIN_EMAIL = "admin";
const ADMIN_PASSWORD = "admin";

var users = [];

function registerUser() {
    var name = document.getElementById("name").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var favoriteTeam = document.getElementById("favoriteTeam").value;

    var user = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        favoriteTeam: favoriteTeam
    };

    var existingUser = users.find(function(user) {
        return user.email === email;
    });

    if (existingUser) {
        alert("This email address is already registered. Please use a different email address.");
        return;
    }

    users.push(user);

    alert("User registered successfully!");

  
    clearRegisterFields();
}

function loginUser() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        alert("Login successful!");
        showAllUsers();
        MadeLogOutButton();
    } else if (user) {
        alert("Login successful!");
        showInstitutionImage();
        MadeLogOutButton();
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function clearRegisterFields() {
    
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("favoriteTeam").value = "";
}

function clearLoginFields() {
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}


function showAllUsers() {
    var table = "<h2>All Registered Users</h2><table border='1'><tr><th>Name</th><th>Last Name</th><th>Email</th><th>Favorite Team</th></tr>";
    users.forEach(function(user) {
        table += "<tr><td>" + user.name + "</td><td>" + user.lastName + "</td><td>" + user.email + "</td><td>" + user.favoriteTeam + "</td></tr>";
    });
    table += "</table>";
    document.getElementById("loginContent").innerHTML = table;
}

function showInstitutionImage() {
    document.getElementById("loginContent").innerHTML = "<img src='utr.png' alt='Proudly UTR'>";
}
function showLogin() {
    document.getElementById("loginSection").style.display = "block";
    document.getElementById("registerSection").style.display = "none";
}

function showRegister() {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("registerSection").style.display = "block";
}

function MadeLogOutButton() {
    var logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.type = "button";
    logoutButton.onclick = logout;
    document.getElementById("loginContent").appendChild(logoutButton);
}

function logout() {
    clearLoginFields();
    document.getElementById("loginContent").innerHTML = "";
}