import * as React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'shopify-store': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'store-domain'?: string;
        country?: string;
        language?: string;
        'public-access-token'?: string;
      };
      'shopify-cart': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: string;
        handle?: string;
        'wait-for-update'?: boolean | string;
      };
      'shopify-media': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        width?: string | number;
        height?: string | number;
        query?: string;
      };
      'shopify-data': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        query?: string;
      };
      'shopify-money': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        query?: string;
        format?: string;
      };
      'shopify-variant-selector': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-list-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: string;
        query?: string;
        first?: string | number;
      };
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'shopify-store': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'store-domain'?: string;
        country?: string;
        language?: string;
        'public-access-token'?: string;
      };
      'shopify-cart': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: string;
        handle?: string;
        'wait-for-update'?: boolean | string;
      };
      'shopify-media': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        width?: string | number;
        height?: string | number;
        query?: string;
      };
      'shopify-data': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        query?: string;
      };
      'shopify-money': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        query?: string;
        format?: string;
      };
      'shopify-variant-selector': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'shopify-list-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        type?: string;
        query?: string;
        first?: string | number;
      };
    }
  }

  interface HTMLElement {
    addLine?: (event: React.SyntheticEvent | Event) => HTMLElement;
    showModal?: () => void;
    update?: (event: React.SyntheticEvent | Event) => void;
  }
}
