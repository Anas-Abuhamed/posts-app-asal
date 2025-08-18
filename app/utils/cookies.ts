export function getCookieFromRequest(request, name) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) return null;

  const value = cookieHeader
    .split("; ")
    .find((c) => c.startsWith(`${name}=`))
    ?.split("=")[1];

  return value ? decodeURIComponent(value) : null;
}

export function getCookieFromClientSide (name) {
  // const regex = new RegExp(`(^|;)\\s*${name}=([^;]*)`);
  // const match = document.cookie.match(regex);
  // console.log(match)
  // return match ? match[2] : null;
  const cookies = document.cookie.split(";").map(c => c.trim());
  const cookie = cookies.find(c => c.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
}
