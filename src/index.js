const messages = [
    "npm init: Inicializa un nuevo proyecto Node.js y crea un archivo package.json.",
    "npm install: Instala todas las dependencias listadas en el archivo package.json.",
    "npm install <package>: Instala un paquete específico y lo añade a las dependencias.",
    "npm uninstall <package>: Desinstala un paquete y lo elimina de las dependencias.",
    "npm update: Actualiza todas las dependencias a sus versiones más recientes permitidas.",
    "npm link: Crea un enlace simbólico desde una carpeta global a un proyecto local.",
    "npm publish: Publica un paquete en el registro de NPM.",
    "npm version <major|minor|patch>: Incrementa la versión del paquete según la versión especificada.",
    "npm adduser: Añade un usuario a NPM o inicia sesión en NPM.",
    "npm whoami: Muestra el usuario con el que has iniciado sesión en NPM."
];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = { 
    funnyCommit 
};
