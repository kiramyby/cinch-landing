(() => {
  const i18n = {
    'zh-CN': {
      'nav.features': '功能',
      'nav.download': '下载',
      'hero.tagline': '杭电助手 · 一站式校园信息聚合',
      'hero.sub': '课表 · 考试 · 成绩 · 作业截止日期',
      'hero.version': '当前版本',
      'cta.ios.small': 'iOS · TestFlight',
      'cta.ios.main': '立即加入测试',
      'cta.android.small': 'Android · APK',
      'cta.android.main': '下载安装包',
      'download.title': '立即下载',
      'download.ios.desc': '通过 TestFlight 加入 Beta 测试，体验最新版本。',
      'download.ios.btn': '前往 TestFlight',
      'download.ios.hint': '需要 iOS 16 及以上版本。',
      'download.android.desc': '直接下载 APK 安装，请允许"未知来源"安装。',
      'download.android.btn': '下载 APK',
      'download.android.hint': '支持 Android 8.0 及以上版本。',
      'footer.tagline': 'Powered by\n01001100 01101111 01110110 01100101',
      'footer.disclaimer': '本应用与杭州电子科技大学官方无隶属关系',
    },
    en: {
      'nav.features': 'Features',
      'nav.download': 'Download',
      'hero.tagline': 'HDU Helper · All-in-one Campus Companion',
      'hero.sub': 'Schedule · Exams · Grades · Deadlines',
      'hero.version': 'Current version',
      'cta.ios.small': 'iOS · TestFlight',
      'cta.ios.main': 'Join the Beta',
      'cta.android.small': 'Android · APK',
      'cta.android.main': 'Download APK',
      'download.title': 'Get the App',
      'download.ios.desc': 'Join the TestFlight beta to try the latest version on iOS.',
      'download.ios.btn': 'Open TestFlight',
      'download.ios.hint': 'Requires iOS 16 or later.',
      'download.android.desc': 'Download the APK directly. Allow installs from unknown sources.',
      'download.android.btn': 'Download APK',
      'download.android.hint': 'Supports Android 8.0 or later.',
      'footer.tagline': 'Powered by\n01001100 01101111 01110110 01100101',
      'footer.disclaimer': 'Not officially affiliated with Hangzhou Dianzi University',
    },
  };

  const STORAGE_KEY = 'hduhelp-cinch-lang';
  const SUPPORTED = ['zh-CN', 'en'];

  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || 'zh-CN').toLowerCase();
    if (nav.startsWith('zh')) return 'zh-CN';
    return 'en';
  }

  function applyLang(lang) {
    const dict = i18n[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'zh-CN' ? 'EN' : '中';
    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectLang());

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next =
          (localStorage.getItem(STORAGE_KEY) || detectLang()) === 'zh-CN' ? 'en' : 'zh-CN';
        applyLang(next);
      });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();
