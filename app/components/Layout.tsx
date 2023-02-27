import {
  type EnhancedMenu,
  type EnhancedMenuItem,
  useIsHomePath,
} from '~/lib/utils';
import {
  Drawer,
  useDrawer,
  Text,
  Input,
  IconAccount,
  IconBag,
  IconSearch,
  Heading,
  IconMenu,
  IconCaret,
  Section,
  CountrySelector,
  Cart,
  CartLoading,
  Link,
} from '~/components';
import {useParams, Form, Await, useMatches} from '@remix-run/react';
import {useWindowScroll} from 'react-use';
import {Disclosure} from '@headlessui/react';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaYoutube} from 'react-icons/fa';
import {MdOutlineLocationOn} from 'react-icons/md';
import {IoIosSearch} from 'react-icons/io';
import {RiUserLine} from 'react-icons/ri';
import {BsCart, BsChevronRight} from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';
import {Suspense, useEffect, useMemo} from 'react';

import Logo_Img from '../assets/dark_logo.png';
import Footer_logo_img from '../assets/white_logo.png';

import {useIsHydrated} from '~/hooks/useIsHydrated';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import type {LayoutData} from '../root';
import {MobileNav} from './MobileNav';

export function Layout({
  children,
  layout,
}: {
  children: React.ReactNode;
  layout: LayoutData;
}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header
          title={layout?.shop.name ?? 'Hydrogen'}
          menu={layout?.headerMenu}
        />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      {/* <Footer menu={layout?.footerMenu} /> */}
      <FooterNew />
    </>
  );
}

function Header({title, menu}: {title: string; menu?: EnhancedMenu}) {
  const isHome = useIsHomePath();

  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers('ADD_TO_CART');

  // toggle cart drawer when adding to cart
  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  return (
    <>
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      {menu && (
        <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
      )}
      <DesktopHeaderNew />
      {/* <DesktopHeader
        isHome={isHome}
        title={title}
        menu={menu}
        openCart={openCart}
      /> */}
      {/* <MobileHeader
        isHome={isHome}
        title={title}
        openCart={openCart}
        openMenu={openMenu}
      /> */}
    </>
  );
}

function CartDrawer({isOpen, onClose}: {isOpen: boolean; onClose: () => void}) {
  const [root] = useMatches();

  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <Suspense fallback={<CartLoading />}>
          <Await resolve={root.data?.cart}>
            {(cart) => <Cart layout="drawer" onClose={onClose} cart={cart} />}
          </Await>
        </Suspense>
      </div>
    </Drawer>
  );
}

export function MenuDrawer({
  isOpen,
  onClose,
  menu,
}: {
  isOpen: boolean;
  onClose: () => void;
  menu: EnhancedMenu;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} openFrom="left" heading="Menu">
      <div className="grid">
        <MenuMobileNav menu={menu} onClose={onClose} />
      </div>
    </Drawer>
  );
}

function MenuMobileNav({
  menu,
  onClose,
}: {
  menu: EnhancedMenu;
  onClose: () => void;
}) {
  return (
    <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
      {/* Top level menu items */}
      {(menu?.items || []).map((item) => (
        <span key={item.id} className="block">
          <Link
            to={item.to}
            target={item.target}
            onClick={onClose}
            className={({isActive}) =>
              isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
            }
          >
            <Text as="span" size="copy">
              {item.title}
            </Text>
          </Link>
        </span>
      ))}
    </nav>
  );
}

