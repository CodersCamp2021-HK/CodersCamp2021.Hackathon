import { Badge } from '../Badge';

interface ReportStatusProps {
  icon: string;
  text: string;
}

export const ReportStatus = ({ icon, text }: ReportStatusProps) => {
  return (
    <div>
      <Badge>{icon}</Badge>
      <span>{text}</span>
    </div>
  );
};
