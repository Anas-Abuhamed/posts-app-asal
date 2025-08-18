export function getCookieFromRequest(request, name) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const value = cookieHeader
    .split("; ")
    .find((c) => c.startsWith(`${name}=`))
    ?.split("=")[1];

  return value ? decodeURIComponent(value) : null;
}

export function getCookieFromClientSide(name) {
  const cookies = document.cookie.split(";").map(c => c.trim());
  const cookie = cookies.find(c => c.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
}

export function removeCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/dashboard;`;
}
