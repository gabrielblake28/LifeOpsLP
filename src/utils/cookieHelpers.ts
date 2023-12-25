export function setSessionCookie(name: string, value: string) {
  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/`

  document.cookie = cookieValue
}
