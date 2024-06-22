# React Complex Application (project template)
### Шаблон для старта разработки фронтэнда комплексного WEB приложения построенного на технологиях React в соответствии методологии [Feature Sliced Design](https://feature-sliced.design/docs)

## Конфигурация проекта

Для разработки в проекте сконфигурированы два сборщика:
1) [Webpack](./docs/configs/webpack.md) - более развитый но довольно медленный
2) Vite - [vite.config.ts](https://vitejs.dev/config/) - быстрый сборщик на случай крупных проектов

### Вся конфигурация хранится в:
- `/config/babel` - Babel
- `/config/build` - Декомпозиция webpack конфигурации
- `/config/jest` - Тестовая среда
- `/config/storybook` - Storybook


- `/.browserslistrc.json`
- `/tsconfig.json`
- `/.eslintrc.js`
- `/babel.config.json`
- `/.stylelintrc.json`
- `/.prettierrc.json` + `/.prettierignore`
- `/netlify.toml`

### Дополнительные настройки в слое shared `shared/config`:
- `i18n` - настройка блока поддержки переводов для основы и тестовой среды
- `storybook` - декораторы для корректной работы Storybook с компонетами проета

---
## Важные папки проекта
- `src` - Исходный код проекта
- `json-server` - Симуляция бэкэнда ([Github](https://github.com/typicode/json-server)) подобно [JSON Placeholder](https://jsonplaceholder.typicode.com/)
- `scripts` - Библиотека вспомогательных скриптов для рефакторинга\упрощения написания кода, генерации отчётов и т.д.
- `reports` - Автоматически создаваемая папка для сгенерированных отчётов

---

## Запуск проекта
Устанавка зависимостей проекта (после клонирования например)
```shell
npm install
```
запуск сервера + frontend прокта посредством Webpack...
```shell
npm run start:dev
```
...или посредством Vite
```shell
npm run start:dev:vite
```

## Работа с переводами (локализация на языках)

Используется библиотека `i18next`. Файлы с переводами хранятся в [public/locales](./public/locales)

Для удобства работы рекомендуется установить плагин среды разработки (Webstorm - `i18n support`)

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Стилистика кода (Линтинг)

Используется [ESLint](https://eslint.org/) и [Prettier](https://prettier.io/) для проверки typescript кода и [Stylelint](https://stylelint.io/) для проверки файлов со стилями.

Также для строгого контроля архитектурных правил используется собственный eslint plugin:

*eslint-plugin-impudev-fsd*
который содержит 3 правила:
1) path-checker - запрещает использовать абсолютные импорты в границах одного модуля
2) layer-imports - проверяет корректность использования слоёв по правилам FSD
   (например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только через public api

#### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
----

## Тестирование

В проекте используется 3 вида тестирования:
1) Unit тесты на `Jest` / `React testing library` - `npm run test:unit`
3) Скриншотное тестирование с loki - `npm run test:ui`
4) e2e тестирование с Cypress - `npm run test:e2e`

[Подробнее о тестах](./docs/tests.md)

----

## Storybook

Для каждого компонента описываются стори-кейсы.
Запросы на сервер симулируются с помощью `storybook-addon-mock`

Файл со сторикейсами находится внутри компонента с расширением `.stories.tsx`

Запускается storybook командой:
- `npm run storybook`

Подробнее о [Storybook](./docs/storybook.md)

----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows. В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](./src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров используется [DynamicModuleLoader](./src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Работа с feature - flags

Разрешено использование feature - flags только с помощью хелпера toggleFeatures

В него передаётся объект с опциями

{
   name: название feature-flag,
   on: функция, которая отработает после включения фичи
   off: функция, которая отработает после выключения фичи
}

Для автоматического удаления  фичи использовать скрипт remove-feature.ts
который принимает два аргумента
1. Название удаляемого feature-flag
2. Состояние (on\off)


---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в рпежиме prod
- `npm run build:dev` - Сборка в рпежиме dev (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчёта для скриншотных тестов
- `npm run test:ui:json` - Генерация JSON отчёта для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчёта для скриншотных тестов
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка Storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт генерации FSD слайсов

----

## Сущности (entities)

- [Counter](./src/entities/Counter)
- [User](./src/entities/User)

## Функционал (features)

