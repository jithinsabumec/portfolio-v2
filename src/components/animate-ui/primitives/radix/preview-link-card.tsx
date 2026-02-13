'use client';

import * as React from 'react';

import {
  HoverCard as HoverCardPrimitive,
  HoverCardTrigger as HoverCardTriggerPrimitive,
  HoverCardContent as HoverCardContentPrimitive,
  HoverCardPortal as HoverCardPortalPrimitive,
  HoverCardArrow as HoverCardArrowPrimitive,
  type HoverCardProps as HoverCardPropsPrimitive,
  type HoverCardTriggerProps as HoverCardTriggerPropsPrimitive,
  type HoverCardContentProps as HoverCardContentPropsPrimitive,
  type HoverCardPortalProps as HoverCardPortalPropsPrimitive,
  type HoverCardArrowProps as HoverCardArrowPropsPrimitive,
} from '@/components/animate-ui/primitives/radix/hover-card';
import { getStrictContext } from '@/lib/get-strict-context';

type PreviewLinkCardContextType = {
  href: string;
  src?: string;
  width?: number;
  height?: number;
};

const [PreviewLinkCardProvider, usePreviewLinkCard] =
  getStrictContext<PreviewLinkCardContextType>('PreviewLinkCardContext');

type PreviewLinkCardProps = HoverCardPropsPrimitive & {
  href: string;
  src?: string;
  width?: number;
  height?: number;
  deviceScaleFactor?: number;
  colorScheme?: 'light' | 'dark';
};

function buildQueryString(
  params: Record<string, string | number | boolean | undefined | null>,
) {
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined || v === null) continue;
    sp.append(k, String(v));
  }
  return sp.toString();
}

function PreviewLinkCard({
  href,
  src,
  width = 256,
  height = 144,
  deviceScaleFactor = 2,
  colorScheme = 'light',
  ...props
}: PreviewLinkCardProps) {
  const imageSrc = React.useMemo(
    () =>
      src ??
      `https://api.microlink.io/?${buildQueryString({
        url: href,
        screenshot: true,
        meta: false,
        embed: 'screenshot.url',
        colorScheme,
        'viewport.isMobile': true,
        'viewport.deviceScaleFactor': deviceScaleFactor,
        'viewport.width': width * 3,
        'viewport.height': height * 3,
      })}`,
    [src, href, colorScheme, deviceScaleFactor, width, height],
  );

  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = imageSrc;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, [imageSrc]);

  return (
    <PreviewLinkCardProvider value={{ href, src: imageSrc, width, height }}>
      <HoverCardPrimitive {...props} />
    </PreviewLinkCardProvider>
  );
}

type PreviewLinkCardTriggerProps = HoverCardTriggerPropsPrimitive &
  React.ComponentProps<'a'>;

function PreviewLinkCardTrigger({
  asChild,
  children,
  href: hrefProp,
  ...props
}: PreviewLinkCardTriggerProps) {
  const { href } = usePreviewLinkCard();

  return (
    <HoverCardTriggerPrimitive asChild {...props}>
      {asChild ? (
        children
      ) : (
        <a href={hrefProp ?? href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    </HoverCardTriggerPrimitive>
  );
}

type PreviewLinkCardPortalProps = HoverCardPortalPropsPrimitive;

function PreviewLinkCardPortal(props: PreviewLinkCardPortalProps) {
  return <HoverCardPortalPrimitive {...props} />;
}

type PreviewLinkCardContentProps = HoverCardContentPropsPrimitive & {
  /** Override the link href for the content area */
  contentHref?: string;
};

function PreviewLinkCardContent({
  side = 'top',
  sideOffset = 10,
  align = 'center',
  alignOffset,
  avoidCollisions,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky,
  hideWhenDetached,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  children,
  contentHref,
  className,
  style,
  ...props
}: PreviewLinkCardContentProps) {
  const { href } = usePreviewLinkCard();

  return (
    <HoverCardContentPrimitive
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      avoidCollisions={avoidCollisions}
      collisionBoundary={collisionBoundary}
      collisionPadding={collisionPadding}
      arrowPadding={arrowPadding}
      sticky={sticky}
      hideWhenDetached={hideWhenDetached}
      transition={transition}
      className={className}
      style={style}
      {...props}
    >
      <a
        href={contentHref ?? href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </a>
    </HoverCardContentPrimitive>
  );
}

type PreviewLinkCardImageProps = Omit<
  React.ComponentProps<'img'>,
  'src' | 'width' | 'height'
>;

function PreviewLinkCardImage({
  alt = 'preview image',
  className,
  style,
  ...props
}: PreviewLinkCardImageProps) {
  const { src, width, height } = usePreviewLinkCard();

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={`block w-full h-auto ${className ?? ''}`}
      style={style}
      {...props}
    />
  );
}

type PreviewLinkCardArrowProps = HoverCardArrowPropsPrimitive;

function PreviewLinkCardArrow(props: PreviewLinkCardArrowProps) {
  return <HoverCardArrowPrimitive {...props} />;
}

export {
  PreviewLinkCard,
  PreviewLinkCardTrigger,
  PreviewLinkCardPortal,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  PreviewLinkCardArrow,
  usePreviewLinkCard,
  type PreviewLinkCardProps,
  type PreviewLinkCardTriggerProps,
  type PreviewLinkCardPortalProps,
  type PreviewLinkCardContentProps,
  type PreviewLinkCardImageProps,
  type PreviewLinkCardArrowProps,
  type PreviewLinkCardContextType,
};
