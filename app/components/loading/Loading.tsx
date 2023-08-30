'use client';

import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex justify-center tracking-wide">
      <div>
        <CircularProgress />
        <p className="pt-2">LOADING...</p>
      </div>
    </div>
  );
}
