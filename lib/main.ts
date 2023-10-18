export { Button } from './components/Button';
export { Input } from './components/Input';
export { Label } from './components/Label';
export { FormRenderer, FIELD_TYPE } from './components/FormRenderer';
export type { Field } from './components/FormRenderer';

export function helloAnything(thing: string): string {
  return `Hello ${thing}!`
}