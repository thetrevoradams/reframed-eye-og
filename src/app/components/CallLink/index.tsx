'use client';

import React from 'react';
import { Button } from '../Button';
import { phoneNumberLink } from '@/app/utils/constants';

const CallLink = () => {
  return (
    <a href={`tel:${phoneNumberLink}`}>
      <Button variant="outlined">Call Reframed Eye</Button>
    </a>
  );
};

export default CallLink;
