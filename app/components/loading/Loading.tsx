'use client';

import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex justify-center tracking-wide">
      <CircularProgress />
    </div>
  );
}
