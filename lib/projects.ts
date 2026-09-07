import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const projectsDirectory = path.join(process.cwd(), "content/projects")

export type Project = {
  slug: string
  title: string
  year: string
  category: string
  description: string
  technologies: string[]
  github?: string
  private?: boolean
  featured?: boolean
  content: string
}

function readProjectFile(filename: string): Project {
  const slug = filename.replace(".md", "")
  const filePath = path.join(projectsDirectory, filename)
  const source = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(source)

  return {
    slug,
    title: data.title,
    year: data.year,
    category: data.category,
    description: data.description,
    technologies: data.technologies ?? [],
    github: data.github,
    private: data.private ?? false,
    featured: data.featured ?? false,
    content,
  }
}

export function getProjects(): Project[] {
  const projectOrder = [
    "fedguard",
    "vlm-shoplifting-detection",
    "yonn-gpt",
    "dealdoc-ai",
    "firewall-analysis-project",
    "smartassign",
    "icbhi-respiratory-sound-classification",
    "customer-review-sentiment-analysis",
    "imdb-sentiment-analysis",
  ]

  const projects = fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map(readProjectFile)

  return projects.sort((a, b) => {
    const aIndex = projectOrder.indexOf(a.slug)
    const bIndex = projectOrder.indexOf(b.slug)

    if (aIndex === -1 && bIndex === -1) return 0
    if (aIndex === -1) return 1
    if (bIndex === -1) return -1

    return aIndex - bIndex
  })
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug)
}

export async function renderMarkdown(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}