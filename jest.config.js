/** @type {import('jest').Config} */
export default {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    transform: {
        '^.+\\.tsx?$': ['ts-jest', { 
            useESM: true,
            tsconfig: {
                esModuleInterop: true,
                allowSyntheticDefaultImports: true,
            }
        }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(jest-axe)/)',
    ],
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    testMatch: ['**/__tests__/**/*.test.ts?(x)', '**/__tests__/**/*.a11y.test.ts?(x)'],
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
}
