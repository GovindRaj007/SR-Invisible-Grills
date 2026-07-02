import favicon from '@/assets/brand-logo.jpg';

export default function LoadingPages() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <img 
          src={favicon} 
          alt="Loading" 
          className="w-16 h-16 animate-spin rounded-full"
        />
      </div>
    </div>
  );
}
