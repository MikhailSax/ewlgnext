type IconProps = { className?: string };

export function TruckIcon({className}: IconProps) {
    return (
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2aPWgUQRiGn1icGE1AMRe18w/trDQiUTEptFUSbPxBK0ELQQQRNGoETxDBXlKJ2KhgEG1E8IgWEqMW9iqnFiJRgyiarCx8e0z273ZvZ/b2YB5YuNn75t53P2a/2Z05sFgsFovFYrFYdFMCrgKfACeno6roT8TE1YCKeDRGJccL945nin41QXzFZAJqIrKN4tGvjARjeFkuKtr8LQaOAY+Az8A/3zArKlr87Qe+NLjPikpmf5eVH5kEjgIbgIW6BAyTyd8J6fwXOAV06BbIgab9rQF+Secjcm4jcAu4FiMQ91wQNi+bjm86AXel421p71YS8j5GoJJyXjYd31QCtkunGWAVsAL4JufuACtjBLzngs0J52XT8akTsAB4KZ3Oy7kxaT+W70mQgL6YxNZyjE+dgIPS4SPQCWwBZoHfwLqQ+GZugSs5xqdKQKdcuNvhkFT9FyE/GpeAkpispShqJuNTJWBEgl/JUD8sbffJrzthAopGYn+9wA8J3gF0KVk+oEOgRST25xU6d/pD5lq3/TziASi1QItI5G+TFLo/wHpgrRS9WSmCmQVaSCJ/TyTourQfSPumLoEW0tDfcQn4CiwF9kh7WupCZoEWE+tvWIa6G7BXzr1NuSbXlgkoSZGbky/dzx5PU67JtV0ClikX6a7qnNQtUDDm+VsEvJETH4CtugUKyDx/N6TxzvdGl4SJdq8Bq5WXGnfeT0u13WvAqHwYMyVQUOr+vLe6AVMCBaXuz1vW7jUlUFDq/rw5v8OUQEGp+0titCz7AFOyHjgjawNu/ehpJGCQZnwF/DkNjA4r6wFhx3dgX5yAIZr1FfDnxBgdVm6R+8BO2Qt0F0V2AePy3WyImMkEZPEV8OdEGC0rGT4dY+as8pa4PExAM1l9Bfw5EUa9vb97ITsv/kVGL+MXwgQ0k9VXwJ8TYfS1sg4Ytezs7bQMKJukAQHNZPUV8OdEGPWGmbsk7t958e+0dCmFJyCgmay+Av5q8qE/oVBfyE5Ld4hQ1O9mJasv/HGViLe5KTnnBvvjHN+myKC03TnYxJ+kdPqa8MeVlB0V9W1uVJlm/HH+YvNQYi8m3KlJe+j0VU36N7myMtzOxMSdazDd6CZXX0PKA8e4PGQskeIyqGR4rsFTl25y9TUkRSRqeE7nfPEt8dUDXJL59Kcck3Jv5THs282XxWKxWCwWi4Wi8x/HO9WdwdROewAAAABJRU5ErkJggg=="
            alt="external-prisoner-transport-vehicle-law-and-justice-konkapp-detailed-outline-konkapp"
        />
    );
}

export function PlaneIcon({className}: IconProps) {
    return (
        <img className={className} width="67" height="67"
             src="https://img.icons8.ru/external-smashingstocks-thin-outline-smashing-stocks/67/external-air-freight-logistic-services-smashingstocks-thin-outline-smashing-stocks.png"
             alt="external-air-freight-logistic-services-smashingstocks-thin-outline-smashing-stocks"/>
    )
}

