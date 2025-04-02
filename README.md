# Kid Spark Milestones

A comprehensive tool for tracking and visualizing child development milestones across cognitive, motor, and social categories.

## 🌟 Features
- **Milestone Tracking**: Browse developmental milestones organized by age and category.
- **Filtering**: Filter milestones by developmental category (cognitive, motor, social) and age.
- **Responsive Design**: Works on mobile, tablet, and desktop devices.
- **Persistent Storage**: All milestone data is stored in Supabase for reliability.

## 🛠️ Technology Stack
- **Frontend**: React with TypeScript
- **State Management**: React Query
- **Routing**: React Router
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI

## 📋 Prerequisites
- Node.js (v16+)
- npm or yarn
- Supabase account (for database)

## 🚀 Getting Started

### Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-repo/kid-spark-milestones.git
   cd kid-spark-milestones
   ```
2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables**
   - Create a `.env` file in the root directory with:
     ```env
     SUPABASE_URL=your-supabase-url
     SUPABASE_ANON_KEY=your-anon-key
     ```
4. **Start the development server**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

## 📦 Database Setup
1. **Create a Supabase project**
2. **Create a table called `milestones` with the following schema:**
   - `id` (UUID, primary key)
   - `title` (Text)
   - `age` (Numeric)
   - `category` (Text)
   - `description` (Text)
3. **Set up Row Level Security policies for the table**
4. **Seed the database**
   - Open the application in your browser
   - Open the browser console
   - Run:
     ```js
     window.seedDatabase()
     ```

## 📱 Usage

### Browsing Milestones
Navigate to `/milestones` to view all milestones. Use the filter controls to filter by:
- **Category**: Cognitive, Motor, Social
- **Age**: 0.5 to 5 years

### URL Parameters
You can directly navigate to filtered views using URL parameters:
- `/milestones?category=motor` - Shows only motor milestones
- `/milestones?age=2` - Shows only milestones for 2-year-olds
- `/milestones?category=cognitive&age=3` - Shows cognitive milestones for 3-year-olds

## 🧩 Project Structure

```
📂 kid-spark-milestones
├── 📁 src
│   ├── 📁 components
│   ├── 📁 pages
│   ├── 📁 hooks
│   ├── 📁 utils
├── 📄 package.json
├── 📄 README.md
└── 📄 .env.example
```

## 📖 Resources
For more information about child development milestones:
- [CDC's Developmental Milestones](https://www.cdc.gov/ncbddd/actearly/milestones/index.html)
- [American Academy of Pediatrics](https://www.aap.org/)

## 📄 License
This project is licensed under the MIT License.
