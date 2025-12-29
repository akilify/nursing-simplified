interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
}
