export function getLinksFromLocalStorage(): string[] {
  return JSON.parse(localStorage.getItem('links') || '[]') as string[];
}

export function saveLinksToLocalStorage(link: string) {
  const links = getLinksFromLocalStorage();
  links.unshift(link);
  localStorage.setItem('links', JSON.stringify(links));
}