function MobileHeader({
  title,
  isHome,
  openCart,
  openMenu,
}: {
  title: string;
  isHome: boolean;
  openCart: () => void;
  openMenu: () => void;
}) {
  // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);

  const params = useParams();

  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } flex lg:hidden items-center h-nav sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8`}
    >
      <div className="flex items-center justify-start w-full gap-4">
        <button
          onClick={openMenu}
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconMenu />
        </button>
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="items-center gap-2 sm:flex"
        >
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconSearch />
          </button>
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
        </Form>
      </div>

      <Link
        className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
        to="/"
      >
        <Heading className="font-bold text-center" as={isHome ? 'h1' : 'h2'}>
          {title}
        </Heading>
      </Link>

      <div className="flex items-center justify-end w-full gap-4">
        <Link
          to="/account"
          className="relative flex items-center justify-center w-8 h-8"
        >
          <IconAccount />
        </Link>
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

const topMenuList = [
  'LA NOSTRA ESSENZA',
  'RICARICA DI BENESSERE',
  'INNOVAZIONI E TECNOLOGIE',
  'SOSTENIBILITÀ',
  'DORMI A 5 STELLE',
  'CERTIFICAZIONI',
  'NEWS',
  'BLOG',
  'CONTATTI',
];
const mainMenuList = [
  'MATERASSI',
  'LETTI E RETI',
  'TOPPER',
  'GUANCIALI',
  'ACCESSORI',
  'PROMO',
  'OUTLET',
];

function DesktopHeaderNew() {
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden xxl:flex bg-dark-blue flex-row w-full items-center justify-end text-white uppercase gap-5 text-xxs px-4 py-4">
        {topMenuList.map((menuItem, index) => (
          <span
            key={index}
            className="text-white hover:text-white-hover cursor-pointer"
          >
            {menuItem}
          </span>
        ))}
      </div>
      <div className="w-full bg-white px-6 py-2">
        <div className="grid grid-cols-[200px,minmax(max-content,1fr)] xl:grid-cols-[200px,minmax(max-content,1fr),200px] grid-area items-center justify-between">
          <div className="logo max-w-xxs">
            <img src={Logo_Img} alt="site log img" className="w-full" />
          </div>
          <div className="hidden menu-list xl:block grow self-center justify-self-end">
            {mainMenuList.map((menuItem, index) => (
              <span
                className="text-xxs text-dark-blue mx-4 cursor-pointer hover:opacity-70"
                key={index}
              >
                {menuItem}
              </span>
            ))}
          </div>
          <div className="icons flex flex-row items-center justify-end gap-6">
            <span>
              <MdOutlineLocationOn className="w-5 h-5 text-dark-blue hover:opacity-70 cursor-pointer" />
            </span>
            <span>
              <IoIosSearch className="w-5 h-5 text-dark-blue hover:opacity-70 cursor-pointer" />
            </span>
            <span>
              <RiUserLine className="w-5 h-5 text-dark-blue hover:opacity-70 cursor-pointer" />
            </span>
            <span className="relative">
              <BsCart className="w-5 h-5 text-dark-blue hover:opacity-70 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-600 rounded-full text-white w-3 h-3 flex items-center justify-center text-xxs">
                2
              </span>
            </span>
            <span className="block xl:hidden">
              <MobileNav />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

function DesktopHeader({
  isHome,
  menu,
  openCart,
  title,
}: {
  isHome: boolean;
  openCart: () => void;
  menu?: EnhancedMenu;
  title: string;
}) {
  const params = useParams();
  const {y} = useWindowScroll();
  return (
    <header
      role="banner"
      className={`${
        isHome
          ? 'bg-primary/80 dark:bg-contrast/60 text-contrast dark:text-primary shadow-darkHeader'
          : 'bg-contrast/80 text-primary'
      } ${
        !isHome && y > 50 && ' shadow-lightHeader'
      } hidden h-nav lg:flex items-center sticky transition duration-300 backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
    >
      <div className="flex gap-12">
        <Link className="font-bold" to="/" prefetch="intent">
          {title}
        </Link>
        <nav className="flex gap-8">
          {/* Top level menu items */}
          {(menu?.items || []).map((item) => (
            <Link
              key={item.id}
              to={item.to}
              target={item.target}
              prefetch="intent"
              className={({isActive}) =>
                isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
              }
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-1">
        <Form
          method="get"
          action={params.lang ? `/${params.lang}/search` : '/search'}
          className="flex items-center gap-2"
        >
          <Input
            className={
              isHome
                ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                : 'focus:border-primary/20'
            }
            type="search"
            variant="minisearch"
            placeholder="Search"
            name="q"
          />
          <button
            type="submit"
            className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
          >
            <IconSearch />
          </button>
        </Form>
        <Link
          to="/account"
          className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
        >
          <IconAccount />
        </Link>
        <CartCount isHome={isHome} openCart={openCart} />
      </div>
    </header>
  );
}

function CartCount({
  isHome,
  openCart,
}: {
  isHome: boolean;
  openCart: () => void;
}) {
  const [root] = useMatches();

  return (
    <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
      <Await resolve={root.data?.cart}>
        {(cart) => (
          <Badge
            dark={isHome}
            openCart={openCart}
            count={cart?.totalQuantity || 0}
          />
        )}
      </Await>
    </Suspense>
  );
}

function Badge({
  openCart,
  dark,
  count,
}: {
  count: number;
  dark: boolean;
  openCart: () => void;
}) {
  const isHydrated = useIsHydrated();

  const BadgeCounter = useMemo(
    () => (
      <>
        <IconBag />
        <div
          className={`${
            dark
              ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
              : 'text-contrast bg-primary'
          } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
          <span>{count || 0}</span>
        </div>
      </>
    ),
    [count, dark],
  );

  return isHydrated ? (
    <button
      onClick={openCart}
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </button>
  ) : (
    <Link
      to="/cart"
      className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
      {BadgeCounter}
    </Link>
  );
}

function FooterNew() {
  return (
    <footer className="bg-dark-blue pt-12">
      <div className="px-3 sm:container py-12">
        <div className="flex flex-wrap">
          <div className="px-3 w-full md:w-1/2 lg:w-1/4 py-4">
            <p className="text-gold text-bold text-text lg:text-xl mb-6">
              Prodotti
            </p>
            <ul className="text-xs text-white uppercase columns-2">
              <li className="mb-4">MATERASSI</li>
              <li className="mb-4">GUANCIALI</li>
              <li className="mb-4">RETI</li>
              <li className="mb-4">LETTI</li>
              <li className="mb-4">PET</li>
              <li className="mb-4">ACCESSORI</li>
              <li className="mb-4">PROMO</li>
            </ul>
          </div>
          <div className="px-3 w-full md:w-1/2 lg:w-5/12 py-4 lg:border-l lg:border-l-white lg:pl-16">
            <p className="text-gold text-bold text-text lg:text-xl mb-6">
              Azienda
            </p>
            <ul className="text-xs text-white uppercase columns-2">
              <li className="mb-4">LA NOSTRA ESSENZA</li>
              <li className="mb-4">RICARICA DI BENESSERE</li>
              <li className="mb-4">INNOVAZIONI E TECNOLOGIE</li>
              <li className="mb-4">SOSTENIBILITÀ</li>
              <li className="mb-4">DORMI A 5 STELLE</li>
              <li className="mb-4">CERTIFICAZIONI</li>
              <li className="mb-4">NEWS</li>
              <li className="mb-4">SLOW SLEEP BLOG</li>
              <li className="mb-4">PRESS AREA</li>
            </ul>
          </div>
          <div className="px-3 w-full md:w-1/2 lg:w-1/3 py-4 lg:border-l lg:border-l-white lg:pl-16">
            <p className="text-gold text-bold text-text lg:text-xl mb-6">
              Contatti
            </p>
            <ul className="text-xs text-white uppercase columns-1">
              <li className="mb-4">CONTATTACI</li>
              <li className="mb-4">GARANZIA</li>
              <li className="mb-4">STORE LOCATOR</li>
            </ul>
            <div className="flex justify-end">
              <button className="text-8 border border-white text-white uppercase py-1 px-4">
                ITALIANO
              </button>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <FaFacebookF className="text-dark-blue" />
              </span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <AiOutlineInstagram className="text-dark-blue" />
              </span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <FaYoutube className="text-dark-blue" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 sm:container py-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-3/12 px-3 pr-0">
            <img
              src={Footer_logo_img}
              alt="footer logo image"
              className="w-full max-w-footer-logo"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-5/12 pr-3 pt-6 lg:pl-16">
            <p className="pt-6 leading-relaxed text-xxs text-white tracking-footer-wide">
              Tel +39 057451011 - Fax +39 0574 5101.235 - info@magniflex.com
              <br />
              Magniflex: Prodotto da Alessanderx S.p.a.
              <br />
              Via San Leonardo da Porto Maurizio, 24/26/28 - 59100 Prato
              <br />
              P.I. 01729090975 - Capitale sociale 1.000.000,00 euro (i.v.) - REA
              PO/465133 - Codice fiscale 01246380461
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-4/12 pr-3 pt-3 lg:pl-16">
            <strong className="text-text lg:text-xl text-gold">
              Newsletter
            </strong>
            <p className="text-xxs text-white mb-4 mt-6">
              Resta aggiornato sulle novità del mondo Magniflex.
            </p>
            <form action="#">
              <div className="flex flex-row mb-3">
                <input
                  type="email"
                  className="border border-white uppercase text-sm leading-normal h-12 px-6 bg-transparent text-white placeholder:text-white text-center grow"
                  placeholder="indirizzo email"
                />
                <button className="border grow-0 shrink-0 border-white border-l-0 flex justify-center items-center basis-20">
                  <BsChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Footer({menu}: {menu?: EnhancedMenu}) {
  const isHome = useIsHomePath();
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 4
      : menu?.items?.length + 1
    : [];

  return (
    <Section
      divider={isHome ? 'none' : 'top'}
      as="footer"
      role="contentinfo"
      className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
    >
      <FooterMenu menu={menu} />
      <CountrySelector />
      <div
        className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
      >
        &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
        Licensed Open Source project.
      </div>
    </Section>
  );
}

const FooterLink = ({item}: {item: EnhancedMenuItem}) => {
  if (item.to.startsWith('http')) {
    return (
      <a href={item.to} target={item.target} rel="noopener noreferrer">
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.to} target={item.target} prefetch="intent">
      {item.title}
    </Link>
  );
};

function FooterMenu({menu}: {menu?: EnhancedMenu}) {
  const styles = {
    section: 'grid gap-4',
    nav: 'grid gap-2 pb-6',
  };

  return (
    <>
      {(menu?.items || []).map((item: EnhancedMenuItem) => (
        <section key={item.id} className={styles.section}>
          <Disclosure>
            {({open}) => (
              <>
                <Disclosure.Button className="text-left md:cursor-default">
                  <Heading className="flex justify-between" size="lead" as="h3">
                    {item.title}
                    {item?.items?.length > 0 && (
                      <span className="md:hidden">
                        <IconCaret direction={open ? 'up' : 'down'} />
                      </span>
                    )}
                  </Heading>
                </Disclosure.Button>
                {item?.items?.length > 0 ? (
                  <div
                    className={`${
                      open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                    } overflow-hidden transition-all duration-300`}
                  >
                    <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                      <Disclosure.Panel static>
                        <nav className={styles.nav}>
                          {item.items.map((subItem) => (
                            <FooterLink key={subItem.id} item={subItem} />
                          ))}
                        </nav>
                      </Disclosure.Panel>
                    </Suspense>
                  </div>
                ) : null}
              </>
            )}
          </Disclosure>
        </section>
      ))}
    </>
  );
}
