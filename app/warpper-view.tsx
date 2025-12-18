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
      className="max-w-7xl mx-auto space-x-2 px-8 py-2"
      style={{
        paddingTop: "4rem",
      }}
    >
      <Breadcrumb routes={routes} />
      {children}
    </div>
  );
}

export default WrapperView;
