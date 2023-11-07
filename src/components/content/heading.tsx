const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-8 text-2xl font-semibold leading-5 tracking-tight text-gray-12">
      {title}
    </h1>
  );
};

export default Heading;
