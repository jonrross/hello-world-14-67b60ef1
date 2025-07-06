import React from 'react';
import { Card } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="bg-white shadow-xl border-0 p-12 max-w-2xl w-full">
        <div className="text-center">
          <h1 className="text-6xl font-light text-slate-800 tracking-wide">
            hello world 14
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;