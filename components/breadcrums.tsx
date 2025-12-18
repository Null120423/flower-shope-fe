import TransitionLink from "./ui/TransitionLink";

export interface Routes {
  href: string;
  label: string;
}
interface BreadcrumbProps {
  routes: Routes[];
}
function Breadcrumb({ routes }: BreadcrumbProps) {
  return (
    <div className="w-full flex items-center space-x-2 py-2 text-sm bg-white shadow-sm">
      {routes.map((route, index) => (
        <TransitionLink href={route.href} className="flex items-center">
          <span className="text-sm text-gray-500 hover:text-gray-700">
            {route.label}
          </span>
          {index < routes.length - 1 && (
            <svg
              className="w-4 h-4 mx-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </TransitionLink>
      ))}
    </div>
  );
}

export default Breadcrumb;
