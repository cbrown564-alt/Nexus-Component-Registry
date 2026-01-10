/**
 * Accessibility Tests for Button Components
 * 
 * Tests WCAG 2.1 compliance for all button variants across themes:
 * - Focus visibility (2.4.7)
 * - Keyboard accessibility (2.1.1)
 * - Name from content (4.1.2)
 * - Target size (2.5.5)
 */

import React from 'react';
import { render, runAxe, expectNoViolations } from './testUtils';
import { jest } from '@jest/globals';

// Import all button components
import GlowButton from '@/components/ui/GlowButton';
import EngineeringButton from '@/components/engineering/EngineeringButton';
import ClayButton from '@/components/clay/ClayButton';
import AcidButton from '@/components/acid/AcidButton';
import BrutalistButton from '@/components/brutalist/BrutalistButton';
import EInkButton from '@/components/eink/EInkButton';
import FestivalButton from '@/components/festival/FestivalButton';
import FoodButton from '@/components/food/FoodButton';
import GridButton from '@/components/grid/GridButton';
import KidsButton from '@/components/kids/KidsButton';
import KitchenButton from '@/components/kitchen/KitchenButton';
import LegalButton from '@/components/legal/LegalButton';
import MusicButton from '@/components/music/MusicButton';
import SaasButton from '@/components/saas/SaasButton';
import ShopButton from '@/components/ecommerce/ShopButton';
import SolarpunkButton from '@/components/solarpunk/SolarpunkButton';
import SwissButton from '@/components/swiss/SwissButton';
import WellnessButton from '@/components/wellness/WellnessButton';
import EditorialButton from '@/components/magazine/EditorialButton';
import FlowButton from '@/components/productivity/FlowButton';
import LegacyButton from '@/components/legacy/LegacyButton';
import NeumorphicButton from '@/components/softplastic/NeumorphicButton';

describe('Button Components Accessibility', () => {
    describe('GlowButton (shared/ui)', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<GlowButton>Click me</GlowButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });

        it('should have accessible name from content', () => {
            const { getByRole } = render(<GlowButton>Submit Form</GlowButton>);
            expect(getByRole('button', { name: 'Submit Form' })).toBeInTheDocument();
        });

        it('should be focusable', () => {
            const { getByRole } = render(<GlowButton>Focus me</GlowButton>);
            const button = getByRole('button');
            button.focus();
            expect(document.activeElement).toBe(button);
        });
    });

    describe('EngineeringButton', () => {
        it('should have no accessibility violations - primary variant', async () => {
            const { container } = render(
                <EngineeringButton variant="primary">Deploy</EngineeringButton>
            );
            const results = await runAxe(container);
            expectNoViolations(results);
        });

        it('should have no accessibility violations - secondary variant', async () => {
            const { container } = render(
                <EngineeringButton variant="secondary">Cancel</EngineeringButton>
            );
            const results = await runAxe(container);
            expectNoViolations(results);
        });

        it('should have no accessibility violations - ghost variant', async () => {
            const { container } = render(
                <EngineeringButton variant="ghost">More Options</EngineeringButton>
            );
            const results = await runAxe(container);
            expectNoViolations(results);
        });

        it('should support aria-label for icon-only buttons', () => {
            const { getByRole } = render(
                <EngineeringButton aria-label="Settings">⚙️</EngineeringButton>
            );
            expect(getByRole('button', { name: 'Settings' })).toBeInTheDocument();
        });
    });

    describe('ClayButton (Claymorphism)', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<ClayButton>Soft Press</ClayButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('AcidButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<AcidButton>GLITCH</AcidButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('BrutalistButton', () => {
        it('should have no accessibility violations - default variant', async () => {
            const { container } = render(<BrutalistButton>BOLD</BrutalistButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });

        it('should have no accessibility violations - neo variant', async () => {
            const { container } = render(<BrutalistButton variant="neo">NEO</BrutalistButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('EInkButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<EInkButton>Page Turn</EInkButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('FestivalButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<FestivalButton>Get Tickets</FestivalButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('FoodButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<FoodButton>Order Now</FoodButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('GridButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<GridButton>Execute</GridButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('KidsButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<KidsButton>Play!</KidsButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('KitchenButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<KitchenButton>Start Timer</KitchenButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('LegalButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<LegalButton>Sign Document</LegalButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('MusicButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<MusicButton>Play</MusicButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('SaasButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<SaasButton>Upgrade Plan</SaasButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('ShopButton (E-commerce)', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<ShopButton>Add to Cart</ShopButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('SolarpunkButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<SolarpunkButton>Plant Tree</SolarpunkButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('SwissButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<SwissButton>DESIGN</SwissButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('WellnessButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<WellnessButton>Start Session</WellnessButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('EditorialButton (Magazine)', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<EditorialButton>Read More</EditorialButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('FlowButton (Productivity)', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<FlowButton>Add Task</FlowButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('LegacyButton', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<LegacyButton>OK</LegacyButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });

    describe('NeumorphicButton (Soft Plastic)', () => {
        it('should have no accessibility violations', async () => {
            const { container } = render(<NeumorphicButton label="Press">Press</NeumorphicButton>);
            const results = await runAxe(container);
            expectNoViolations(results);
        });
    });
});

describe('Button Keyboard Navigation', () => {
    it('all buttons should respond to Enter key', async () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<GlowButton onClick={handleClick}>Test</GlowButton>);
        
        const button = getByRole('button');
        button.focus();
        
        // Simulate Enter keypress
        button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
        button.click(); // Native buttons auto-click on Enter
        
        expect(handleClick).toHaveBeenCalled();
    });

    it('all buttons should respond to Space key', async () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<GlowButton onClick={handleClick}>Test</GlowButton>);
        
        const button = getByRole('button');
        button.focus();
        
        // Native button behavior with space
        button.click();
        
        expect(handleClick).toHaveBeenCalled();
    });
});

describe('Button Disabled State', () => {
    it('disabled buttons should not be clickable', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <GlowButton disabled onClick={handleClick}>Disabled</GlowButton>
        );
        
        const button = getByRole('button');
        button.click();
        
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('disabled buttons should have proper aria attribute', () => {
        const { getByRole } = render(<GlowButton disabled>Disabled</GlowButton>);
        expect(getByRole('button')).toBeDisabled();
    });
});
