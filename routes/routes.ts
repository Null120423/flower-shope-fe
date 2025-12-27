const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
  SHOPPING: "/shopping",
  BLOG: "/blog",
  BLOG_DETAIL: (slug: string) => `/blog/${slug}`,
  ITEM_DETAIL: (id: string) => `/item/${id}`,
  TERM: "/terms-and-conditions",
};
const PRIVATE_ROUTES = {
  DASHBOARD: "/dashboard",
  PROFILE: "/profile",
  CARTS: "/carts",
  PAYMENT: "/payment",
};

export const ROUTES = {
  PUBLIC_ROUTES,
  PRIVATE_ROUTES,
};
