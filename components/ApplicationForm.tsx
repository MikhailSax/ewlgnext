"use client";

import {useState, FormEvent} from "react";
import ScrollReveal from "./ScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

export default function ApplicationForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [consent, setConsent] = useState(false);
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cleaned = e.target.value.replace(/[^\d+\s()\-]/g, "");
        setPhone(cleaned);
    };

    const validate = () => {
        if (name.trim().length < 2) return "Укажите ваше имя";
        const digits = phone.replace(/\D/g, "");
        if (digits.length < 7) return "Проверьте номер телефона";
        if (!consent) return "Подтвердите согласие на обработку персональных данных";
        return null;
    };

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        const err = validate();
        if (err) {
            setStatus("error");
            setErrorMsg(err);
            return;
        }

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/application", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: name.trim(), phone: phone.trim(), comment: comment.trim()}),
            });

            if (!res.ok) throw new Error("Не удалось отправить заявку");

            setStatus("success");
            setName("");
            setPhone("");
            setComment("");
            setConsent(false);
        } catch (e) {
            setStatus("error");
            setErrorMsg("Что-то пошло не так. Попробуйте ещё раз или позвоните нам.");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-cream border-t border-ink/8 relative overflow-hidden">
            {/* Background type flourish */}
            <div
                className="absolute -bottom-10 sm:-bottom-20 -right-5 sm:-right-10 font-display text-[10rem] sm:text-[16rem] md:text-[22rem] leading-none text-ink/[0.025] select-none pointer-events-none tracking-tightest">
                ewlg
            </div>

            <div className="max-w-8xl mx-auto px-5 md:px-10 relative">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
                    <ScrollReveal className="lg:col-span-5">
                        <div className="font-mono text-xs tracking-widest text-brand-500 uppercase mb-4">
                            § Заявка
                        </div>
                        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tightest">
                            Оставьте номер<br/>
                            <span className="italic text-brand-500">перезвоним за&nbsp;15&nbsp;минут.</span>
                        </h2>
                        <p className="mt-6 md:mt-8 text-base sm:text-lg text-graphite leading-relaxed max-w-md">
                            Расскажите коротко о грузе и маршруте. Менеджер свяжется,
                            уточнит детали и пришлёт расчёт в день обращения.
                        </p>

                        <div className="mt-10 md:mt-12 space-y-4 md:space-y-5 border-t border-ink/10 pt-6 md:pt-8">
                            <ContactLine
                                label="Telegram"
                                value="@ewlg_bot"
                                href="https://t.me/ewlg_bot"
                                external
                            />
                            <ContactLine
                                label="WeChat"
                                value="KSN990903"
                            />
                            <ContactLine
                                label="Email"
                                value="EWLGlog@yandex.ru"
                                href="mailto:EWLGlog@yandex.ru"
                            />
                            <ContactLine label="География" value="Гуанчжоу · Москва · Минск · Aлматы · Дубай "/>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={150} className="lg:col-span-6 lg:col-start-7">
                        <form
                            onSubmit={submit}
                            noValidate
                            className="bg-ink text-cream p-6 sm:p-8 md:p-12 relative"
                        >
                            <div
                                className="absolute top-4 right-4 font-mono text-[10px] tracking-widest text-cream/40 uppercase">
                                EWLG · FORM
                            </div>

                            {status === "success" ? (
                                <SuccessState onReset={() => setStatus("idle")}/>
                            ) : (
                                <>
                                <div
                                    className="font-mono text-[10px] tracking-widest text-brand-400 uppercase mb-6 md:mb-8">
                                    Новая заявка
                                </div>

                                <div className="space-y-6 md:space-y-7">
                                    <Field
                                        label="Имя"
                                        hint="01"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Как к вам обращаться"
                                        autoComplete="name"
                                        inputMode="text"
                                        required
                                    />

                                    <Field
                                        label="Телефон"
                                        hint="02"
                                        type="tel"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        placeholder="+7(938)-722-42-22"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        required
                                    />

                                    <Field
                                        label="Комментарий"
                                        hint="03"
                                        as="textarea"
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        placeholder="Что везём, откуда и куда — пара строк"
                                    />
                                </div>

                                {status === "error" && errorMsg && (
                                    <div
                                        className="mt-5 md:mt-6 px-4 py-3 border-l-2 border-brand-400 text-sm text-cream/90 bg-cream/[0.04] animate-fadeIn">
                                        {errorMsg}
                                    </div>
                                )}

                                <div className="mt-8 md:mt-10 flex items-start gap-3">
                                    <input
                                        id="consent"
                                        type="checkbox"
                                        checked={consent}
                                        onChange={(e) => setConsent(e.target.checked)}
                                        required
                                        className="mt-0.5 h-4 w-4 shrink-0 accent-brand-500 cursor-pointer"
                                    />
                                    <span className="text-xs text-cream/60 leading-relaxed">
                      <label htmlFor="consent" className="cursor-pointer hover:text-cream/80 transition-colors">
                        Я соглашаюсь с
                      </label>{" "}

                                    <span
                        rel="noopener noreferrer"
                        className="text-cream/90 underline underline-offset-2 decoration-brand-400 hover:text-cream"
                      >
                        политикой конфиденциальности
                      </span>{" "}
                                    <label htmlFor="consent"
                                           className="cursor-pointer hover:text-cream/80 transition-colors">
                                        и даю согласие на обработку персональных данных. Контакты
                                        третьим лицам не передаём.
                                    </label>
                                </span>
                                </div>

                                <button
                                type="submit"
                                disabled={status === "loading"}
                            className="group mt-6 w-full inline-flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-500/60 text-cream transition-colors duration-300"
                        >
                    <span className="font-mono text-xs tracking-widest uppercase">
                      {status === "loading" ? "Отправляем…" : "Отправить заявку"}
                    </span>
                            <span className="transition-transform group-hover:translate-x-1.5">→</span>
                        </button>
                    </>
                    )}
                </form>
            </ScrollReveal>
        </div>
</div>
</section>
)
    ;
}

