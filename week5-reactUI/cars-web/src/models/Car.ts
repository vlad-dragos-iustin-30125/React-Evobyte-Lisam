export interface Car {
  map(
    arg0: (car: any) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  id: string;
  name: string;
  description: string;
  dom: string;
  fuel: string;
}
