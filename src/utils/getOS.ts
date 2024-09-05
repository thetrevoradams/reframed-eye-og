'use client';

export const getOS = () => {
  const ua = window?.navigator?.userAgent;
  if (/android/i.test(ua)) {
    return 'Android';
  } else if (/iPad|iPhone|iPod/.test(ua)) {
    return 'iOS';
  }
  return 'Other';
};
