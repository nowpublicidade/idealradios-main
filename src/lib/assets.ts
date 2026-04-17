/**
 * Resolve asset paths relative to the Vite base URL.
 * Use this for all public/ folder assets to ensure they work on GitHub Pages subpaths.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
