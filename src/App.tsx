import { CategoryFilter, CommerceMap, Header, SearchBar } from './components';
import { CATEGORIES } from './constants/categories';
import { useCommerces } from './hooks/useCommerces';
import { useCommerceFilters } from './hooks/useCommerceFilters';
import './App.css';

export default function App() {
  const { commerces, loading, error } = useCommerces();
  const { query, setQuery, selectedCategories, toggleCategory, clearCategories, filteredCommerces } =
    useCommerceFilters(commerces);

  const count = filteredCommerces.length;

  return (
    <div className="app">
      <Header
        title="Découvrez les commerces locaux de Lyon"
        subtitle="Trouvez et soutenez les commerces de proximité de votre quartier."
      >
        <SearchBar value={query} onChange={setQuery} />
      </Header>

      <main className="app__main">
        <section className="app__filters" aria-label="Filtres">
          <CategoryFilter
            categories={CATEGORIES}
            selected={selectedCategories}
            onToggle={toggleCategory}
            onClear={clearCategories}
          />
          <p className="app__count" aria-live="polite">
            {loading
              ? 'Chargement des commerces…'
              : error ?? `${count} commerce${count > 1 ? 's' : ''} affiché${count > 1 ? 's' : ''}`}
          </p>
        </section>

        <section className="app__map" aria-label="Carte des commerces">
          <CommerceMap commerces={filteredCommerces} />
        </section>
      </main>
    </div>
  );
}
