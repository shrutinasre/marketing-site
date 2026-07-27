import Script from "next/script";
import { siteConfig } from "@/lib/site";

// Renders tracking scripts only when the corresponding environment variable
// is configured. No IDs are ever hardcoded here.
export function Analytics() {
  const { gaId, gtmId, metaPixelId, linkedInInsightId } = siteConfig.analytics;

  return (
    <>
      {gtmId && (
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}

      {gaId && !gtmId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}

      {metaPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {linkedInInsightId && (
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${linkedInInsightId}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l){
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </Script>
      )}
    </>
  );
}

// Track a named event across configured providers. Safe to call even when
// no analytics providers are configured — becomes a no-op.
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event: eventName, ...params });
  w.gtag?.("event", eventName, params);
  w.fbq?.("trackCustom", eventName, params);
}

// Suggested event names (see spec section 34):
// consultation_cta_click, contact_form_started, contact_form_submitted,
// pricing_cta_click, service_page_cta_click, it_calculator_completed