export function TrainIcon({
                              className
                          }: IconProps) {
    return (
        <img
            src="data:image/png;base64,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"
            alt="train"/>
            );
            }

            export function ShipIcon({
            className
        }: IconProps) {
            return (
            <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFZ0lEQVR4nO2aeWhcVRTGf0kb41o3XJpYC7WK/iGa1rQq0bghiNYFq+BfWmvdMS4RsSAu1RijUrRaFQR32xQUQQW1iIKtJkVrtLWkSVMtVkebWkXc02bkwvfC9fnWmbx5M8n74DDz3pzv3vPO3OWccx9kyJAhQ4YMGSoEc4FnIsocxgH6gHxE+RU4gDGOAT3sQuDqAPlYenczThwyLUSvWXo/AfswhjEQ0SEGH0n3NsYwBmI45Fzp5oDdGaMYiOEQg0+lfw1jDEcDFwE/6AFvBC6JIM9Kf3NEfbdcEMP5JcEE4MUYW20SMgx0UCa4woop3gBWlFjeBP6SDWaEpo7XZMyCFG24QTZsAmpJGZtlzDEpT9svZcftKdrBfpq/v8uoQtAUI/cJkk/kkF+Ag0gJzTKiq4g2liWwyD5FSmiRAU8X0UYdMD8k74kqNwH/ADuBY0kBz4cEVWYazQPuKKFskE3vkQJ61Plsn9/PTjk+Oa+Uzqi1hueePjp7AHcB7SWWTjmkF6gplUNmqtP1lB8myq681rmS4Cp1+DLlCSeT3gEcmEQHVcDlwOvASiur/VrX5ShD1iiOon9zHIfcmvICWQoxO1RkrBOpFThrjIkT5d4ZxyE5kQ4lGVRFTMyiVNbiJHhHaqf8M27In0vIISZ4WwT8rDn/vox0w5zh9MsGs36d76EzTfwhtdemHScIL6hN80k5OKRV7Q5bdY1e10hoUMyT1z+Z1/Vxlk6NNa0dnbzioKDQYUj608vFIT1q9xxgbyt+MImjgw7de0LXS3RtRoCDE3RvI7CX1oa8RpVf0LihmLOhXEIOcRzQpOHtFJ3PtHQe1b0HdN2ma7tseKLurVM7joNMvcYLi/V7X6FFpVxCDrlP7ZqayhZ9/8aVDpwE7NK06tXnLt13UGsVq7aoPfP9QZ+gclhTxS8PS80htcqah631w6wZbsxT3dbo/KZ0340GTRlnTXrOY1eaq13F/H5ZMYbnEt529weOCNGp0XHHbiHb93RV89y4FPhbz2FGJuXskCRRpVqJMwrbdS8W3ga+BVYB92hfD3NInTpbA3wHbAW6tQhOjtBnvQe/qwj+9+p/lWzfGXJCWKc1p1t8c8Qxgi984v2pHg3tqx3AWci8xMz7+4FJPvy2hPlOFW1SDPtNSDCCannsdBVcnOG2XUXcW3QeYmKCQWshWw6cJq7DX2HxtwGPievwt1v8ZeJPjsEfHEV+p2W/8YEvZgEfBHjfhMyNAfzZFc4PbHihosYlyhAbxwP/cOBkfcbFVHErnT/FvvmjNZz6dXYSdDo3URHgJo/hGJW/wIdvwusrE+ZP8LDfvNoxgnuB1VqEHIWvPNLuKr2j4SRKeTlztQ9/jgf/woj89UXy/fp3279NXBNu/A/VCnft1y3N/v6hJOf6Jy52rc7VerGlPwJ/Y8r8Pj1r4O5ih83XWwmYLSYZuy7kDKRG25wX3xSqr02RH8X+QBylekWzT3UrKv/UQgozo8iPZf981QxagRkxOpupdzQWW/yGCuLPsPhmIR6Bk7vkJe+GNNyg0Ngv8HkHOD7EkJUp8r3sN4dc/4lMW4Clets4r6KMOak7BThYYobtK/otL90nxW1RmL/D4r9k8Q8R/1VXahDGb3Lx7f6j8MPsXypuY1CtosNVvHXLH8BDPnUIw384Ar89Zb6f/b6YooY/V9BiZK2cdVhE/iMu/mfi1xfIXztK/Cj2Z7DxVgEFnjoN225xC+WvsfhdJeY7BaKt7gKR85pjPmKBJkqBaFGF8XvcyU49cIarQGTi/McDCizLVZSps/iFFIji8AdHkd9p2R/4qumsCi/wZAWihPgZMmTIkCFDBhLDv7kgF5c+ApCyAAAAAElFTkSuQmCC"
            alt="external-46-transport-vectorslab-detailed-outline-vectorslab"/>
            );
        }

            export function CustomsIcon({
            className
        }: IconProps) {
            return (
            <img
            src="data:image/png;base64,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"
            alt="security-checked--v1"/>
            );
        }

            export function WarehouseIcon({
            className
        }: IconProps) {
            return (
            <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACj0lEQVR4nO2aMWsUQRiGH8MZOAhYXUC7FOYfJI32qaJ1JLkyIBZWMUYITGlpioCtlz9gbBRSWmmT1oCmU9BWEaLEDRPmZBjH3b292dvZue+Fjzt2Zm7nfW533r29hebUAe6Z0u+nSgvAWyAz9Q5YZErUB75b5of1E3gIXCFRzQOHjunfpuxth6ZvUloBPjtGT4HbwDJw4rR9Be6QgLrAHvDHMTgA5ir0a5WWgA+OoW/A3YIj5YvnSLlFi9QBtoEzx8gb4EaJ8T3gpWeteApcpWXxlo2xuvvSIuq47Hsm/H7MCYcEWpt6NR+yw1Pql7OP18B1Io630IoqLrsNxVYUcblUId5Cq5G47IwZb6E10bhciHg1rj0u+zXEWyu+oF7LrsiCxuXKBOMtqrjsxhAzAVTJx/J/yK0GmNAMsGEO0aLaCri+rBoPtqcT4/Wv9CKx67kz8yrgnZm+5xZYXn0knOaNF3ct054vF8g1p/EHsElYbTQIYKhN483ez5puUNaGY+BmDTvXp8C6SZCi2q1pDpjPPbb8KhfA5YbE9Y9fJQAQAJkAQABkAoBcAIvm90AWeX0qiNHKAJ5EYK5s7dQBQEVgrGyV9aEEAJMDsOXcSNmz2p5Z23WfRykCmC2aiKXZFAG4um+16feukgegdc0U0wogTwIAAYAAQAAgAEj0QihPSV4IbZeEoPs8ThFANsESADQA4Nz8+Tj8g2Pfad+32gamf4ix0QB44Rljt7saBBobDQA1ogkVaGzUAB4Az83rqADKjo0aQJ5UoLECAAGAAEAAIAAQADQKYDCiiYNAY4MCOMp5fu+oYKfnZmJlngU88PwWqDrWV2V9qDLfbMqlqjzDl1KtawCjPMOXUmnPMxfC+SmG1oegvQAAAABJRU5ErkJggg=="
            alt="warehouse"/>
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
            className ? : string;
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
