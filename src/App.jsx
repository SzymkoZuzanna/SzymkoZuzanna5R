import Index from './index.jsx';

// tylko przekazuje dane dalej do index.jsx
export default function App({ tytuly, ciekawostki }) {
  return <Index tytuly={tytuly} ciekawostki={ciekawostki} />;
}