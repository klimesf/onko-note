import { Disclosure } from '@headlessui/react';
import ChemoterapieForm from './ChemoterapieForm';
import { useState, useEffect } from 'react';
import RadioterapieForm from './RadioterapieForm';

interface NavigationItem {
  name: string;
  href: string;
  component: React.ComponentType;
}

const navigation: NavigationItem[] = [
  { name: 'Chemoterapie', href: '#chemoterapie', component: ChemoterapieForm },
  { name: 'Radioterapie', href: '#radioterapie', component: RadioterapieForm },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const [currentForm, setCurrentForm] = useState<NavigationItem>(navigation[0]);

  // Function to get form from hash
  const getFormFromHash = (hash: string): NavigationItem => {
    const form = navigation.find((item) => item.href === hash);
    return form || navigation[0]; // Default to first form if hash not found
  };

  // Handle initial load and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentForm(getFormFromHash(hash));
    };

    // Set initial form based on current hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = item.href;
                    }}
                    aria-current={
                      currentForm.href === item.href ? 'page' : undefined
                    }
                    className={classNames(
                      currentForm.href === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Disclosure>

      <header className="relative bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {currentForm.name}
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <currentForm.component />
        </div>
      </main>
    </div>
  );
}

export default App;
