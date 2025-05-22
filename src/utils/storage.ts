export function setWithTTL(key: string, value: any, ttlMinutes: number) {
  const now = new Date();
  const item = {
    value,
    expiry: now.getTime() + ttlMinutes * 60 * 1000,
  };
  console.log("setWithTTL", item);
  localStorage.setItem(key, JSON.stringify(item));
}

export function getWithTTL(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key); // Expirou
    return null;
  }

  return item.value;
}
