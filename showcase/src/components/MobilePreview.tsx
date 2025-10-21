import React from 'react'
import './MobilePreview.css'

interface MobilePreviewProps {
  platform: 'ios' | 'android'
  children: React.ReactNode
}

export const MobilePreview: React.FC<MobilePreviewProps> = ({ platform, children }) => {
  return (
    <div className={`mobile-preview mobile-preview--${platform}`}>
      <div className="mobile-preview__device">
        <div className="mobile-preview__notch">
          {platform === 'ios' ? (
            <div className="mobile-preview__notch-inner" />
          ) : (
            <div className="mobile-preview__camera" />
          )}
        </div>
        <div className="mobile-preview__screen">
          <div className="mobile-preview__status-bar">
            <span className="mobile-preview__time">9:41</span>
            <div className="mobile-preview__icons">
              <span>📶</span>
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          <div className="mobile-preview__content">
            {children}
          </div>
        </div>
        <div className="mobile-preview__home-indicator" />
      </div>
      <div className="mobile-preview__label">
        {platform === 'ios' ? '📱 iOS' : '🤖 Android'}
      </div>
    </div>
  )
}

interface MobileComponentProps {
  children: React.ReactNode
}

export const MobileButton: React.FC<MobileComponentProps & { 
  variant?: string
  size?: string
  disabled?: boolean
  loading?: boolean
}> = ({ children, variant = 'primary', size = 'medium', disabled = false, loading = false }) => {
  return (
    <div 
      className={`mobile-component-button mobile-component-button--${variant} mobile-component-button--${size} ${disabled ? 'mobile-component-button--disabled' : ''} ${loading ? 'mobile-component-button--loading' : ''}`}
    >
      {loading && <span className="mobile-component-button__spinner">⟳</span>}
      {children}
    </div>
  )
}

export const MobileLink: React.FC<MobileComponentProps & { variant?: string }> = ({ 
  children, 
  variant = 'standalone' 
}) => {
  return (
    <span className={`mobile-component-link mobile-component-link--${variant}`}>
      {children}
    </span>
  )
}

export const MobileInput: React.FC<{ 
  label?: string
  placeholder?: string
  value?: string
  error?: boolean
}> = ({ label, placeholder, value, error }) => {
  return (
    <div className={`mobile-component-input ${error ? 'mobile-component-input--error' : ''}`}>
      {label && <div className="mobile-component-input__label">{label}</div>}
      <div className="mobile-component-input__field">
        {value || placeholder}
      </div>
    </div>
  )
}

export const MobileCard: React.FC<MobileComponentProps & { 
  variant?: string
  header?: React.ReactNode
  footer?: React.ReactNode
}> = ({ children, variant = 'default', header, footer }) => {
  return (
    <div className={`mobile-component-card mobile-component-card--${variant}`}>
      {header && <div className="mobile-component-card__header">{header}</div>}
      <div className="mobile-component-card__content">{children}</div>
      {footer && <div className="mobile-component-card__footer">{footer}</div>}
    </div>
  )
}

