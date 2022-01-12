import pwaManifest, {write} from "@pwa/manifest";
 
(async () => {
    const manifest = await pwaManifest({
        name: "Nas prvi PWA",
        short_name: "prviPWA",
        start_url: "/index.html",
        display: "standalone",
        background_color: "#EFEFEF",
        theme_color: "#FFEEFF"
    })

    await write("./",manifest);
})();