type FieldCommon = { label: string; hint: string };
type InputFieldProps = FieldCommon & { as?: "input" } & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaFieldProps = FieldCommon & { as: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type FieldProps = InputFieldProps | TextareaFieldProps;

function Field(props: FieldProps) {
    const id = `f-${props.label}`;
    const baseClasses =
        "w-full bg-transparent border-b border-cream/20 focus:border-brand-400 text-cream placeholder:text-cream/30 py-3 outline-none transition-colors duration-300 text-base";

    const header = (
        <label htmlFor={id} className="flex items-baseline justify-between mb-2">
            <span className="text-sm text-cream/70">{props.label}</span>
            <span className="font-mono text-[10px] tracking-widest text-cream/30">/ {props.hint}</span>
        </label>
    );

    if (props.as === "textarea") {
        const {label: _l, hint: _h, as: _a, ...rest} = props;
        return (
            <div>
                {header}
                <textarea id={id} rows={3} className={baseClasses + " resize-none"} {...rest} />
            </div>
        );
    }

    const {label: _l, hint: _h, as: _a, ...rest} = props;
    return (
        <div>
            {header}
            <input id={id} className={baseClasses} {...rest} />
        </div>
    );
}

function SuccessState({onReset}: { onReset: () => void }) {
    return (
        <div className="py-6 md:py-8 animate-fadeIn">
            <div className="font-mono text-[10px] tracking-widest text-brand-300 uppercase mb-5 md:mb-6">
                Заявка принята
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight tracking-tightest mb-4">
                Спасибо.<br/>
                <span className="italic text-brand-300">Уже звоним.</span>
            </h3>
            <p className="text-sm sm:text-base text-cream/70 leading-relaxed mb-6 md:mb-8 max-w-sm">
                Менеджер свяжется с вами в течение 15 минут в рабочее время.
                Если оставили заявку ночью — позвоним утром.
            </p>
            <button
                onClick={onReset}
                className="text-sm text-cream/60 hover:text-cream underline underline-offset-4 decoration-brand-400 transition-colors"
            >
                Отправить ещё одну
            </button>
        </div>
    );
}

function ContactLine({
                         label, value, href, external,
                     }: {
    label: string;
    value: string;
    href?: string;
    external?: boolean;
}) {
    const content = (
        <div className="flex items-baseline justify-between gap-4 sm:gap-6 group">
      <span className="font-mono text-xs tracking-widest text-ink/40 uppercase shrink-0">
        {label}
      </span>
            <span className="text-ink group-hover:text-brand-500 transition-colors duration-300 text-right break-all">
        {value}
      </span>
        </div>
    );
    if (!href) return content;
    return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    ) : (
        <a href={href}>{content}</a>
    );
}