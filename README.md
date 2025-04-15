 ##  full-stack assignment that touches on core concepts for real-world web development: authentication, RBAC (Role-Based Access Control), CRUD functionality, and a clean UI with Tailwind. 

 1. Authentication & Authorization
Backend

POST /api/auth/register: Hash password with bcrypt, assign "user" role by default.
POST /api/auth/login: Check creds, return JWT with id and role.
Middleware:
verifyToken: JWT check.
authorizeRoles('admin'): Restrict access.

Frontend
Pages: Login, Register
Store JWT in localStorage, manage auth with context/provider.
2. Todo Functionality
Backend
GET /api/todos: Return own todos for users, all todos for admin.
POST /api/todos: Create todo (linked with userId).
PUT /api/todos/:id, DELETE /api/todos/:id: Check if user is owner/admin.
Frontend

Dashboard: Show todos based on role.
Create/Edit Todo Page (with title, description, dueDate, category).
3. Role-Based Access Control (RBAC)
Middleware to check if user is admin
Admin-only routes:
GET /api/admin/users
PATCH /api/admin/users/:id/role
GET /api/admin/todos

5. Frontend (React + Tailwind)
Pages

LoginPage.jsx
RegisterPage.jsx
Dashboard.jsx (conditional views for user/admin)
TodoForm.jsx
AdminDashboard.jsx (optional: view/edit users, promote roles)
Features

Conditional rendering by role
Filters for todos (completed, category)
Loading states and error handling
