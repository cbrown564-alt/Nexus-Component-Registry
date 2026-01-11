/**
 * Static Analysis Test Utilities
 * 
 * Utilities for detecting hardcoded Tailwind color classes in component source files.
 * Used to ensure components use theme tokens instead of fixed color values.
 */

import * as fs from 'fs';
import * as path from 'path';

// Patterns that indicate hardcoded colors (should use theme tokens instead)
export const HARDCODED_COLOR_PATTERNS: RegExp[] = [
    // Explicit white/black
    /\btext-white\b/g,
    /\btext-black\b/g,
    /\bbg-white\b/g,
    /\bbg-black\b/g,

    // Zinc palette (commonly used in dark themes)
    /\btext-zinc-\d{2,3}\b/g,
    /\bbg-zinc-\d{2,3}\b/g,
    /\bborder-zinc-\d{2,3}\b/g,

    // Slate palette
    /\btext-slate-\d{2,3}\b/g,
    /\bbg-slate-\d{2,3}\b/g,
    /\bborder-slate-\d{2,3}\b/g,

    // Gray palette
    /\btext-gray-\d{2,3}\b/g,
    /\bbg-gray-\d{2,3}\b/g,
    /\bborder-gray-\d{2,3}\b/g,

    // Stone palette (used in some dark themes)
    /\btext-stone-\d{2,3}\b/g,
    /\bbg-stone-\d{2,3}\b/g,
    /\bborder-stone-\d{2,3}\b/g,
];

// Patterns that are intentionally allowed (semantic colors, not neutral grays)
export const ALLOWED_PATTERNS: RegExp[] = [
    // Semantic brand colors that should remain hardcoded
    /\btext-(?:red|green|blue|yellow|orange|emerald|amber|cyan|purple|pink|rose|fuchsia|indigo|violet|teal|lime|sky)-\d{2,3}\b/g,
    /\bbg-(?:red|green|blue|yellow|orange|emerald|amber|cyan|purple|pink|rose|fuchsia|indigo|violet|teal|lime|sky)-\d{2,3}\b/g,
];

export interface ColorViolation {
    file: string;
    line: number;
    column: number;
    match: string;
    lineContent: string;
}

export interface ScanResult {
    file: string;
    violations: ColorViolation[];
    clean: boolean;
}

/**
 * Scan a single file for hardcoded color patterns
 */
export function scanFileForHardcodedColors(filePath: string): ScanResult {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const violations: ColorViolation[] = [];

    lines.forEach((lineContent, lineIndex) => {
        // Skip comments
        if (lineContent.trim().startsWith('//') || lineContent.trim().startsWith('*')) {
            return;
        }

        for (const pattern of HARDCODED_COLOR_PATTERNS) {
            // Reset regex lastIndex for global patterns
            pattern.lastIndex = 0;
            let match;

            while ((match = pattern.exec(lineContent)) !== null) {
                violations.push({
                    file: filePath,
                    line: lineIndex + 1,
                    column: match.index + 1,
                    match: match[0],
                    lineContent: lineContent.trim(),
                });
            }
        }
    });

    return {
        file: filePath,
        violations,
        clean: violations.length === 0,
    };
}

/**
 * Get all .tsx files from a directory recursively
 */
export function getTsxFiles(dir: string): string[] {
    const files: string[] = [];

    if (!fs.existsSync(dir)) {
        return files;
    }

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...getTsxFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Get all template dashboard files
 */
export function getTemplateFiles(rootDir: string): string[] {
    return getTsxFiles(path.join(rootDir, 'templates'));
}

/**
 * Get all component files for a specific theme
 */
export function getComponentFiles(rootDir: string, theme: string): string[] {
    return getTsxFiles(path.join(rootDir, 'components', theme));
}

/**
 * Get all component files
 */
export function getAllComponentFiles(rootDir: string): string[] {
    const componentsDir = path.join(rootDir, 'components');
    return getTsxFiles(componentsDir);
}

/**
 * Format violations for console output
 */
export function formatViolations(results: ScanResult[]): string {
    const violatingFiles = results.filter(r => !r.clean);

    if (violatingFiles.length === 0) {
        return '✅ No hardcoded colors found!';
    }

    const lines: string[] = [
        `⚠️  Found hardcoded colors in ${violatingFiles.length} file(s):`,
        '',
    ];

    for (const result of violatingFiles) {
        const relativePath = result.file.replace(process.cwd() + '/', '');
        lines.push(`📄 ${relativePath} (${result.violations.length} violations)`);

        for (const v of result.violations) {
            lines.push(`   L${v.line}:${v.column} - "${v.match}"`);
        }
        lines.push('');
    }

    return lines.join('\n');
}

/**
 * Summary statistics
 */
export function getSummary(results: ScanResult[]): {
    totalFiles: number;
    cleanFiles: number;
    violatingFiles: number;
    totalViolations: number;
} {
    const violatingFiles = results.filter(r => !r.clean);
    const totalViolations = violatingFiles.reduce((sum, r) => sum + r.violations.length, 0);

    return {
        totalFiles: results.length,
        cleanFiles: results.length - violatingFiles.length,
        violatingFiles: violatingFiles.length,
        totalViolations,
    };
}
