import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/models/Hero';

export const updateHero = createAction(
  '[Hero Component] Update Hero',
  props<{ hero: Hero }>()
);

export const loadHeros = createAction(
  '[Hero] Load Heros'
);
