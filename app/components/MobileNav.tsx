import {Fragment} from 'react';
import {Menu, Transition} from '@headlessui/react';
import {RxHamburgerMenu} from 'react-icons/rx';
import {DropdownMenu} from './DropdownMenu';

export function MobileNav() {
  const mobileNavList = [
    {
      title: 'materassi',
      disabled: false,
    },
    {
      title: 'Letti e Reti',
      disabled: false,
    },
    {
      title: 'Topper',
      disabled: false,
    },
    {
      title: 'Guanciali',
      disabled: false,
    },
    {
      title: 'Accessori',
      disabled: false,
    },
    {
      title: 'Promo',
      disabled: true,
    },
    {
      title: 'outlet',
      disabled: true,
    },
    {
      title: 'magniflex',
      disabled: false,
    },
  ];

  return (
    <DropdownMenu
      menuTitle={
        <RxHamburgerMenu className="w-5 h-5 text-dark-blue hover:opacity-70 cursor-pointer" />
      }
    >
      <Menu.Items className="fixed left-0 top-narrow-sticky lg:top-wide-sticky w-screen h-screen-no-nav">
        <Menu.Item>
          <p className="text-dark-blue"></p>
        </Menu.Item>
      </Menu.Items>
    </DropdownMenu>
  );
}
