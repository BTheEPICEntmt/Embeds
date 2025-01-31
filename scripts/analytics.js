(function() {
    var GA_TRACKING_ID = 'REPLACE_WITH_GA4_ID'; // Replace with your GA4 ID. Ex: G-0000000000

    if (!GA_TRACKING_ID || GA_TRACKING_ID === 'REPLACE_WITH_GA4_ID') { // Do NOT replace this!
        console.warn("⚠️ Google Analytics is not configured! Please add your own 'GA_TRACKING_ID' or remove the '/scripts/analytics.js' reference in your HTML.");
        return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);

    let script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_TRACKING_ID;
    document.head.appendChild(script);
})();
