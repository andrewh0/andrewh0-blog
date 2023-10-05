const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-16 text-3xl font-medium leading-5 tracking-tight text-gray-12 sm:text-4xl">
      {title}
    </h1>
  );
};

export default Heading;
