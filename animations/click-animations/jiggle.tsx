export function shakeElement(
  element: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  const e = element.currentTarget.classList;
  e.add("shake");
  setTimeout(() => {
    e.remove("shake");
  }, 1000);
}
