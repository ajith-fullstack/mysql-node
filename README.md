# Node.js MySQL Application

A Node.js application integrated with a MySQL database.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- npm (included with Node.js)

## Installation

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
cd <your-project-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create the Environment File

Create a `.env` file in the root directory of the project.

Add the following configuration:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=test
```

**Important:** Replace `your_mysql_password` with your actual MySQL password. Make sure the database name matches the database you created.

### 4. Create the MySQL Database

Log in to MySQL:

```bash
mysql -u root -p
```

Create the database:

```sql
CREATE DATABASE test;
```

Verify that the database was created:

```sql
SHOW DATABASES;
```

Exit MySQL:

```sql
EXIT;
```

### 5. Start the Application

Run the development server:

```bash
npm run dev
```

If the project does not have a `dev` script in `package.json`, configure one. For example, if you use `nodemon`:

```json
{
  "scripts": {
    "dev": "nodemon app.js"
  }
}
```

Install `nodemon` if required:

```bash
npm install --save-dev nodemon
```

Then run:

```bash
npm run dev
```

## Project Structure

```text
project/
├── node_modules/
├── .env
├── .gitignore
├── app.js
├── database.js
├── package.json
├── package-lock.json
└── README.md
```

## Environment Variables

| Variable | Description |
|---|---|
| `DB_HOST` | MySQL server hostname |
| `DB_USER` | MySQL username |
| `DB_PASSWORD` | MySQL password |
| `DB_NAME` | Database name |

## Security

- Never commit your `.env` file to GitHub.
- Add `.env` to your `.gitignore` file.
- Do not expose database credentials in your source code.

Example `.gitignore`:

```gitignore
node_modules/
.env
```

## Troubleshooting

### MySQL connection failed

- Make sure the MySQL server is running.
- Verify your database credentials in `.env`.
- Ensure the database specified by `DB_NAME` exists.

### `npm run dev` fails

- Run `npm install` to install dependencies.
- Verify that `package.json` contains a `dev` script.
- Check that the application entry point matches the script configuration.

## License

This project is available for learning and development purposes.