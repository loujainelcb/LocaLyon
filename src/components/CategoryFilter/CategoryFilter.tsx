import type { CSSProperties } from 'react';
import type { Category, CategoryId } from '../../types/commerce';
import './CategoryFilter.css';

interface CategoryFilterProps {
  categories: Category[];
  selected: Set<CategoryId>;
  onToggle: (id: CategoryId) => void;
  onClear: () => void;
}

export function CategoryFilter({ categories, selected, onToggle, onClear }: CategoryFilterProps) {
  const noneSelected = selected.size === 0;

  return (
    <div className="category-filter" role="group" aria-label="Filtrer par catégorie">
      <button
        type="button"
        className={`chip ${noneSelected ? 'chip--active' : ''}`}
        aria-pressed={noneSelected}
        onClick={onClear}
      >
        Tous
      </button>
      {categories.map((category) => {
        const isActive = selected.has(category.id);
        return (
          <button
            key={category.id}
            type="button"
            className={`chip ${isActive ? 'chip--active' : ''}`}
            style={{ '--chip-color': category.color } as CSSProperties}
            aria-pressed={isActive}
            onClick={() => onToggle(category.id)}
          >
            <span className="chip__dot" aria-hidden="true" />
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
