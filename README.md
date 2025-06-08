# File Explorer Demo

This example shows a simple file explorer built with **Next.js**, **TypeScript**, and a small subset of **shadcn/ui** components. It allows you to browse a folder on the server, open files, edit them, rename and delete entries.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

The explorer reads and modifies files inside the `files` folder located in the project root.

## Features

- Navigate directories by clicking folder names.
- View and edit file contents.
- Save modifications back to disk.
- Rename or delete files and folders using the API endpoints.

This demo uses Tailwind CSS for basic styling and a simple `Button` component inspired by shadcn/ui.
