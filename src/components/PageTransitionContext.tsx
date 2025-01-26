// "use client";

// import { createContext, useContext, useState } from "react";

// interface PageTransitionContextProps {
//   isAnimating: boolean;
//   setAnimating: (animating: boolean) => void;
// }

// const PageTransitionContext = createContext<PageTransitionContextProps | null>(
//   null
// );

// export const PageTransitionProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [isAnimating, setAnimating] = useState(false);

//   return (
//     <PageTransitionContext.Provider value={{ isAnimating, setAnimating }}>
//       {children}
//     </PageTransitionContext.Provider>
//   );
// };

// export const usePageTransition = () => {
//   const context = useContext(PageTransitionContext);
//   if (!context) {
//     throw new Error(
//       "usePageTransition must be used within a PageTransitionProvider"
//     );
//   }
//   return context;
// };
