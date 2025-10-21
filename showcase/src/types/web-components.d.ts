/* TypeScript declarations for custom web components */

declare namespace JSX {
  interface IntrinsicElements {
    'ds-button': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        variant?: 'primary' | 'secondary' | 'tertiary' | 'as-link' | 'icon-only'
        size?: 'small' | 'medium' | 'large'
        disabled?: boolean
        loading?: boolean
        type?: 'button' | 'submit' | 'reset'
        'aria-label'?: string
      },
      HTMLElement
    >
    'ds-link': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        href?: string
        variant?: 'inline' | 'standalone' | 'nav'
        external?: boolean
        target?: string
        'aria-current'?: string
      },
      HTMLElement
    >
    'ds-input': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string
        label?: string
        type?: string
        placeholder?: string
        'help-text'?: string
        'error-text'?: string
        required?: boolean
        disabled?: boolean
        value?: string
      },
      HTMLElement
    >
    'ds-card': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'outlined' | 'elevated' | 'interactive'
      },
      HTMLElement
    >
    'ds-dialog': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        id?: string
        title?: string
        size?: 'small' | 'medium' | 'large' | 'fullscreen'
        variant?: 'modal' | 'drawer' | 'fullscreen'
        open?: boolean
      },
      HTMLElement
    >
  }
}

declare module '../../../reference-implementation/web-components/src/components/ds-button.js'
declare module '../../../reference-implementation/web-components/src/components/ds-link.js'
declare module '../../../reference-implementation/web-components/src/components/ds-input.js'
declare module '../../../reference-implementation/web-components/src/components/ds-card.js'
declare module '../../../reference-implementation/web-components/src/components/ds-dialog.js'

