
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const COMPONENT_DIRS = ['components', 'hooks'];
const OUTPUT_FILE = path.join(ROOT_DIR, 'public', 'registry.json');

// Helper to find all generic files recursively
function getFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;

    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

function parseDependencies(content) {
    const dependencies = new Set();
    const registryDependencies = new Set();

    // Regex for imports: import ... from '...'
    const importRegex = /import\s+(?:[\s\S]*?from\s+)?['"]([^'"]+)['"]/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];

        if (importPath.startsWith('.')) {
            // Relative import - ignore for now or resolve?
            // In a real registry we might want to resolve this to the file
            continue;
        }

        if (importPath.startsWith('@/')) {
            // Internal project alias
            // e.g. @/components/ui/Button
            registryDependencies.add(importPath);
        } else if (!importPath.startsWith('react')) {
            // specific react imports are standard
            // capture 3rd party libs
            dependencies.add(importPath);
        }
    }

    return {
        dependencies: Array.from(dependencies),
        registryDependencies: Array.from(registryDependencies)
    };
}

function generateRegistry() {
    const registryItems = [];

    console.log('Scanning directories...', COMPONENT_DIRS);

    COMPONENT_DIRS.forEach(dirName => {
        const fullPath = path.join(ROOT_DIR, dirName);
        const files = getFiles(fullPath);

        files.forEach(filePath => {
            const relativePath = path.relative(ROOT_DIR, filePath);
            const content = fs.readFileSync(filePath, 'utf-8');
            const filename = path.basename(filePath, path.extname(filePath));

            // Basic type inference
            let type = 'ui';
            if (relativePath.includes('hooks/')) type = 'hook';
            if (relativePath.includes('components/ui')) type = 'ui';
            else if (relativePath.includes('components/')) type = 'component'; // theme specific?

            const { dependencies, registryDependencies } = parseDependencies(content);

            registryItems.push({
                name: filename,
                type: `registry:${type}`,
                path: relativePath,
                dependencies,
                registryDependencies,
                // Optional: include small snippet or description parsed from comments
            });
        });
    });

    const registry = {
        name: "nexus-component-registry",
        version: "0.1.0",
        generatedAt: new Date().toISOString(),
        items: registryItems
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(registry, null, 2));
    console.log(`Registry generated at ${OUTPUT_FILE} with ${registryItems.length} items.`);
}

generateRegistry();
