function Title({ title }: { title: string }) {
  return (
    <div className="inline-block">
      <h2 className="text-3xl uppercase md:text-4xl font-bold text-slate-900 mb-6 relative">
        {title}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </h2>
    </div>
  );
}

export default Title;
