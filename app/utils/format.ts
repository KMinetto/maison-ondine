const NBSP = ' ';

export function formatDuration(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;

    if (!hours) return `${rest}${NBSP}min`;
    return rest ? `${hours}${NBSP}h${NBSP}${String(rest).padStart(2, '0')}`
    : `${hours}${NBSP}h`
};

export function formatPrice(price: number | null) {
    return price === null ? 'offert' : `${price}${NBSP}€`;
};
