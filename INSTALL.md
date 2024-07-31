Initialisation d'un projet React avec Vite.js, eslint, prettier, Sass

### 1. **Créer le projet avec Vite**

Vite est un outil de build rapide pour les projets web modernes. Il est particulièrement adapté pour les projets utilisant React.

Ouvrez votre terminal et exécutez la commande suivante pour créer un nouveau projet Vite avec React :

```bash
npm create vite@latest my-react-project -- --template react
```

Remplacez `my-react-project` par le nom de votre projet. Naviguez ensuite dans le répertoire du projet :

```bash
cd my-react-project
```

### 2. **Installer les dépendances**

Installez les dépendances nécessaires :

```bash
npm install
```

Si certaines bibliothèques sont dépréciées, lancez la commande suivante :

```bash
npm update
```

### 3. **Configurer Prettier**

Prettier est un formateur de code qui assure la consistance du code dans votre projet.

1. Installez Prettier :

   ```bash
   npm install --save-dev prettier
   ```

2. Créez un fichier de configuration `.prettierrc` à la racine du projet :

   ```json
   {
     "semi": true,
     "singleQuote": true,
     "trailingComma": "all"
   }
   ```

3. Créez un fichier `.prettierignore` pour exclure certains fichiers du formatage :

   ```
   node_modules
   dist
   ```

### 4. **Configurer ESLint**

ESLint est un outil d'analyse de code qui aide à identifier et corriger les problèmes dans le code JavaScript.

1. Installez ESLint avec les configurations pour React et Prettier :

   ```bash
   npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-config-prettier
   ```

2. Initialisez la configuration ESLint :

   ```bash
   npm init @eslint/config
   ```

   Choisissez les options appropriées pour votre projet (React, ES6, etc.).

3. Créez ou modifiez le fichier `.eslintrc.json` pour inclure la configuration Prettier :

   ```json
   {
     "extends": [
       "react-app",
       "plugin:react/recommended",
       "plugin:react-hooks/recommended",
       "prettier"
     ],
     "plugins": ["react", "react-hooks"],
     "rules": {
       "react/react-in-jsx-scope": "off",
       "react/prop-types": "off"
     }
   }
   ```

4. Créez un fichier `.eslintignore` pour exclure certains fichiers de l'analyse :

   ```
   node_modules
   dist
   ```

### 5. **Scripts de formatage et de linting**

Ajoutez les scripts suivants dans votre fichier `package.json` pour formater et vérifier le code :

```json
"scripts": {
  "format": "prettier --write .",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
}
```

### 6. Configurer Sass

1. **Installer Sass :**

   ```bash
   npm install --save-dev sass
   ```

2. **Modifier les fichiers pour utiliser Sass :**

   Change l'extension des fichiers CSS en `.scss` (par exemple `App.css` en `App.scss`) et mets à jour les imports dans les fichiers JavaScript pour refléter ce changement.

   Exemple :

   ```jsx
   import './App.scss';
   ```

### 7. Créer un fichier .gitignore

```gitignore
# Node modules
node_modules/

# Build output
dist/
build/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS-specific files
.DS_Store
Thumbs.db

# IDE-specific files
.vscode/
.idea/

# Environment variables
.env
.env.local
.env.*.local

# Prettier config
.prettierignore

# ESLint config
.eslintignore

# Miscellaneous
*.sublime-workspace
*.sublime-project

# Test coverage
coverage/
*.lcov
```

### 8. Préparer le déploiement sur Vercel

1. **Initialiser un dépôt Git :**

   Si ce n'est pas déjà fait, initialise un dépôt Git et ajoute tes fichiers :

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:NicolasChambon/my-react-project.git
   git push -u origin main
   ```

2. **Déployer sur Vercel :**

   - Va sur [Vercel](https://vercel.com/) et connecte-toi avec ton compte GitHub (ou autre).
   - Crée un nouveau projet et choisis le dépôt Git que tu viens de créer.
   - Vercel détectera automatiquement que c’est un projet React et configurera le déploiement pour toi.

   Tu n'as normalement rien d'autre à faire, car Vercel s’occupe du reste. Les déploiements seront automatisés à chaque fois que tu pousses des modifications vers le dépôt.
