import React from 'react';
import cn from 'classnames';

type FilterType = 'All' | 'Active' | 'Completed';

type Props = {
  filter: string;
  handleFilter: (filter: FilterType) => void;
};

export const TodoFilter: React.FC<Props> = ({ filter, handleFilter }) => (
  <nav className="filter" data-cy="Filter">
    <a
      href="#/"
      className={cn('filter__link', { selected: filter === 'All' })}
      data-cy="FilterLinkAll"
      onClick={() => handleFilter('All')}
    >
      All
    </a>

    <a
      href="#/active"
      className={cn('filter__link', {
        selected: filter === 'Active',
      })}
      data-cy="FilterLinkActive"
      onClick={() => handleFilter('Active')}
    >
      Active
    </a>

    <a
      href="#/completed"
      className={cn('filter__link', {
        selected: filter === 'Completed',
      })}
      data-cy="FilterLinkCompleted"
      onClick={() => handleFilter('Completed')}
    >
      Completed
    </a>
  </nav>
);
