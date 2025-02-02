interface TaskCardProps {
  title: string;
  description: string;
  status?: string;
  tag: string;
}
// const TaskCard: React.FC<TaskCardProps> = ({ title, description, status, tag }) => {

export default function TaskCard({ title, description, tag }: TaskCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
      <h3 className="font-semibold text-black">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>

      <div className="mt-3 flex items-center space-x-2text-xs">
        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md">
          {tag}
        </span>
      </div>
    </div>
  );
}
