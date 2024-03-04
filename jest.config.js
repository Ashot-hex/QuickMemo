module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: './tsconfig.test.json'
        }],
    },
    verbose: true,
};