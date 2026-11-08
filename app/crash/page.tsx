'use client';

import dynamic from 'next/dynamic';

const PhaserCrashGame = dynamic<any>(() => import('../../components/crash/PhaserCrashGame') as any, { ssr: false });

export default function CrashPage() {
  return (
    <div class="w-full h-full min-h-screen bg-black flex items-center justify-center">
      <PhaserCrashGame />
    </div>
  );
}
