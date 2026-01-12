/**
 * Static Analysis Tests: Hardcoded Color Detection
 * 
 * These tests scan template and component source files for hardcoded
 * Tailwind color classes that should be replaced with theme tokens.
 * 
 * This helps ensure theme variants (dark/light) work correctly.
 */

import * as path from 'path';
import { fileURLToPath } from 'url';
import {
    scanFileForHardcodedColors,
    scanFileForInlineStyleColors,
    getTemplateFiles,
    getComponentFiles,
    getAllComponentFiles,
    formatViolations,
    getSummary,
    ScanResult,
} from './testUtils';

// Project root directory (ESM compatible)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

describe('Hardcoded Color Detection', () => {
    describe('Templates', () => {
        let templateResults: ScanResult[];

        beforeAll(() => {
            const templateFiles = getTemplateFiles(ROOT_DIR);
            templateResults = templateFiles.map(scanFileForHardcodedColors);
        });

        it('should scan all template files', () => {
            expect(templateResults.length).toBeGreaterThan(0);
        });

        it('should report template scan summary', () => {
            const summary = getSummary(templateResults);
            console.log('\n📊 Template Scan Summary:');
            console.log(`   Total files: ${summary.totalFiles}`);
            console.log(`   Clean files: ${summary.cleanFiles}`);
            console.log(`   Files with violations: ${summary.violatingFiles}`);
            console.log(`   Total violations: ${summary.totalViolations}`);

            if (summary.violatingFiles > 0) {
                console.log('\n' + formatViolations(templateResults));
            }

            // This test reports but doesn't fail - baseline detection
            expect(true).toBe(true);
        });
    });

    describe('Components', () => {
        let componentResults: ScanResult[];

        beforeAll(() => {
            const componentFiles = getAllComponentFiles(ROOT_DIR);
            componentResults = componentFiles.map(scanFileForHardcodedColors);
        });

        it('should scan all component files', () => {
            expect(componentResults.length).toBeGreaterThan(0);
        });

        it('should report component scan summary', () => {
            const summary = getSummary(componentResults);
            console.log('\n📊 Component Scan Summary:');
            console.log(`   Total files: ${summary.totalFiles}`);
            console.log(`   Clean files: ${summary.cleanFiles}`);
            console.log(`   Files with violations: ${summary.violatingFiles}`);
            console.log(`   Total violations: ${summary.totalViolations}`);

            if (summary.violatingFiles > 0) {
                console.log('\n' + formatViolations(componentResults));
            }

            expect(true).toBe(true);
        });
    });

    describe('Theme-Specific Components', () => {
        const themesToCheck = ['cockpit', 'fintech', 'game', 'scifi'];

        it.each(themesToCheck)('should report violations in %s components', (theme) => {
            const componentFiles = getComponentFiles(ROOT_DIR, theme);

            if (componentFiles.length === 0) {
                console.log(`   No components found for theme: ${theme}`);
                return;
            }

            const results = componentFiles.map(scanFileForHardcodedColors);
            const summary = getSummary(results);

            console.log(`\n📁 ${theme} components:`);
            console.log(`   Files: ${summary.totalFiles}, Violations: ${summary.totalViolations}`);

            if (summary.violatingFiles > 0) {
                const violating = results.filter(r => !r.clean);
                for (const r of violating) {
                    const basename = path.basename(r.file);
                    console.log(`   ⚠️  ${basename}: ${r.violations.length} violations`);
                }
            } else {
                console.log(`   ✅ All clean!`);
            }

            expect(true).toBe(true);
        });
    });
});

describe('Inline Style Color Detection', () => {
    describe('Components with potential hardcoded inline styles', () => {
        let inlineStyleResults: ScanResult[];

        beforeAll(() => {
            const componentFiles = getAllComponentFiles(ROOT_DIR);
            inlineStyleResults = componentFiles.map(scanFileForInlineStyleColors);
        });

        it('should scan all component files for inline style colors', () => {
            expect(inlineStyleResults.length).toBeGreaterThan(0);
        });

        it('should report inline style color violations (informational)', () => {
            const summary = getSummary(inlineStyleResults);
            console.log('\n📊 Inline Style Color Scan Summary:');
            console.log(`   Total files: ${summary.totalFiles}`);
            console.log(`   Clean files: ${summary.cleanFiles}`);
            console.log(`   Files with potential issues: ${summary.violatingFiles}`);
            console.log(`   Total potential issues: ${summary.totalViolations}`);
            console.log('   (Note: Some hex/rgba values may be intentional, e.g., overlays)');

            if (summary.violatingFiles > 0) {
                // Show top 10 files with most violations
                const violating = inlineStyleResults.filter(r => !r.clean)
                    .sort((a, b) => b.violations.length - a.violations.length)
                    .slice(0, 10);
                console.log('\n   Top files with inline style colors:');
                for (const r of violating) {
                    const basename = path.basename(r.file);
                    console.log(`   ⚠️  ${basename}: ${r.violations.length} occurrences`);
                }
            }

            // Informational only - doesn't fail
            expect(true).toBe(true);
        });
    });
});

describe('Strict Mode (Future)', () => {
    // These tests will fail once we want to enforce clean components
    // Enable by removing .skip when ready to enforce

    describe.skip('Fintech components should be clean', () => {
        it('should have no hardcoded colors', () => {
            const componentFiles = getComponentFiles(ROOT_DIR, 'fintech');
            const results = componentFiles.map(scanFileForHardcodedColors);
            const summary = getSummary(results);

            if (summary.totalViolations > 0) {
                console.log(formatViolations(results));
            }

            expect(summary.totalViolations).toBe(0);
        });
    });
});
