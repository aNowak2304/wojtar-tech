import { NodePlopAPI } from 'plop';
import path from 'path';

// Tworzenie odpowiednika __dirname w kontekście ES Modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

(async () => {
  const plop = await NodePlopAPI.load(path.resolve(__dirname, 'plopfile.js'));
  const generator = plop.getGenerator('header');

  try {
    await generator.runActions({ name: 'Header' });
    console.log('Header component generated successfully!');
  } catch (error) {
    console.error('Error generating Header component:', error);
  }
})();

