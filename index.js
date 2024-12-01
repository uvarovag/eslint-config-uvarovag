module.exports = {
    env: {
        // Указывает окружение, в котором будет выполняться код
        browser: true, // Код будет выполняться в браузере
        es2021: true, // Используются возможности ES2021 (например, Optional Chaining)
    },
    // Расширяет базовые конфигурации и плагины
    extends: [
        'airbnb', // Основные правила Airbnb для JavaScript
        'airbnb/hooks', // Дополнительные правила для React Hooks
        'plugin:@typescript-eslint/recommended', // Рекомендованные правила для TypeScript
        'plugin:prettier/recommended', // Интеграция Prettier для автоматического форматирования
    ],
    // Указание парсера для работы с TypeScript
    parser: '@typescript-eslint/parser',
    // Настройки парсера для современных возможностей языка
    parserOptions: {
        ecmaFeatures: {
            jsx: true, // Включает поддержку JSX для React
        },
        ecmaVersion: 'latest', // Поддержка синтаксиса последней версии ECMAScript
        sourceType: 'module', // Использование модулей ES6
    },
    // Подключение дополнительных плагинов
    plugins: [
        'react', // Плагин для React
        '@typescript-eslint', // Плагин для TypeScript
    ],
    // Настройки для резолвинга импортов
    settings: {
        'import/resolver': {
            node: {
                // Указывает расширения файлов, которые можно импортировать без указания расширения
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                // Указывает базовый путь для импортов
                paths: ['src'],
            },
            typescript: {}, // Включает поддержку TypeScript для резолвинга импортов
        },
    },
    // Настройки правил ESLint
    rules: {
        // Разрешает использовать JSX только в файлах с расширением `.tsx`
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        // Игнорирует расширения при импорте файлов
        'import/extensions': [
            'error', // Ошибка, если расширения указаны
            'ignorePackages', // Игнорирует пакеты, установленные в node_modules
            {
                ts: 'never', // Для файлов `.ts` расширения не требуются
                tsx: 'never', // Для файлов `.tsx` расширения не требуются
                js: 'never', // Для файлов `.js` расширения не требуются
                jsx: 'never', // Для файлов `.jsx` расширения не требуются
            },
        ],
        // Отключает правило, требующее импортировать React в каждом файле JSX (не нужно в React 17+)
        'react/react-in-jsx-scope': 'off',
    },
    // Специальные настройки для определенных файлов
    overrides: [
        {
            // Применяет правила только для файлов `webpack.config.ts`
            files: ['webpack.config.ts'],
            rules: {
                // Отключает правило, запрещающее зависимости, не указанные в `dependencies`
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
}