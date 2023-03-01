# Simple graphql server
Простой graphql сервер

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev - запуск сервера + frontend проекта в dev режиме
```

## Стек проекта

- Express
- Graphql
- Mongoose

## Структура проекта
* [server](server) - Сервер
* [config](config) - Хранилище настроек
* [models](models) - Модели mongoose
* [schema](schema) - Graphql запросы и мутации
* [.misc](.misc) - Файлы импорта данных в mongodb


## Линтинг

В проекте используется eslint для проверки кода и prettier для форматирования. Всё со стандартными настройками.
