import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations('About');
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <div style={{ padding: '20px' }}>This is a localized text: <span style={{ color: 'purple' }}>{t('title')}</span></div>
        </div>
    );
}