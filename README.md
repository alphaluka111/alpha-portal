# Lumina School Portal

A modern, role-aware school management portal built with Next.js, TypeScript, Tailwind CSS, Prisma, and SQLite/PostgreSQL-compatible data modeling.

## Features
- **Admin dashboard** with enrollment, staff, class, and attendance KPIs.
- **Student directory** with search/filter-ready table and API endpoints.
- **Teacher, class, attendance, calendar, and settings navigation** ready for expansion.
- **Multi-role data model** for admins, teachers, students, and parents.
- **Prisma schema + realistic seed data** for quick local testing.

## Quick start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure the database
Create `.env`:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="replace-with-a-long-random-string"
NEXTAUTH_URL="http://localhost:3000"
```
For PostgreSQL, change the datasource provider in `prisma/schema.prisma` to `postgresql` and use a PostgreSQL connection URL.

### 3. Create and seed the database
```bash
npx prisma db push
npm run db:seed
```

### 4. Run the app
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Project structure
- `app/(dashboard)/` — responsive portal pages and shared layout
- `components/` — sidebar and header UI
- `app/api/` — server-side API route handlers
- `prisma/schema.prisma` — roles and school domain models
- `prisma/seed.ts` — local demo data
- `lib/` — shared server utilities

## Demo accounts
The seed creates `admin@lumina.school` and `aaron.lee@lumina.school`. Authentication wiring can be added with NextAuth Credentials or an OAuth provider using the included roles.
