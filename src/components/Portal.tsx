import { FC, ReactNode, ReactPortal, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

const Portal: FC<any> = (
  children: ReactNode | ReactPortal,
  wrapperId = 'portal-container'
) => {
  let portalCreated = false;
  const [wrapperElement, setWrapperElement] = useState<any>(null);
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    portalCreated = true;
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }

    setWrapperElement(element);

    return () => {
      if (portalCreated) {
        element?.parentNode?.removeChild(element);
      }
    };
  }, []);
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
