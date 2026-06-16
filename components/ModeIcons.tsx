type IconProps = { className?: string };

export function TruckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      <rect x="2" y="14" width="44" height="26" fill="currentColor" />
      <path d="M46 20 L60 20 L70 28 L70 40 L46 40 Z" fill="currentColor" />
      <circle cx="20" cy="42" r="6" fill="#F5F2EC" stroke="currentColor" strokeWidth="2" />
      <circle cx="58" cy="42" r="6" fill="#F5F2EC" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="42" r="2" fill="currentColor" />
      <circle cx="58" cy="42" r="2" fill="currentColor" />
      <rect x="50" y="24" width="14" height="8" fill="#F5F2EC" />
    </svg>
  );
}

export function PlaneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      <path
        d="M2 28 L24 22 L40 8 L46 10 L36 24 L62 22 L70 14 L76 16 L70 28 L76 40 L70 42 L62 34 L36 32 L46 46 L40 48 L24 34 L2 28 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TrainIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      <rect x="6" y="8" width="32" height="30" rx="2" fill="currentColor" />
      <rect x="42" y="8" width="32" height="30" rx="2" fill="currentColor" />
      <rect x="10" y="14" width="10" height="10" fill="#F5F2EC" />
      <rect x="24" y="14" width="10" height="10" fill="#F5F2EC" />
      <rect x="46" y="14" width="10" height="10" fill="#F5F2EC" />
      <rect x="60" y="14" width="10" height="10" fill="#F5F2EC" />
      <circle cx="16" cy="42" r="4" fill="currentColor" />
      <circle cx="28" cy="42" r="4" fill="currentColor" />
      <circle cx="52" cy="42" r="4" fill="currentColor" />
      <circle cx="64" cy="42" r="4" fill="currentColor" />
      <rect x="0" y="46" width="80" height="2" fill="currentColor" />
    </svg>
  );
}

export function ShipIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      <path d="M6 30 L74 30 L66 42 L14 42 Z" fill="currentColor" />
      <rect x="20" y="14" width="40" height="16" fill="currentColor" />
      <rect x="24" y="18" width="8" height="8" fill="#F5F2EC" />
      <rect x="36" y="18" width="8" height="8" fill="#F5F2EC" />
      <rect x="48" y="18" width="8" height="8" fill="#F5F2EC" />
      <path d="M2 46 Q 10 42, 20 46 T 40 46 T 60 46 T 78 46" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}

export function CustomsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      {/* shield / checkpoint */}
      <path d="M40 4 L62 12 L62 26 C62 38 52 44 40 48 C28 44 18 38 18 26 L18 12 Z" fill="currentColor" />
      <path d="M32 25 L38 31 L50 18" stroke="#F5F2EC" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WarehouseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      <path d="M6 22 L40 6 L74 22 L74 46 L6 46 Z" fill="currentColor" />
      <rect x="22" y="30" width="16" height="16" fill="#F5F2EC" />
      <rect x="42" y="30" width="16" height="10" fill="#F5F2EC" />
    </svg>
  );
}

export function AgentIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 80 50" fill="none" aria-hidden>
      {/* handshake-ish / document with check */}
      <rect x="14" y="6" width="36" height="40" rx="2" fill="currentColor" />
      <rect x="20" y="14" width="24" height="3" fill="#F5F2EC" />
      <rect x="20" y="22" width="24" height="3" fill="#F5F2EC" />
      <rect x="20" y="30" width="16" height="3" fill="#F5F2EC" />
      <circle cx="58" cy="36" r="12" fill="currentColor" stroke="#F5F2EC" strokeWidth="2" />
      <path d="M52 36 L57 41 L65 31" stroke="#F5F2EC" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ModeIcon({
  iconKey,
  className,
}: {
  iconKey: "truck" | "plane" | "train" | "ship" | "customs" | "warehouse" | "agent";
  className?: string;
}) {
  switch (iconKey) {
    case "truck": return <TruckIcon className={className} />;
    case "plane": return <PlaneIcon className={className} />;
    case "train": return <TrainIcon className={className} />;
    case "ship":  return <ShipIcon className={className} />;
    case "customs": return <CustomsIcon className={className} />;
    case "warehouse": return <WarehouseIcon className={className} />;
    case "agent": return <AgentIcon className={className} />;
  }
}
