export const calculateHowMuchTimePassedSince = (since: Date) => {
  return (new Date().getTime() - since.getTime()) / 1000;
};

export const parseTimeInSecondsToStringExpression = (time: number) => {
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days) {
    return `${days} d ago`;
  } else if (hours) {
    return `${hours} h ago`;
  } else if (minutes) {
    return `${minutes} m ago`;
  }

  return 'just now';
};
