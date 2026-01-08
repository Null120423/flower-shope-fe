import Breadcrumb, { Routes } from "@/components/breadcrums";

function WrapperView({
  children,
  routes,
}: {
  children: React.ReactNode;
  routes: Routes[];
}) {
  return (
    <div
      className="bg-gradient-to-b from-pink-50 via-white to-rose-50"
      style={{
        paddingTop: "4rem",
      }}
    >
      <div className='max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8'>
        <Breadcrumb routes={routes} />
      {children}
      </div>
    </div>
  );
}

export default WrapperView;
