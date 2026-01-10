
import React from 'react';
import { renderToString } from 'react-dom/server';
import { components } from '../data/components';

// Simple mock for window/navigator if needed
if (typeof window === 'undefined') {
    (global as any).window = {};
}
if (typeof navigator === 'undefined') {
    Object.defineProperty(global, 'navigator', {
        value: { clipboard: { writeText: () => Promise.resolve() } },
        writable: true
    });
}

console.log(`Verifying ${components.length} components...`);

const failedComponents: string[] = [];

components.forEach((meta) => {
    try {
        const Component = meta.component;
        const props = meta.previewProps || {};
        renderToString(React.createElement(Component, props));
        // console.log(`✅ ${meta.name}`);
    } catch (e) {
        console.error(`❌ FAILURE: ${meta.name} (${meta.id})`);
        console.error(e);
        failedComponents.push(meta.name);
    }
});

if (failedComponents.length > 0) {
    console.error(`\nFound ${failedComponents.length} failing components:`);
    failedComponents.forEach(name => console.error(`- ${name}`));
    process.exit(1);
} else {
    console.log('\nAll components verified successfully! ✅');
    process.exit(0);
}
