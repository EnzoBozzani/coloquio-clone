// component.tsx
exports.component = (name) => `
import styles from './styles.module.scss';

export interface ${name}Props {}

export const ${name} = ({}: ${name}Props) => {
  return <div>Hello 👋, I am a ${name} component.</div>;
};
`;
