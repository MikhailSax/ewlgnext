type IconProps = { className?: string };

export function TruckIcon({ className }: IconProps) {
    // Icon from Google Material Icons (Apache License 2.0)
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                fill="currentColor"
                d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m13.5-9l1.96 2.5H17V9.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
            />
        </svg>
    );
}


export function PlaneIcon({ className }: IconProps) {
    // Icon from Google Material Icons (Apache License 2.0)
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                fill="currentColor"
                d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1l4 1v-1.5L13.5 19v-5.5z"
            />
        </svg>
    );
}

export function TrainIcon({ className }: IconProps) {
    // Icon from Google Material Icons (Apache License 2.0)
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                fill="currentColor"
                d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4M7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17m3.5-7H6V6h5zm2 0V6h5v4zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"
            />
        </svg>
    );
}

export function ShipIcon({ className }: IconProps) {
    // Icon from Google Material Icons (Apache License 2.0)
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                fill="currentColor"
                d="M20 21c-1.39 0-2.78-.47-4-1.32c-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99a8.75 8.75 0 0 0 8 0c1.26.65 2.62.99 4 .99h2v-2zM3.95 19H4c1.6 0 3.02-.88 4-2c.98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42a1.007 1.007 0 0 0-.66 1.28zM6 6h12v3.97L12 8L6 9.97z"
            />
        </svg>
    );
}

export function CustomsIcon({ className }: IconProps) {
    // Icon from Google Material Icons (Apache License 2.0)
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                fill="currentColor"
                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
            />
        </svg>
    );
}

export function WarehouseIcon({ className }: IconProps) {
    // Icon from Google Material Icons (Apache License 2.0)
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
        >
            <path
                fill="currentColor"
                d="M22 19V8.35c0-.82-.5-1.55-1.26-1.86l-8-3.2c-.48-.19-1.01-.19-1.49 0l-8 3.2C2.5 6.8 2 7.54 2 8.35V19c0 1.1.9 2 2 2h3v-9h10v9h3c1.1 0 2-.9 2-2m-11 0H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z"
            />
        </svg>
    );
}

export function AgentIcon({
                              className
                          }: IconProps) {
    return (
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO3WQQ6CMBCF4Z/zcAEWHs4LuPBCmkg4hS5EDzJuICHGAgItg76XNCFhGuZrAwUUZVPJgAI4AHegbq6L5p775MAeuAEWGE/gCOw8obLOytdvDXd3YUzNKqjQyj9GrHY797rWTuUzmmdtVB6h+WSoPGHz0VBnZy9j1vOhOPVNbIs8fvOzDqrtM5jBAicxQZzF/h5S9fw7xR7lkpC1EDbQz2RI6pggCBIlJgiC/BakmnnQuYHMPejcQWLXmSAI8jGCNBHEBNkApJpwAH572lsKyNKIvmckgQxlTp0JgiDBCIIgCOIWYhsZwZQOmrOR4xJmKApL5QVIy3MoCy/D+wAAAABJRU5ErkJggg=="
            alt="warehouse-1"/>
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
        case "truck":
            return <TruckIcon className={className}/>;
        case
        "plane"
        :
            return <PlaneIcon className={className}/>;
        case
        "train"
        :
            return <TrainIcon className={className}/>;
        case
        "ship"
        :
            return <ShipIcon className={className}/>;
        case
        "customs"
        :
            return <CustomsIcon className={className}/>;
        case
        "warehouse"
        :
            return <WarehouseIcon className={className}/>;
        case
        "agent"
        :
            return <AgentIcon className={className}/>;
    }
}
