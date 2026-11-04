'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import {
  SiApple, SiCss3, SiFirebase, SiGithub, SiGoogleads, SiGoogleanalytics, SiHtml5,
  SiJavascript, SiLinux, SiLooker, SiMicrosoftexcel, SiMicrosoftoffice,
  SiMicrosoftsqlserver, SiMysql, SiNextdotjs, SiPandas, SiPostgresql, SiPowerbi,
  SiPython, SiReact, SiTailwindcss, SiTypescript, SiVisualstudiocode, SiWindows,
} from 'react-icons/si';
import { FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLanguage, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { cn } from '../../lib/utils';

// El orden importa: la primera coincidencia gana (p. ej. "Tailwind CSS" antes que "CSS").
const TECH_ICONS: Array<[RegExp, IconType]> = [
  [/firebase|firestore/, SiFirebase],
  [/sql\s*server/, SiMicrosoftsqlserver],
  [/postgre/, SiPostgresql],
  [/mysql/, SiMysql],
  [/next/, SiNextdotjs],
  [/tailwind/, SiTailwindcss],
  [/html/, SiHtml5],
  [/css/, SiCss3],
  [/react/, SiReact],
  [/typescript/, SiTypescript],
  [/javascript/, SiJavascript],
  [/python/, SiPython],
  [/pandas/, SiPandas],
  [/git\s*hub/, SiGithub],
  [/power\s*bi/, SiPowerbi],
  [/looker/, SiLooker],
  [/google\s*analytics|ga4/, SiGoogleanalytics],
  [/google\s*ads/, SiGoogleads],
  [/excel/, SiMicrosoftexcel],
  [/office/, SiMicrosoftoffice],
  [/visual\s*studio\s*code|vs\s*code/, SiVisualstudiocode],
  [/mac\s*os/, SiApple],
  [/linux|ubuntu|kali/, SiLinux],
  [/windows/, SiWindows],
  [/ingl[eé]s|english|idioma/, FaLanguage],
];

const SOCIAL_ICONS: Array<[RegExp, IconType]> = [
  [/git\s*hub/, FaGithub],
  [/linked\s*in/, FaLinkedin],
  [/whats\s*app/, FaWhatsapp],
  [/instagram/, FaInstagram],
  [/mail|correo/, FaEnvelope],
];

function findIcon(map: Array<[RegExp, IconType]>, name: string): IconType | null {
  const key = name.toLowerCase();
  return map.find(([pattern]) => pattern.test(key))?.[1] ?? null;
}

interface TechIconProps {
  name: string;
  /** URL de imagen opcional, solo se usa si no hay un ícono conocido para `name`. */
  src?: string;
  className?: string;
}

/**
 * Ícono de una tecnología. Usa íconos locales (react-icons) para no depender
 * de imágenes de terceros, que la CSP bloquea y que pueden desaparecer.
 */
export default function TechIcon({ name, src, className }: TechIconProps) {
  const Icon = findIcon(TECH_ICONS, name);
  const [broken, setBroken] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Si la imagen falló antes de hidratar, React no ve el evento onError.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setBroken(true);
  }, []);

  if (Icon) return <Icon className={className} aria-hidden="true" />;

  if (src && !broken) {
    return (
      <img
        ref={imgRef}
        src={src}
        alt=""
        className={cn('object-contain', className)}
        loading="lazy"
        onError={() => setBroken(true)}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn('rounded-lg bg-brand/10 flex items-center justify-center font-bold text-lg', className)}
    >
      {name.trim().charAt(0).toUpperCase()}
    </span>
  );
}

export function SocialIcon({ platform, className }: { platform: string; className?: string }) {
  const Icon = findIcon(SOCIAL_ICONS, platform) ?? FaGlobe;
  return <Icon className={className} aria-hidden="true" />;
}
