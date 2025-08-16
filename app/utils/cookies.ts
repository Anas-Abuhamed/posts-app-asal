export function getCookieFromRequest(request, name) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const value = cookieHeader
    .split("; ")
    .find((c) => c.startsWith(`${name}=`))
    ?.split("=")[1];

  return value ? decodeURIComponent(value) : null;
}
