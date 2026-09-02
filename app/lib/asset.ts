const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a public asset path with the deployment base path. Needed because
 * unoptimized <Image> sources are not rewritten by Next.js the way links are.
 */
export function asset(path: string) {
  return `${basePath}${path}`;
}
