# Personal Portfolio Website

## Overview

This is a modern, full-stack personal portfolio website built with React on the frontend and Express.js on the backend. The application showcases professional experience, skills, projects, and provides a contact form for potential employers or clients. It features a sleek dark theme with gradient animations and responsive design optimized for all devices.

## System Architecture

The application follows a monorepo structure with separate client and server directories, sharing common types and schemas through a shared folder. The architecture emphasizes:

- **Separation of Concerns**: Clear separation between frontend, backend, and shared utilities
- **Modern Tech Stack**: Latest versions of React, TypeScript, and Node.js
- **Component-Based Design**: Modular React components with shadcn/ui design system
- **Database Abstraction**: Drizzle ORM with support for both in-memory and PostgreSQL storage
- **Development Experience**: Hot module replacement, TypeScript checking, and modern build tools

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite build system
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and animations
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: React Router for client-side navigation
- **Email Integration**: EmailJS for contact form functionality

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Storage**: Configurable storage interface with in-memory and PostgreSQL implementations
- **Development**: Hot reload with tsx, production builds with esbuild
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Type-safe schema definitions in shared folder
- **Migrations**: Drizzle Kit for schema migrations
- **Validation**: Zod schemas for runtime type validation

The current schema includes a users table with basic authentication fields, designed to be extended for additional features.

### Component Structure
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Animated introduction with typewriter effect
- **Skills Section**: Categorized technical skills with animated cards
- **Experience Section**: Professional experience with achievements
- **Projects Section**: Portfolio projects with technologies and impacts
- **Education Section**: Academic background and certifications
- **Contact Section**: EmailJS-powered contact form

## Data Flow

1. **Client-Side Rendering**: Vite serves the React application with hot module replacement in development
2. **API Communication**: Frontend communicates with backend through REST endpoints
3. **Email Handling**: Contact form submissions are processed through EmailJS service
4. **Storage Operations**: Backend uses configurable storage interface for data persistence
5. **Development Proxy**: Vite proxies API requests to Express server during development

## External Dependencies

### Production Dependencies
- **@neondatabase/serverless**: PostgreSQL adapter for serverless environments
- **@tanstack/react-query**: Server state management and caching
- **@emailjs/browser**: Email service integration for contact forms
- **drizzle-orm**: Type-safe database ORM
- **express**: Web application framework
- **react**: UI framework
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Frontend build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds
- **drizzle-kit**: Database migration and introspection tool
- **typescript**: Type checking and compilation

### UI Component Library
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **shadcn/ui**: Pre-built components based on Radix UI
- **lucide-react**: Icon library for consistent iconography

## Deployment Strategy

### Development Environment
- **Runtime**: Replit with Node.js 20, PostgreSQL 16, and web modules
- **Process**: `npm run dev` starts both frontend and backend with hot reload
- **Database**: PostgreSQL instance provisioned through Replit

### Production Build
- **Frontend**: Vite builds optimized React application to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Deployment**: Autoscale deployment target with build and run commands
- **Port Configuration**: Internal port 5000 mapped to external port 80

### Database Configuration
- **Development**: PostgreSQL connection via DATABASE_URL environment variable
- **Schema Management**: Drizzle migrations in `./migrations` directory
- **Push Strategy**: `npm run db:push` for schema synchronization

The application is designed to scale from development to production with minimal configuration changes, supporting both local development and cloud deployment scenarios.

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 19, 2025. Initial setup
- June 19, 2025. Fixed mobile responsiveness across all sections with comprehensive CSS overrides
- June 19, 2025. Replaced contact form with clean direct contact buttons (email, phone copy, GitHub, LinkedIn)
- June 19, 2025. Updated routing from react-router-dom to wouter for Replit compatibility