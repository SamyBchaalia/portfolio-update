export function getLinksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('links') || '[]');
}
export function saveLinksToLocalStorage(link: string) {
  const links = getLinksFromLocalStorage();
  links.unshift(link);
  localStorage.setItem('links', JSON.stringify(links));
}
