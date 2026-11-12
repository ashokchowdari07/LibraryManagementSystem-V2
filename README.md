# 📚 Library Management System

A web-based Library Management System built with Python, Flask, and SQLite.

## ✨ Features

- **Dashboard**: High-level overview of total books, registered members, currently issued books, and overdue loans.
- **Book Catalog**: Add, edit, and delete books with ISBN, category, author, and inventory quantity tracking.
- **Member Management**: Register, view, edit, and manage library members with unique emails and student IDs.
- **Issue & Return Tracking**:
  - Issue available books to registered members (default 14-day loan period).
  - Return book processing with automatic late fine calculation (₹5/day overdue).
  - Inventory stock preservation with safeguards against accidental over-issuing or data deletion.
- **Responsive & Dark Modern UI**: Built with pure CSS design tokens, intuitive modals, and responsive layout.

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- pip

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ashokchowdari07/LibraryManagementSystem.git
   cd LibraryManagementSystem
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application:**
   ```bash
   python app.py
   ```

5. **Access the application:**
   Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

   - **Default Admin Username:** `admin`
   - **Default Admin Password:** `admin123` (set `ADMIN_PASSWORD` to change it)

## ☁️ Free Deployment (Vercel + Neon Postgres)

Vercel's disk is temporary, so a free Postgres database is used in production. Locally the app still uses SQLite automatically.

1. Push this project to GitHub (`venv/` and `*.db` are git-ignored).
2. Create a free database at [neon.tech](https://neon.tech) and copy its connection string.
3. On [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
4. Before deploying, add these **Environment Variables** (see `.env.example`):
   - `SECRET_KEY` – a long random string
   - `DATABASE_URL` – the Neon connection string
   - `ADMIN_PASSWORD` – your admin password (login username is `admin`)
5. Click **Deploy**. Tables and demo data are created automatically on the first visit.

Generate a secret key with: `python -c "import secrets; print(secrets.token_hex(32))"`

## 📁 Project Structure

```
LibraryManagementSystem/
├── app.py                 # Core Flask application and routes
├── requirements.txt       # Python dependencies
├── static/
│   ├── script.js          # Client-side interactions and modal controls
│   └── style.css          # Modern dark-themed styling
└── templates/
    ├── books.html         # Book catalog and management
    ├── dashboard.html     # Summary metrics and quick actions
    ├── issued.html        # Active loan management and book return
    ├── login.html         # Admin login screen
    └── members.html       # Member directory and registration
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

