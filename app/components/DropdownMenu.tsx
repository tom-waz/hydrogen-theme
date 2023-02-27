import {Fragment, ReactNode} from 'react';
import {Menu, Transition} from '@headlessui/react';

type Props = {
  menuTitle: string | ReactNode;
  children: ReactNode;
};

export function DropdownMenu({menuTitle, children}: Props) {
  return (
    <Menu as={Fragment}>
      <Menu.Button>{menuTitle}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-350"
        enterFrom="transform opacity-0 h-0"
        enterTo="transform opacity-100 h-screen"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 h-screen"
        leaveTo="transform opacity-0 h-0"
      >
        {children}
      </Transition>
    </Menu>
  );
}
