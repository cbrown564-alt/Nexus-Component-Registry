import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { axe } from 'jest-axe';
import type { AxeResults } from 'axe-core';

// Custom render that provides common wrapper components if needed
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: AllTheProviders, ...options });

// Helper to run axe
export const runAxe = async (container: Element): Promise<AxeResults> => {
    return axe(container);
};

// Custom matcher for axe results
export const expectNoViolations = (results: AxeResults) => {
    const violations = results.violations;
    if (violations.length > 0) {
        const message = violations
            .map(v => `${v.id}: ${v.description} (${v.nodes.length} nodes)`)
            .join('\n');
        throw new Error(`Expected no accessibility violations:\n${message}`);
    }
};

// Test result interface for component accessibility
export interface A11yTestResult {
    component: string;
    theme: string;
    passed: boolean;
    violations: Array<{
        id: string;
        impact: string | undefined;
        description: string;
        nodes: number;
    }>;
}

// Export everything
export { customRender as render };
export { axe };
