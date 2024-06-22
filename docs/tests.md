### Документация [Jest](https://jestjs.io/) и [React testing library](https://testing-library.com/docs/react-testing-library/intro/)

## Настройки тестирования

1. Unit тесты `/config/jest`:
   - `jest.config.ts` - конфигурация `Jest`
   - `jestEmptyComponent.tsx` - моковый компонент для подмены нетребуемых в тестировании элементов вроде иконок и т.п.
   - `setupTests.ts` - импорты вспомогательных зависимостей
     - [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) - работа с кастомными классами DOM элементам для Jest
     - [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime) - для тестирования асинхронных функций
2. Скриншотное тестирование с loki - npm run test:ui
3. e2e тестирование с Cypress - npm run test:e2e
