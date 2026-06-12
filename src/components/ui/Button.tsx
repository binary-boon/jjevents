import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Variant = 'gold' | 'outline' | 'ghost';

type Props = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  arrow?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  fullWidth?: boolean;
};

const variantClass: Record<Variant, string> = {
  gold: 'btn btn-gold',
  outline: 'btn btn-outline',
  ghost: 'btn btn-ghost',
};

export default function Button({
  children,
  variant = 'gold',
  href,
  arrow = false,
  className,
  type = 'button',
  onClick,
  fullWidth,
}: Props) {
  const cls = cn(variantClass[variant], fullWidth && 'btn-full', className);
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={15} strokeWidth={1.6} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
