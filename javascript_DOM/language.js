function languageIndex()
{
    var selector = document.getElementById("language");
    var signupButton = document.getElementById("signupButton");
    var loginButton = document.getElementById("loginButton");
    var title = document.getElementById("title");

    var languageEnglish = ["Login", "Signup"];
    var languageFrench = ["S\'identifier", "S\'inscrire"];
    var languageSpanish = ["Iniciar sesión", "Regístrate"];

    if (selector.value == "English")
    {
        signupButton.innerHTML = languageEnglish[0];
        loginButton.innerHTML = languageEnglish[1];
        title.innerHTML = "Index";
    }
    else if (selector.value == "French")
    {
        signupButton.innerHTML = languageFrench[0];
        loginButton.innerHTML = languageFrench[1];
        title.innerHTML = "Indice";
    }
    else if (selector.value == "Spanish")
    {
        signupButton.innerHTML = languageSpanish[0];
        loginButton.innerHTML = languageSpanish[1];
        title.innerHTML = "Índice";
    }
}

function languageLogin()
{
    var selector = document.getElementById("language");
    var title = document.getElementById("title");
    var legend = document.getElementById("legend");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var submit = document.getElementById("submit");
    var signupLink = document.getElementById("signupLink");
    var passwordResetLink = document.getElementById("passwordResetLink");
    var orOne = document.getElementById("orOne");
    var orTwo = document.getElementById("orTwo");

    var languageEnglish = ["Login", "Signup", "Username", "Password", "OR", "Password Reset"];
    var languageFrench = ["S\'identifier", "S\'inscrire", "Nom d'utilisateur", "Mot de passe", "OU", "Réinitialisation du mot de passe"];
    var languageSpanish = ["Iniciar sesión", "Regístrate", "Nombre de usuario", "Contraseña", "O", "Restablecimiento de contraseña"];

    if (selector.value == "English")
    {
        title.innerHTML = languageEnglish[0];
        legend.innerHTML = languageEnglish[0];
        username.placeholder = languageEnglish[2];
        password.placeholder = languageEnglish[3];
        submit.value = languageEnglish[0];
        signupLink.innerHTML = languageEnglish[1];
        passwordResetLink.innerHTML = languageEnglish[5];
        orOne.innerHTML = languageEnglish[4];
        orTwo.innerHTML = languageEnglish[4];
    }
    else if (selector.value == "French")
    {
        title.innerHTML = languageFrench[0];
        legend.innerHTML = languageFrench[0];
        username.placeholder = languageFrench[2];
        password.placeholder = languageFrench[3];
        submit.value = languageFrench[0];
        signupLink.innerHTML = languageFrench[1];
        passwordResetLink.innerHTML = languageFrench[5];
        orOne.innerHTML = languageFrench[4];
        orTwo.innerHTML = languageFrench[4];
    }
    else if (selector.value == "Spanish")
    {
        title.innerHTML = languageSpanish[0];
        legend.innerHTML = languageSpanish[0];
        username.placeholder = languageSpanish[2];
        password.placeholder = languageSpanish[3];
        submit.value = languageSpanish[0];
        signupLink.innerHTML = languageSpanish[1];
        passwordResetLink.innerHTML = languageSpanish[5];
        orOne.innerHTML = languageSpanish[4];
        orTwo.innerHTML = languageSpanish[4];
    }
}