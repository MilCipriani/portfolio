interface Frontmatter {
  title: string
  date: string
  description: string
  tags?: string[]
  published?: boolean
}

export interface Post extends Frontmatter {
  slug: string
  content: string
}





const imageModules = import.meta.glob<string>('../assets/blogImages/*', {
  query: '?url',
  import: 'default',
  eager: true,
})

//Build a lookup: "my-image.png" -> "/assets/my-image-a1b2c3.png"
export const imageMap: Record<string, string> = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const filename = path.split('/').pop() ?? ''
    return [filename, url]
  })
)




function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return { data: {} as Frontmatter, content: raw }
  }

  const [, frontmatterBlock, content] = match
  const data: Partial<Frontmatter>  = {}

  frontmatterBlock.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) return

    const key = line.slice(0, colonIndex).trim()
    let value: unknown = line.slice(colonIndex + 1).trim()

    if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map(v => v.trim())
        .filter(Boolean)
    } else if (value === 'true') {
      value = true
    } else if (value === 'false') {
      value = false
    }

    // @ts-expect-error dynamic key assignment from parsed markdown
    data[key] = value
  })

  return { data: data as Frontmatter, content: content.trim() }
}

const modules: Record<string, string> = import.meta.glob('../blogPosts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw)
    const slug = path.split('/').pop()?.replace('.md', '') ?? ''
    return {
      slug,
      ...data,
      content,
    }
  })
  .filter(p => p.published)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())