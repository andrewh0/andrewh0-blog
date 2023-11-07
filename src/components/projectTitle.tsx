const ProjectTitle = ({
  name,
  year,
}: {
  name: string;
  year: number;
  isActive?: boolean;
}) => {
  return (
    <div className="mb-4 mt-16 flex items-baseline justify-between">
      <div className="flex items-center">
        <h2 className="my-0 mr-4 text-xl font-semibold tracking-tight">
          {name}
        </h2>
      </div>
      <span className="font-mono text-sm text-gray-11">{year}</span>
    </div>
  );
};

export default ProjectTitle;
