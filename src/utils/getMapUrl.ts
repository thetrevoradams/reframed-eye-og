'use client';

import { getOS } from './getOS';

export const getMapUrl = () => {
  const os = getOS();
  const isApple = os === 'iOS';
  if (isApple) {
    return 'https://maps.apple.com/?address=3508%20S%2025th%20E,%20Idaho%20Falls,%20ID%20%2083406,%20United%20States&ll=43.465971,-111.984446&q=3508%20S%2025th%20E';
  }
  return 'https://maps.app.goo.gl/8V95Sh38KwuKYJGC6';
};
