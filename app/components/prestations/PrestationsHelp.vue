<template>
    <aside class="help">
        <div class="help-text">
            <h2 class="help-title">Vous hésitez sur le geste ?</h2>
            <p>Le diagnostic du cuir chevelu est offert, sans engagement — 20 minutes en salon.</p>
        </div>
        <Button to="/reservation?prestation=diagnostic-cuir-chevelu" variant="outline">
            Réserver un diagnostic
        </Button>
    </aside>
</template>

<style lang="css" scoped>
.help {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding: 40px 36px;
    background-color: var(--color-surface);
    border: var(--line);
    border-radius: var(--radius-card);
}

.help-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
}

.help-title {
    font-size: clamp(24px, 2.4vw, 30px);
    line-height: 1.15;
}

@media (max-width: 599px) {
    .help {
        flex-direction: column;
        align-items: flex-start;
        padding: 32px 24px;
    }
}
</style>