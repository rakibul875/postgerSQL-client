import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center p-6 bg-gradient-to-b from-base-100 to-base-200 min-h-[calc(100vh-200px)]">
      <div className="max-w-2xl w-full text-center space-y-8 py-12">
        <div className="relative inline-block">
          <div className="text-[120px] md:text-[180px] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary drop-shadow-xl select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-24 w-24 md:h-40 md:w-40 bg-base-100/10 backdrop-blur-md rounded-full border border-white/10 shadow-2xl"></div>
          </div>
        </div>
        
        <div className="space-y-4 relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-base-content">
            Page not found
          </h1>
          <p className="text-base md:text-xl text-base-content/70 max-w-lg mx-auto leading-relaxed">
            Oops! It seems like the page you are looking for has vanished into thin air or doesn`t exist yet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 px-4">
          <Link 
            href="/" 
            className="btn btn-primary btn-lg rounded-full px-8 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 w-full sm:w-auto border-none"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link 
            href="/support" 
            className="btn btn-outline btn-lg rounded-full px-8 hover:-translate-y-1 transition-all w-full sm:w-auto"
          >
            <AlertCircle className="w-5 h-5 mr-2" />
            Get Support
          </Link>
        </div>
      </div>
    </div>
  );
}
