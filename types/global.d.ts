import React from 'react';

export {};

declare global {
    interface IPage {
        name: string;
        icon: React.ReactNode;
    }
}
