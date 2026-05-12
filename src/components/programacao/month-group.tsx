type MonthGroupProps = {
  mes: string;
  children: React.ReactNode;
};

export default function MonthGroup({
  mes,
  children,
}: MonthGroupProps) {
  return (
    <div>
      <h2 className="font-anton text-dark-green text-lg md:text-xl">
        {mes}
      </h2>
      <div className="mt-2 ml-2 md:ml-4">{children}</div>
    </div>
  );
}
