# Personal Data Configuration

All your personal information, links, and content are centralized in easy-to-edit data files.

* **Personal & site content** → `data/personal.json`
* **Projects list** → `data/projects.ts`

No component or UI code changes are required.

---

## 📝 How to Update Your Information

Simply edit the data files and save.
Your portfolio will automatically reflect the changes.

---

## 📋 Available Sections (`personal.json`)

### `personal`

* `firstName` – Your first name
* `lastName` – Your last name
* `fullName` – Full name (used in metadata & SEO)
* `title` – Short role title (e.g. *Fullstack Developer*)
* `jobTitle` – Detailed role description
* `email` – Your email address
* `greeting` – Hero section greeting text
* `description` – Hero description with highlighted skills

---

### `about`

* `paragraphs` – Array of about-section paragraphs
* `stats` – Skill cards (icon, label, sublabel)

---

### `projects`

* `heading` – Projects section heading
* `subheading` – Projects section description

> ⚠️ **Note:**
> The actual project list is managed separately in `data/projects.ts` (see below).

---

### `contact`

* `heading` – Contact section heading
* `subheading` – Contact section description
* `email` – Contact email
* `emailButtonText` – Email button text
* `socialLinks` – Array of social media links

---

### `navigation`

* `items` – Navigation menu items

---

### `metadata`

* SEO metadata (title, description, keywords, OpenGraph)

---

### `cta`

* Primary & secondary call-to-action buttons

---

## 📁 Projects Configuration (`data/projects.ts`)

All project cards are controlled from **one file**:

```
data/projects.ts
```

### Project Structure

Each project follows this structure:

```ts
export interface Project {
  id: number
  title: string
  description: string[]
  image: string
  imageAlt: string
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  gradient: string
}
```

---

### ✨ Example Project

```ts
{
  id: 1,
  title: "Project 1 – Your Main Project",
  description: [
    "Briefly explain what this project does",
    "Mention the problem it solves or the goal",
    "Highlight the key technologies used",
    "Add one unique or impressive detail"
  ],
  image: "/images/project-1.png",
  imageAlt: "Project 1 preview image",
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/yourusername/project-1",
  tags: ["Next.js", "AI", "Fullstack"],
  gradient: "from-emerald-500 to-cyan-500"
}
```

---

### 🖼️ Project Images

* Place all project images inside:

```
public/images/
```

* Use the same path in `image`, for example:

```ts
image: "/images/project-1.png"
```

---

### ⭐ Ordering Projects

* Projects are displayed **top to bottom**
* The **first project** is treated as your **featured project**
* To feature a project, move it to the top of the array

---

### 🏷️ Tags

* Used for visual labels only
* Keep tags short (1–2 words)
* Example:

  ```ts
  ["AI", "Next.js", "Mobile", "Cloud"]
  ```

---

## 🎨 Available Icons

For stats and social links, you can use any icon from **lucide-react**, such as:

* `Smartphone`
* `Server`
* `Code`
* `Zap`
* `Mail`
* `Linkedin`
* `Github`
* `Twitter`
* `Instagram`
* `Facebook`

(You can add more icons easily.)

---

## 🔧 Example Updates

### Change Your Name

```json
{
  "personal": {
    "firstName": "Your",
    "lastName": "Name"
  }
}
```

---

### Update Email

```json
{
  "personal": {
    "email": "your.email@example.com"
  },
  "contact": {
    "email": "your.email@example.com"
  }
}
```

---

### Add Social Links

```json
{
  "contact": {
    "socialLinks": [
      {
        "name": "LinkedIn",
        "icon": "Linkedin",
        "url": "https://linkedin.com/in/yourprofile",
        "color": "hover:text-blue-500"
      },
      {
        "name": "GitHub",
        "icon": "Github",
        "url": "https://github.com/yourusername",
        "color": "hover:text-purple-500"
      }
    ]
  }
}
```

---

## ⚡ Quick Tips

1. **After editing data files** – just save, no rebuild config needed
2. **JSON syntax matters** – check commas and quotes
3. **Arrays** use `[]`, objects use `{}`
4. **No component editing required**

---

## 🚀 Zero-Code Customization

This portfolio is designed so **non-developers can customize it** by editing data files only.

> Edit data → Save → Deploy 🚀
