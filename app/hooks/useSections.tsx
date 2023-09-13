'use client';

import React, { createContext, useContext, useMemo, useRef } from 'react';
import { Sections } from '@/app/types/sections';

const SectionContext = createContext<Sections | null>(null);

export function SectionProvider({ children }: { children: React.ReactNode }): React.ReactNode {
    const aboutMeRef = useRef<HTMLElement>();
    const portfolioRef = useRef<HTMLElement>();
    const experienceRef = useRef<HTMLElement>();
    const contactRef = useRef<HTMLElement>();

    const memoedValue: Sections = useMemo<Sections>(
        () => ({
            aboutMeRef,
            portfolioRef,
            experienceRef,
            contactRef
        }),
        []
    );

    return <SectionContext.Provider value={memoedValue}>{children}</SectionContext.Provider>;
}

export default function useSections() {
    return useContext(SectionContext) as Sections;
}
