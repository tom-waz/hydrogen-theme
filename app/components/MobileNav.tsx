import {Fragment} from 'react';
import {Disclosure, Menu, Transition} from '@headlessui/react';
import {RxHamburgerMenu} from 'react-icons/rx';
import {MdOutlineLocationOn} from 'react-icons/md';
import {DropdownMenu} from './DropdownMenu';
import product_image from '../assets/products/a1.jpg';

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
      {mobileNavList.map((navItem, index) => (
        <Menu.Item key={index}>
          <Disclosure>
            {({open}) => (
              <>
                <Disclosure.Button as="div">
                  <p
                    className={`${
                      open ? 'font-semibold bg-gray-300' : ''
                    } text-dark-blue text-md uppercase py-3 px-6 border-b border-b-gray-200`}
                  >
                    {navItem.title}
                  </p>
                </Disclosure.Button>
                {!navItem.disabled && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-350"
                    enterFrom="transform opacity-0 h-0"
                    enterTo="transform opacity-100 h-fit"
                    leave="transition ease-in duration-100"
                    leaveFrom="transform opacity-100 h-fit"
                    leaveTo="transform opacity-0 h-0"
                  >
                    <Disclosure.Panel as="div" className="mt-1 mb-3 py-2">
                      <div className="p-3">
                        <div className="flex flex-wrap">
                          <div className="p-3 w-full xl:w-5/12">
                            <div className="grid grid-cols-2 xl:grid-cols-3">
                              <div className="product-item">
                                <img src={product_image} alt="Product image" />
                                <p className="text-dark-blue font-semibold mt-4 mb-2 text-xxs">
                                  TOPPER
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                )}
              </>
            )}
          </Disclosure>
        </Menu.Item>
      ))}
      <Menu.Item>
        <div className="w-full">
          <div className="flex">
            <div className="px-6 py-4 w-7/12 border border-gray-200">
              <div className="flex items-center gap-1">
                <MdOutlineLocationOn className="w-6 h-6 text-dark-blue" />
                <strong className="text-xxs max-w-110 text-dark-blue uppercase">
                  Punti vendita vicino a te
                </strong>
              </div>
            </div>
            <div className="grow border border-gray-200 flex justify-center items-center">
              <button className="border border-dark-blue px-4 py-1 uppercase text-8">
                ITALIANO
              </button>
            </div>
          </div>
        </div>
      </Menu.Item>
    </DropdownMenu>
  );
}
