export const getDaysAgo = (expiredAt: string) => {
  const now = new Date();
  const expiredAtDate = new Date(expiredAt);
  const diffInMilliseconds = now.getTime() - expiredAtDate.getTime();
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return diffInMinutes;
};
