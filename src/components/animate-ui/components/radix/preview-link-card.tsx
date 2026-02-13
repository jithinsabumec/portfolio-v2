import * as React from 'react';

import {
  PreviewLinkCard as PreviewLinkCardPrimitive,
  PreviewLinkCardTrigger as PreviewLinkCardTriggerPrimitive,
  PreviewLinkCardPortal as PreviewLinkCardPortalPrimitive,
  PreviewLinkCardContent as PreviewLinkCardContentPrimitive,
  PreviewLinkCardImage as PreviewLinkCardImagePrimitive,
  type PreviewLinkCardProps as PreviewLinkCardPrimitiveProps,
  type PreviewLinkCardTriggerProps as PreviewLinkCardTriggerPrimitiveProps,
  type PreviewLinkCardContentProps as PreviewLinkCardContentPrimitiveProps,
  type PreviewLinkCardImageProps as PreviewLinkCardImagePrimitiveProps,
} from '@/components/animate-ui/primitives/radix/preview-link-card';
import { cn } from '@/lib/utils';

type PreviewLinkCardProps = PreviewLinkCardPrimitiveProps;

function PreviewLinkCard(props: PreviewLinkCardProps) {
  return <PreviewLinkCardPrimitive openDelay={200} closeDelay={100} {...props} />;
}

type PreviewLinkCardTriggerProps = PreviewLinkCardTriggerPrimitiveProps;

function PreviewLinkCardTrigger(props: PreviewLinkCardTriggerProps) {
  return <PreviewLinkCardTriggerPrimitive {...props} />;
}

type PreviewLinkCardContentProps = PreviewLinkCardContentPrimitiveProps;

function PreviewLinkCardContent({
  className,
  align = 'center',
  sideOffset = 10,
  side = 'top',
  ...props
}: PreviewLinkCardContentProps) {
  return (
    <PreviewLinkCardPortalPrimitive>
      <PreviewLinkCardContentPrimitive
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-60 overflow-hidden rounded-xl border border-[#d6d6d6] bg-white p-1 shadow-[0px_4px_16px_rgba(0,0,0,0.08)] outline-none',
          className,
        )}
        {...props}
      />
    </PreviewLinkCardPortalPrimitive>
  );
}

type PreviewLinkCardImageProps = PreviewLinkCardImagePrimitiveProps;

function PreviewLinkCardImage({ className, ...props }: PreviewLinkCardImageProps) {
  return (
    <PreviewLinkCardImagePrimitive
      className={cn('rounded-lg', className)}
      {...props}
    />
  );
}

export {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  type PreviewLinkCardProps,
  type PreviewLinkCardTriggerProps,
  type PreviewLinkCardContentProps,
  type PreviewLinkCardImageProps,
};
