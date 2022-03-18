import type { SimpleIcon } from "simple-icons"
import { siGithub, siLinkedin, siStackoverflow } from "simple-icons/icons"

const iconMap: Record<string, SimpleIcon> = {
  [siGithub.slug]: siGithub,
  [siLinkedin.slug]: siLinkedin,
  [siStackoverflow.slug]: siStackoverflow,
}

export function useSimpleIcon(name: string) {
  const icon = iconMap[name]
  return { ...icon }
}

export default useSimpleIcon
