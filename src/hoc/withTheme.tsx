import React from 'react';
import type { WithThemeProps } from '../types';

export function withTheme<P extends WithThemeProps>(
  WrappedComponent: React.ComponentType<P>
) {
  type ExternalProps = Omit<P, keyof WithThemeProps> & WithThemeProps;
  type ComponentRef = React.ComponentRef<typeof WrappedComponent>;

  const ComponentWithTheme = React.forwardRef<ComponentRef, ExternalProps>(
    (props, ref) => {
      const combinedProps = { ...props, ref } as unknown as P;
      return <WrappedComponent {...combinedProps} />;
    }
  );

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithTheme.displayName = `WithTheme(${wrappedComponentName})`;

  return ComponentWithTheme;
}
