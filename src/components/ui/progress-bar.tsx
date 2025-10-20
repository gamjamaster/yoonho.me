import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={cn('w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700', className)}>
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}