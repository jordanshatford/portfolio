import SimpleIcons from "simple-icons"

function titleToSlug(title: string): string {
  return [
    [/&apos;/g, "’"],
    [/&amp;/g, 'and'],
    [/\+/g, 'plus'],
    [/\./g, 'dot'],
    [/&/g, 'and'],
    [/đ/g, 'd'],
    [/ħ/g, 'h'],
    [/ı/g, 'i'],
    [/ĸ/g, 'k'],
    [/ŀ/g, 'l'],
    [/ł/g, 'l'],
    [/ß/g, 'ss'],
    [/ŧ/g, 't'],
    [/^(.+)$/, ($0) => $0.normalize('NFD')],
    [/[^a-z0-9]/g, '']
  ].reduce((acc, [search, replace]) => acc.replace(search as string, replace as string), title.toLowerCase())
}

export function useSimpleIcon(title: string) {
  const iconSlug = titleToSlug(title)
  const icon = SimpleIcons.Get(iconSlug)
  return icon
}

export default useSimpleIcon
