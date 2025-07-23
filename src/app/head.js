export default function Head() {
  return (
    <>
      <title>Dulsie Kys Cooking School</title>
      <meta name="description" content="Duslie Fadzai Mudekwa is the Executive Chef and Owner of Dulsie Kys Cooking School..." />
      <meta name="keywords" content="Cooking School, Catering, Chef, Culinary Arts, Edible Insects, African Food, etc." />
      <meta name="google-adsense-account" content="ca-pub-5686210525462186" />

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5686210525462186"
        crossOrigin="anonymous"
      ></script>

      {/* Structured data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dulsie Kys Cooking School",
            url: "https://www.dulsie-kys-cooking-school.co.zw",
            logo: "",
            description: "Duslie Fadzai Mudekwa is the Executive Chef and Owner of Dulsie Kys Cooking School...",
            sameAs: ["https://www.facebook.com/dulsiefadzaim"],
          }),
        }}
      />
    </>
  );
}
