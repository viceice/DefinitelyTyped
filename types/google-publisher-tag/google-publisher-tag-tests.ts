// Tests for Google Publisher Tag 1.20250728
// Synced from: https://github.com/googleads/google-publisher-tag-types/commit/02d9acb6d6e8578a1a5fc39691ec36cd799f0a6b

// Test for googletag.cmd
function test_googletag_cmd() {
    googletag.cmd.push(() => {
        googletag.defineSlot("/1234567/sports", [160, 600])!.addService(googletag.pubads());
    });
}

// Test for googletag.secureSignalProviders
function test_googletag_secureSignalProviders() {
    window.googletag = window.googletag || { cmd: [] };
    googletag.secureSignalProviders = googletag.secureSignalProviders || [];
    googletag.secureSignalProviders.push({
        id: "collector123",
        collectorFunction: () => {
            return Promise.resolve("signal");
        },
    });
}

// Test for googletag.defineSlot
function test_googletag_defineSlot() {
    googletag.defineSlot("/1234567/sports", [728, 90], "div-1");
}

// Test for googletag.defineOutOfPageSlot
function test_googletag_defineOutOfPageSlot() {
    // Define a custom out-of-page ad slot.
    googletag.defineOutOfPageSlot("/1234567/sports", "div-1");

    // Define a GPT managed web interstitial ad slot.
    googletag.defineOutOfPageSlot("/1234567/sports", googletag.enums.OutOfPageFormat.INTERSTITIAL);
}

// Test for googletag.display
function test_googletag_display() {
    googletag.cmd.push(() => {
        googletag.display("div-1");
    });
}

// Test for googletag.destroySlots
function test_googletag_destroySlots() {
    // The calls to construct an ad and display contents.
    const slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1")!;
    googletag.display("div-1");
    const slot2 = googletag.defineSlot("/1234567/news", [160, 600], "div-2")!;
    googletag.display("div-2");

    // This call to destroy only slot1.
    googletag.destroySlots([slot1]);

    // This call to destroy both slot1 and slot2.
    googletag.destroySlots([slot1, slot2]);

    // This call to destroy all slots.
    googletag.destroySlots();
}

// Test for googletag.apiReady
function test_googletag_apiReady() {
    if (window.googletag && googletag.apiReady) {
        // GPT API can be called safely.
    }
}

// Test for googletag.openConsole
function test_googletag_openConsole() {
    // Calling with div ID.
    googletag.openConsole("div-1");

    // Calling without div ID.
    googletag.openConsole();
}

// Test for googletag.setAdIframeTitle
function test_googletag_setAdIframeTitle() {
    googletag.setAdIframeTitle("title");
}

// Test for googletag.getConfig
function test_googletag_getConfig() {
    // Get the value of the `targeting` setting.
    const targetingConfig = googletag.getConfig("targeting");

    // Get the value of the `adsenseAttributes` and `disableInitialLoad` settings.
    const config = googletag.getConfig(["adsenseAttributes", "disableInitialLoad"]);
}

// Test for googletag.CommandArray.push
function test_googletag_commandArray_push() {
    googletag.cmd.push(() => {
        googletag.defineSlot("/1234567/sports", [160, 600])!.addService(googletag.pubads());
    });
}

// Test for googletag.CompanionAdsService.setRefreshUnfilledSlots
function test_googletag_companionAdsService_setRefreshUnfilledSlots() {
    googletag.companionAds().setRefreshUnfilledSlots(true);
}

// Test for googletag.PrivacySettingsConfig.limitedAds
function test_googletag_privacySettingsConfig_limitedAds() {
    // Manually enable limited ads serving.
    // GPT must be loaded from the limited ads URL to configure this setting.
    googletag.pubads().setPrivacySettings({
        limitedAds: true,
    });
}

// Test for googletag.PrivacySettingsConfig.trafficSource
function test_googletag_privacySettingsConfig_trafficSource() {
    // Indicate requests represent organic traffic.
    googletag.pubads().setPrivacySettings({
        trafficSource: googletag.enums.TrafficSource.ORGANIC,
    });

    // Indicate requests represent purchased traffic.
    googletag.pubads().setPrivacySettings({
        trafficSource: googletag.enums.TrafficSource.PURCHASED,
    });
}

// Test for googletag.PubAdsService.setTargeting
function test_googletag_pubAdsService_setTargeting() {
    // Example with a single value for a key.
    googletag.pubads().setTargeting("interests", "sports");

    // Example with multiple values for a key inside in an array.
    googletag.pubads().setTargeting("interests", ["sports", "music"]);
}

// Test for googletag.PubAdsService.clearTargeting
function test_googletag_pubAdsService_clearTargeting() {
    googletag.pubads().setTargeting("interests", "sports");
    googletag.pubads().setTargeting("colors", "blue");
    googletag.pubads().setTargeting("fruits", "apple");

    googletag.pubads().clearTargeting("interests");
    // Targeting 'colors' and 'fruits' are still present, while 'interests'
    // was cleared.

    googletag.pubads().clearTargeting();
    // All targeting has been cleared.
}

// Test for googletag.PubAdsService.getTargeting
function test_googletag_pubAdsService_getTargeting() {
    googletag.pubads().setTargeting("interests", "sports");

    googletag.pubads().getTargeting("interests");
    // Returns ['sports'].

    googletag.pubads().getTargeting("age");
    // Returns [] (empty array).
}

// Test for googletag.PubAdsService.getTargetingKeys
function test_googletag_pubAdsService_getTargetingKeys() {
    googletag.pubads().setTargeting("interests", "sports");
    googletag.pubads().setTargeting("colors", "blue");

    googletag.pubads().getTargetingKeys();
    // Returns ['interests', 'colors'].
}

// Test for googletag.PubAdsService.setCategoryExclusion
function test_googletag_pubAdsService_setCategoryExclusion() {
    // Label = AirlineAd.
    googletag.pubads().setCategoryExclusion("AirlineAd");
}

// Test for googletag.PubAdsService.clearCategoryExclusions
function test_googletag_pubAdsService_clearCategoryExclusions() {
    // Set category exclusion to exclude ads with 'AirlineAd' labels.
    googletag.pubads().setCategoryExclusion("AirlineAd");

    // Make ad requests. No ad with 'AirlineAd' label will be returned.

    // Clear category exclusions so all ads can be returned.
    googletag.pubads().clearCategoryExclusions();

    // Make ad requests. Any ad can be returned.
}

// Test for googletag.PubAdsService.setCentering
function test_googletag_pubAdsService_setCentering() {
    // Make ads centered.
    googletag.pubads().setCentering(true);
}

// Test for googletag.PubAdsService.refresh
function test_googletag_pubAdsService_refresh() {
    const slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1")!;
    googletag.display("div-1");
    const slot2 = googletag.defineSlot("/1234567/news", [160, 600], "div-2")!;
    googletag.display("div-2");

    // This call to refresh fetches a new ad for slot1 only.
    googletag.pubads().refresh([slot1]);

    // This call to refresh fetches a new ad for both slot1 and slot2.
    googletag.pubads().refresh([slot1, slot2]);

    // This call to refresh fetches a new ad for each slot.
    googletag.pubads().refresh();

    // This call to refresh fetches a new ad for slot1, without changing
    // the correlator.
    googletag.pubads().refresh([slot1], { changeCorrelator: false });

    // This call to refresh fetches a new ad for each slot, without
    // changing the correlator.
    googletag.pubads().refresh(null, { changeCorrelator: false });
}

// Test for googletag.PubAdsService.clear
function test_googletag_pubAdsService_clear() {
    const slot1 = googletag.defineSlot("/1234567/sports", [728, 90], "div-1")!;
    googletag.display("div-1");
    const slot2 = googletag.defineSlot("/1234567/news", [160, 600], "div-2")!;
    googletag.display("div-2");

    // This call to clear only slot1.
    googletag.pubads().clear([slot1]);

    // This call to clear both slot1 and slot2.
    googletag.pubads().clear([slot1, slot2]);

    // This call to clear all slots.
    googletag.pubads().clear();
}

// Test for googletag.PubAdsService.setLocation
function test_googletag_pubAdsService_setLocation() {
    // Postal code:
    googletag.pubads().setLocation("10001,US");
}

// Test for googletag.PubAdsService.setPublisherProvidedId
function test_googletag_pubAdsService_setPublisherProvidedId() {
    googletag.pubads().setPublisherProvidedId("12JD92JD8078S8J29SDOAKC0EF230337");
}

// Test for googletag.PubAdsService.set
function test_googletag_pubAdsService_set() {
    googletag.pubads().set("adsense_background_color", "#FFFFFF");
}

// Test for googletag.PubAdsService.get
function test_googletag_pubAdsService_get() {
    googletag.pubads().set("adsense_background_color", "#FFFFFF");
    googletag.pubads().get("adsense_background_color");
    // Returns '#FFFFFF'.
}

// Test for googletag.PubAdsService.getAttributeKeys
function test_googletag_pubAdsService_getAttributeKeys() {
    googletag.pubads().set("adsense_background_color", "#FFFFFF");
    googletag.pubads().set("adsense_border_color", "#AABBCC");
    googletag.pubads().getAttributeKeys();
    // Returns ['adsense_background_color', 'adsense_border_color'].
}

// Test for googletag.PubAdsService.display
function test_googletag_pubAdsService_display() {
    googletag.pubads().display("/1234567/sports", [728, 90], "div-1");
}

// Test for googletag.PubAdsService.updateCorrelator
function test_googletag_pubAdsService_updateCorrelator() {
    // Assume that the correlator is currently 12345. All ad requests made
    // by this page will currently use that value.

    // Replace the current correlator with a new correlator.
    googletag.pubads().updateCorrelator();

    // The correlator will now be a new randomly selected value, different
    // from 12345. All subsequent ad requests made by this page will use
    // the new value.
}

// Test for googletag.PubAdsService.setForceSafeFrame
function test_googletag_pubAdsService_setForceSafeFrame() {
    googletag.pubads().setForceSafeFrame(true);

    // The following slot will be opted-out of the page-level force
    // SafeFrame instruction.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setForceSafeFrame(false)
        .addService(googletag.pubads());

    // The following slot will have SafeFrame forced.
    googletag.defineSlot("/1234567/news", [160, 600], "div-2")!.addService(googletag.pubads());

    googletag.display("div-1");
    googletag.display("div-2");
}

// Test for googletag.PubAdsService.setSafeFrameConfig
function test_googletag_pubAdsService_setSafeFrameConfig() {
    googletag.pubads().setForceSafeFrame(true);

    const pageConfig = {
        allowOverlayExpansion: true,
        allowPushExpansion: true,
        sandbox: true,
    };

    const slotConfig = { allowOverlayExpansion: false };

    googletag.pubads().setSafeFrameConfig(pageConfig);

    // The following slot will not allow for expansion by overlay.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setSafeFrameConfig(slotConfig)
        .addService(googletag.pubads());

    // The following slot will inherit the page level settings, and hence
    // would allow for expansion by overlay.
    googletag.defineSlot("/1234567/news", [160, 600], "div-2")!.addService(googletag.pubads());

    googletag.display("div-1");
    googletag.display("div-2");
}

// Test for googletag.PubAdsService.enableLazyLoad
function test_googletag_pubAdsService_enableLazyLoad() {
    googletag.pubads().enableLazyLoad({
        // Fetch slots within 5 viewports.
        fetchMarginPercent: 500,
        // Render slots within 2 viewports.
        renderMarginPercent: 200,
        // Double the above values on mobile.
        mobileScaling: 2.0,
    });
}

// Test for googletag.PubAdsService.setPrivacySettings
function test_googletag_pubAdsService_setPrivacySettings() {
    googletag.pubads().setPrivacySettings({
        restrictDataProcessing: true,
    });

    // Set multiple privacy settings at the same time.
    googletag.pubads().setPrivacySettings({
        childDirectedTreatment: true,
        underAgeOfConsent: true,
    });

    // Clear the configuration for childDirectedTreatment.
    googletag.pubads().setPrivacySettings({
        childDirectedTreatment: null,
    });
}

// Test for googletag.Service.addEventListener
function test_googletag_service_addEventListener() {
    // 1. Adding an event listener for the PubAdsService.
    googletag.pubads().addEventListener("slotOnload", event => {
        console.log("Slot has been loaded:");
        console.log(event);
    });

    // 2. Adding an event listener with slot specific logic.
    // Listeners operate at service level, which means that you cannot add
    // a listener for an event for a specific slot only. You can, however,
    // programmatically filter a listener to respond only to a certain ad
    // slot, using this pattern:
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotOnload", event => {
        if (event.slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.Service.removeEventListener
function test_googletag_service_removeEventListener() {
    googletag.cmd.push(() => {
        // Define a new ad slot.
        googletag.defineSlot("/6355419/Travel", [728, 90], "div-for-slot")!.addService(googletag.pubads());

        // Define a new function that removes itself via removeEventListener
        // after the impressionViewable event fires.
        const onViewableListener = (event: googletag.events.ImpressionViewableEvent) => {
            googletag.pubads().removeEventListener("impressionViewable", onViewableListener);
            setTimeout(() => {
                googletag.pubads().refresh([event.slot]);
            }, 30000);
        };

        // Add onViewableListener as a listener for impressionViewable events.
        googletag.pubads().addEventListener("impressionViewable", onViewableListener);
        googletag.enableServices();
    });
}

// Test for googletag.SizeMappingBuilder.addSize
function test_googletag_sizeMappingBuilder_addSize() {
    // Mapping 1
    googletag
        .sizeMapping()
        .addSize([1024, 768], [970, 250])
        .addSize([980, 690], [728, 90])
        .addSize([640, 480], "fluid")
        .addSize([0, 0], [88, 31]) // All viewports &lt; 640x480
        .build();

    // Mapping 2
    googletag
        .sizeMapping()
        .addSize([1024, 768], [970, 250])
        .addSize([980, 690], [])
        .addSize([640, 480], [120, 60])
        .addSize([0, 0], [])
        .build();

    // Mapping 2 will not show any ads for the following viewport sizes:
    // [1024, 768] > size >= [980, 690] and
    // [640, 480] > size >= [0, 0]
}

// Test for googletag.Slot.set
function test_googletag_slot_set() {
    // Setting an attribute on a single ad slot.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .set("adsense_background_color", "#FFFFFF")
        .addService(googletag.pubads());
}

// Test for googletag.Slot.get
function test_googletag_slot_get() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .set("adsense_background_color", "#FFFFFF")
        .addService(googletag.pubads());

    slot.get("adsense_background_color");
    // Returns '#FFFFFF'.
}

// Test for googletag.Slot.getAttributeKeys
function test_googletag_slot_getAttributeKeys() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .set("adsense_background_color", "#FFFFFF")
        .set("adsense_border_color", "#AABBCC")
        .addService(googletag.pubads());

    slot.getAttributeKeys();
    // Returns ['adsense_background_color', 'adsense_border_color'].
}

// Test for googletag.Slot.addService
function test_googletag_slot_addService() {
    googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());
}

// Test for googletag.Slot.defineSizeMapping
function test_googletag_slot_defineSizeMapping() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    const mapping = googletag
        .sizeMapping()
        .addSize([100, 100], [88, 31])
        .addSize(
            [320, 400],
            [
                [320, 50],
                [300, 50],
            ],
        )
        .build();

    slot.defineSizeMapping(mapping!);
}

// Test for googletag.Slot.setClickUrl
function test_googletag_slot_setClickUrl() {
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setClickUrl("http://www.example.com?original_click_url=")
        .addService(googletag.pubads());
}

// Test for googletag.Slot.setCategoryExclusion
function test_googletag_slot_setCategoryExclusion() {
    // Label = AirlineAd
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCategoryExclusion("AirlineAd")
        .addService(googletag.pubads());
}

// Test for googletag.Slot.clearCategoryExclusions
function test_googletag_slot_clearCategoryExclusions() {
    // Set category exclusion to exclude ads with 'AirlineAd' labels.
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCategoryExclusion("AirlineAd")
        .addService(googletag.pubads());

    // Make an ad request. No ad with 'AirlineAd' label will be returned
    // for the slot.

    // Clear category exclusions so all ads can be returned.
    slot.clearCategoryExclusions();

    // Make an ad request. Any ad can be returned for the slot.
}

// Test for googletag.Slot.getCategoryExclusions
function test_googletag_slot_getCategoryExclusions() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setCategoryExclusion("AirlineAd")
        .setCategoryExclusion("TrainAd")
        .addService(googletag.pubads());

    slot.getCategoryExclusions();
    // Returns ['AirlineAd', 'TrainAd'].
}

// Test for googletag.Slot.setTargeting
function test_googletag_slot_setTargeting() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Example with a single value for a key.
    slot.setTargeting("allow_expandable", "true");

    // Example with multiple values for a key inside in an array.
    slot.setTargeting("interests", ["sports", "music"]);
}

// Test for googletag.Slot.clearTargeting
function test_googletag_slot_clearTargeting() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setTargeting("allow_expandable", "true")
        .setTargeting("interests", ["sports", "music"])
        .setTargeting("color", "red")
        .addService(googletag.pubads());

    slot.clearTargeting("color");
    // Targeting 'allow_expandable' and 'interests' are still present,
    // while 'color' was cleared.

    slot.clearTargeting();
    // All targeting has been cleared.
}

// Test for googletag.Slot.getTargeting
function test_googletag_slot_getTargeting() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setTargeting("allow_expandable", "true")
        .addService(googletag.pubads());

    slot.getTargeting("allow_expandable");
    // Returns ['true'].

    slot.getTargeting("age");
    // Returns [] (empty array).
}

// Test for googletag.Slot.getTargetingKeys
function test_googletag_slot_getTargetingKeys() {
    const slot = googletag
        .defineSlot("/1234567/sports", [160, 600], "div")!
        .setTargeting("allow_expandable", "true")
        .setTargeting("interests", ["sports", "music"])
        .addService(googletag.pubads());

    slot.getTargetingKeys();
    // Returns ['interests', 'allow_expandable'].
}

// Test for googletag.Slot.setCollapseEmptyDiv
function test_googletag_slot_setCollapseEmptyDiv() {
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setCollapseEmptyDiv(true, true)
        .addService(googletag.pubads());
    // The above will cause the div for this slot to be collapsed
    // when the page is loaded, before ads are requested.

    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-2")!
        .setCollapseEmptyDiv(true)
        .addService(googletag.pubads());
    // The above will cause the div for this slot to be collapsed
    // only after GPT detects that no ads are available for the slot.
}

// Test for googletag.Slot.getAdUnitPath
function test_googletag_slot_getAdUnitPath() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    slot.getAdUnitPath();
    // Returns '/1234567/sports'.
}

// Test for googletag.Slot.getSlotElementId
function test_googletag_slot_getSlotElementId() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    slot.getSlotElementId();
    // Returns 'div'.
}

// Test for googletag.Slot.setForceSafeFrame
function test_googletag_slot_setForceSafeFrame() {
    googletag.defineSlot("/1234567/sports", [160, 600], "div")!.setForceSafeFrame(true).addService(googletag.pubads());
}

// Test for googletag.Slot.setSafeFrameConfig
function test_googletag_slot_setSafeFrameConfig() {
    googletag.pubads().setForceSafeFrame(true);

    // The following slot will have a sandboxed safeframe that only
    // disallows top-level navigation.
    googletag
        .defineSlot("/1234567/sports", [160, 600], "div-1")!
        .setSafeFrameConfig({ sandbox: true })
        .addService(googletag.pubads());

    // The following slot will inherit page-level settings.
    googletag.defineSlot("/1234567/news", [160, 600], "div-2")!.addService(googletag.pubads());

    googletag.display("div-1");
    googletag.display("div-2");
}

// Test for googletag.Slot.updateTargetingFromMap
function test_googletag_slot_updateTargetingFromMap() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!;

    slot.updateTargetingFromMap({
        "color": "red",
        "interests": ["sports", "music", "movies"],
    });
}

// Test for googletag.Slot.getConfig
function test_googletag_slot_getConfig() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!;

    // Get the value of the `targeting` setting.
    const targetingConfig = slot.getConfig("targeting");

    // Get the value of the `adsenseAttributes` and `categoryExclusion` settings.
    const config = slot.getConfig(["adsenseAttributes", "categoryExclusion"]);
}

// Test for googletag.config.AdExpansionConfig
function test_googletag_config_adExpansionConfig() {
    // Enable ad slot expansion across the entire page.
    googletag.setConfig({
        adExpansion: { enabled: true },
    });
}

// Test for googletag.config.PageSettingsConfig.threadYield
function test_googletag_config_pageSettingsConfig_threadYield() {
    // Disable yielding.
    googletag.setConfig({ threadYield: "DISABLED" });

    // Enable yielding for all slots.
    googletag.setConfig({ threadYield: "ENABLED_ALL_SLOTS" });

    // Enable yielding only for slots outside of the viewport (default).
    googletag.setConfig({ threadYield: null });
}

// Test for googletag.config.PageSettingsConfig.location
function test_googletag_config_pageSettingsConfig_location() {
    // Geo-target line items to US postal code 10001.
    googletag.setConfig({ location: "10001,US" });

    // Clear the location setting.
    googletag.setConfig({ location: null });
}

// Test for googletag.config.PageSettingsConfig.videoAds
function test_googletag_config_pageSettingsConfig_videoAds() {
    // Enable video ads and set video content and content source IDs.
    googletag.setConfig({
        videoAds: {
            enableVideoAds: true,
            videoContentId: "e1eGlRL7ju8",
            videoCmsId: "1234567",
        },
    });
}

// Test for googletag.config.PageSettingsConfig.lazyLoad
function test_googletag_config_pageSettingsConfig_lazyLoad() {
    // Enable lazy loading.
    googletag.setConfig({
        lazyLoad: {
            // Fetch slots within 5 viewports.
            fetchMarginPercent: 500,
            // Render slots within 2 viewports.
            renderMarginPercent: 200,
            // Double the above values on mobile.
            mobileScaling: 2.0,
        },
    });

    // Clear fetch margin only.
    googletag.setConfig({
        lazyLoad: { fetchMarginPercent: null },
    });

    // Clear all lazy loading settings.
    googletag.setConfig({ lazyLoad: null });
}

// Test for googletag.config.PageSettingsConfig.safeFrame
function test_googletag_config_pageSettingsConfig_safeFrame() {
    // Force SafeFrame for all ads on the page.
    googletag.setConfig({
        safeFrame: { forceSafeFrame: true },
    });

    // Configure SafeFrame to allow overlay expansion.
    googletag.setConfig({
        safeFrame: { allowOverlayExpansion: true },
    });

    // Clear forceSafeFrame setting.
    googletag.setConfig({
        safeFrame: { forceSafeFrame: null },
    });

    // Clear all SafeFrame settings.
    googletag.setConfig({ safeFrame: null });
}

// Test for googletag.config.PageSettingsConfig.centering
function test_googletag_config_pageSettingsConfig_centering() {
    // Make ads centered.
    googletag.setConfig({ centering: true });

    // Clear the centering setting.
    googletag.setConfig({ centering: null });
}

// Test for googletag.config.PageSettingsConfig.collapseDiv
function test_googletag_config_pageSettingsConfig_collapseDiv() {
    // Collapse the div for this slot if no ad is returned.
    googletag.setConfig({ collapseDiv: "ON_NO_FILL" });

    // Collapse the div for this slot by default, and expand only
    // if an ad is returned.
    googletag.setConfig({ collapseDiv: "BEFORE_FETCH" });

    // Do not collapse the div for this slot.
    googletag.setConfig({ collapseDiv: "DISABLED" });

    // Clear the collapse setting.
    googletag.setConfig({ collapseDiv: null });
}

// Test for googletag.config.PageSettingsConfig.singleRequest
function test_googletag_config_pageSettingsConfig_singleRequest() {
    // Enable Single Request Architecture.
    googletag.setConfig({ singleRequest: true });
}

// Test for googletag.config.PageSettingsConfig.disableInitialLoad
function test_googletag_config_pageSettingsConfig_disableInitialLoad() {
    // Prevent requesting ads when `display()` is called.
    googletag.setConfig({ disableInitialLoad: true });
}

// Test for googletag.config.PageSettingsConfig.categoryExclusion
function test_googletag_config_pageSettingsConfig_categoryExclusion() {
    // Label = AirlineAd.
    googletag.setConfig({ categoryExclusion: ["AirlineAd"] });

    // Clearing category exclusion setting.
    googletag.setConfig({ categoryExclusion: null });
}

// Test for googletag.config.PageSettingsConfig.targeting
function test_googletag_config_pageSettingsConfig_targeting() {
    // Setting a single targeting key-value.
    googletag.setConfig({ targeting: { interests: "sports" } });

    // Setting multiple values for a single targeting key
    googletag.setConfig({ targeting: { interests: ["sports", "music"] } });

    // Setting multiple targeting key-values at once.
    googletag.setConfig({ targeting: { interests: ["sports", "music"], color: "red" } });

    // Clearing a single targeting key.
    googletag.setConfig({ targeting: { interests: null } });
}

// Test for googletag.config.PageSettingsConfig.adsenseAttributes
function test_googletag_config_pageSettingsConfig_adsenseAttributes() {
    // Set the document language and page URL.
    googletag.setConfig({ adsenseAttributes: { document_language: "en", page_url: "http://www.example.com" } });

    // Clear the page URL only.
    googletag.setConfig({ adsenseAttributes: { page_url: null } });

    // Clear all AdSense attributes.
    googletag.setConfig({ adsenseAttributes: null });
}

// Test for googletag.config.PrivacyTreatmentsConfig.treatments
function test_googletag_config_privacyTreatmentsConfig_treatments() {
    // Disable personalization across the entire page.
    googletag.setConfig({
        privacyTreatments: { treatments: ["disablePersonalization"] },
    });
}

// Test for googletag.config.PublisherProvidedSignalsConfig
function test_googletag_config_publisherProvidedSignalsConfig() {
    googletag.setConfig({
        pps: {
            taxonomies: {
                "IAB_AUDIENCE_1_1": { values: ["6", "626"] },
                // '6' = 'Demographic | Age Range | 30-34'
                // '626' = 'Interest | Sports | Darts'
                "IAB_CONTENT_2_2": { values: ["48", "127"] },
                // '48' = 'Books and Literature | Fiction'
                // '127' = 'Careers | Job Search'
            },
        },
    });
}

// Test for googletag.config.SlotSettingsConfig.clickUrl
function test_googletag_config_slotSettingsConfig_clickUrl() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Sets the click URL to 'http://www.example.com?original_click_url='.
    slot.setConfig({
        clickUrl: "http://www.example.com?original_click_url=",
    });

    // Clears the click URL.
    slot.setConfig({
        clickUrl: null,
    });
}

// Test for googletag.config.SlotSettingsConfig.safeFrame
function test_googletag_config_slotSettingsConfig_safeFrame() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Force SafeFrame for the slot.
    slot.setConfig({
        safeFrame: { forceSafeFrame: true },
    });

    // Configure SafeFrame to allow overlay expansion for the slot.
    slot.setConfig({
        safeFrame: { allowOverlayExpansion: true },
    });

    // Clear forceSafeFrame setting for the slot.
    slot.setConfig({
        safeFrame: { forceSafeFrame: null },
    });

    // Clear all SafeFrame settings for the slot.
    slot.setConfig({ safeFrame: null });
}

// Test for googletag.config.SlotSettingsConfig.collapseDiv
function test_googletag_config_slotSettingsConfig_collapseDiv() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Collapse the div for this slot if no ad is returned.
    slot.setConfig({
        collapseDiv: "ON_NO_FILL",
    });

    // Collapse the div for this slot by default, and expand only
    // if an ad is returned.
    slot.setConfig({
        collapseDiv: "BEFORE_FETCH",
    });

    // Do not collapse the div for this slot.
    slot.setConfig({
        collapseDiv: "DISABLED",
    });

    // Clear the collapse setting.
    slot.setConfig({
        collapseDiv: null,
    });
}

// Test for googletag.config.SlotSettingsConfig.categoryExclusion
function test_googletag_config_slotSettingsConfig_categoryExclusion() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Label = AirlineAd
    slot.setConfig({
        categoryExclusion: ["AirlineAd"],
    });

    // Clearing category exclusion setting.
    slot.setConfig({ categoryExclusion: null });
}

// Test for googletag.config.SlotSettingsConfig.targeting
function test_googletag_config_slotSettingsConfig_targeting() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Setting a single targeting key-value.
    slot.setConfig({ targeting: { interests: "sports" } });

    // Setting multiple values for a single targeting key.
    slot.setConfig({ targeting: { interests: ["sports", "music"] } });

    // Setting multiple targeting key-values at once.
    slot.setConfig({ targeting: { interests: ["sports", "music"], color: "red" } });

    // Clearing a single targeting key.
    slot.setConfig({ targeting: { interests: null } });

    // Clear all targeting keys.
    slot.setConfig({ targeting: null });
}

// Test for googletag.config.SlotSettingsConfig.adsenseAttributes
function test_googletag_config_slotSettingsConfig_adsenseAttributes() {
    const slot = googletag.defineSlot("/1234567/sports", [160, 600], "div")!.addService(googletag.pubads());

    // Set the AdSense ad format and channel IDs.
    slot.setConfig({
        adsenseAttributes: { adsense_ad_format: "120x240_as", adsense_channel_ids: "271828183+314159265" },
    });

    // Clear the AdSense channel IDs only.
    slot.setConfig({ adsenseAttributes: { adsense_channel_ids: null } });

    // Clear all AdSense attributes.
    slot.setConfig({ adsenseAttributes: null });
}

// Test for googletag.config.ComponentAuctionConfig.auctionConfig
function test_googletag_config_componentAuctionConfig_auctionConfig() {
    const componentAuctionConfig = {
        // Seller URL should be https and the same as decisionLogicURL's origin
        seller: "https://testSeller.com",
        decisionLogicURL: "https://testSeller.com/ssp/decision-logic.js",
        interestGroupBuyers: ["https://example-buyer.com"],
        auctionSignals: { auction_signals: "auction_signals" },
        sellerSignals: { seller_signals: "seller_signals" },
        perBuyerSignals: {
            // listed on interestGroupBuyers
            "https://example-buyer.com": {
                per_buyer_signals: "per_buyer_signals",
            },
        },
    };

    const auctionSlot = googletag.defineSlot("/1234567/example", [160, 600])!;

    // To add configKey to the component auction:
    auctionSlot.setConfig({
        componentAuction: [
            {
                configKey: "https://testSeller.com",
                auctionConfig: componentAuctionConfig,
            },
        ],
    });

    // To remove configKey from the component auction:
    auctionSlot.setConfig({
        componentAuction: [
            {
                configKey: "https://testSeller.com",
                auctionConfig: null,
            },
        ],
    });
}

// Test for googletag.config.InterstitialConfig.triggers
function test_googletag_config_interstitialConfig_triggers() {
    // Define a GPT managed web interstitial ad slot.
    const interstitialSlot = googletag.defineOutOfPageSlot(
        "/1234567/sports",
        googletag.enums.OutOfPageFormat.INTERSTITIAL,
    )!;

    // Enable optional interstitial triggers.
    // Change this value to false to disable.
    const enableTriggers = true;

    interstitialSlot.setConfig({
        interstitial: {
            triggers: {
                navBar: enableTriggers,
                unhideWindow: enableTriggers,
            },
        },
    });
}

// Test for googletag.config.InterstitialConfig.requireStorageAccess
function test_googletag_config_interstitialConfig_requireStorageAccess() {
    // Opt out of showing interstitials to users
    // without local storage consent.
    const interstitialSlot = googletag.defineOutOfPageSlot(
        "/1234567/sports",
        googletag.enums.OutOfPageFormat.INTERSTITIAL,
    )!;

    interstitialSlot.setConfig({
        interstitial: {
            requireStorageAccess: true, // defaults to false
        },
    });
}

// Test for googletag.secureSignals.BidderSignalProvider
function test_googletag_secureSignals_bidderSignalProvider() {
    // id is provided
    googletag.secureSignalProviders!.push({
        id: "collector123",
        collectorFunction: () => {
            // ...custom signal generation logic...
            return Promise.resolve("signal");
        },
    });
}

// Test for googletag.secureSignals.PublisherSignalProvider
function test_googletag_secureSignals_publisherSignalProvider() {
    // networkCode is provided
    googletag.secureSignalProviders!.push({
        networkCode: "123456",
        collectorFunction: () => {
            // ...custom signal generation logic...
            return Promise.resolve("signal");
        },
    });
}

// Test for googletag.events.SlotRequestedEvent
function test_googletag_events_slotRequestedEvent() {
    // This listener is called when the specified service issues an ad
    // request for a slot. Each slot will fire this event, even though they
    // may be batched together in a single request if single request
    // architecture (SRA) is enabled.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotRequested", event => {
        const slot = event.slot;
        console.log("Slot", slot.getSlotElementId(), "has been requested.");

        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.events.SlotRenderEndedEvent
function test_googletag_events_slotRenderEndedEvent() {
    // This listener is called when a slot has finished rendering.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotRenderEnded", event => {
        const slot = event.slot;
        console.group("Slot", slot.getSlotElementId(), "finished rendering.");

        // Log details of the rendered ad.
        console.log("Advertiser ID:", event.advertiserId);
        console.log("Campaign ID:", event.campaignId);
        console.log("Company IDs:", event.companyIds);
        console.log("Creative ID:", event.creativeId);
        console.log("Creative Template ID:", event.creativeTemplateId);
        console.log("Is backfill?:", event.isBackfill);
        console.log("Is empty?:", event.isEmpty);
        console.log("Line Item ID:", event.lineItemId);
        console.log("Size:", event.size);
        console.log("Slot content changed?", event.slotContentChanged);
        console.log("Source Agnostic Creative ID:", event.sourceAgnosticCreativeId);
        console.log("Source Agnostic Line Item ID:", event.sourceAgnosticLineItemId);
        console.log("Yield Group IDs:", event.yieldGroupIds);
        console.groupEnd();

        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.events.ImpressionViewableEvent
function test_googletag_events_impressionViewableEvent() {
    // This listener is called when an impression becomes viewable.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("impressionViewable", event => {
        const slot = event.slot;
        console.log("Impression for slot", slot.getSlotElementId(), "became viewable.");

        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.events.SlotOnloadEvent
function test_googletag_events_slotOnloadEvent() {
    // This listener is called when a creative iframe load event fires.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotOnload", event => {
        const slot = event.slot;
        console.log("Creative iframe for slot", slot.getSlotElementId(), "has loaded.");

        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.events.SlotVisibilityChangedEvent
function test_googletag_events_slotVisibilityChangedEvent() {
    // This listener is called whenever the on-screen percentage of an
    // ad slot's area changes.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotVisibilityChanged", event => {
        const slot = event.slot;
        console.group("Visibility of slot", slot.getSlotElementId(), "changed.");

        // Log details of the event.
        console.log("Visible area:", `${event.inViewPercentage}%`);
        console.groupEnd();

        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.events.SlotResponseReceived
function test_googletag_events_slotResponseReceived() {
    // This listener is called when an ad response has been received
    // for a slot.
    const targetSlot = googletag.defineSlot("/1234567/example", [160, 600]);
    googletag.pubads().addEventListener("slotResponseReceived", event => {
        const slot = event.slot;
        console.log("Ad response for slot", slot.getSlotElementId(), "received.");

        if (slot === targetSlot) {
            // Slot specific logic.
        }
    });
}

// Test for googletag.events.RewardedSlotGrantedEvent
function test_googletag_events_rewardedSlotGrantedEvent() {
    const targetSlot = googletag.defineOutOfPageSlot("/1234567/example", googletag.enums.OutOfPageFormat.REWARDED);

    // Slot returns null if the page or device does not support rewarded ads.
    if (targetSlot) {
        targetSlot.addService(googletag.pubads());

        // This listener is called whenever a reward is granted for a
        // rewarded ad.
        googletag.pubads().addEventListener("rewardedSlotGranted", event => {
            const slot = event.slot;
            console.group("Reward granted for slot", slot.getSlotElementId(), ".");

            // Log details of the reward.
            console.log("Reward type:", event.payload?.type);
            console.log("Reward amount:", event.payload?.amount);
            console.groupEnd();

            if (slot === targetSlot) {
                // Slot specific logic.
            }
        });
    }
}

// Test for googletag.events.RewardedSlotClosedEvent
function test_googletag_events_rewardedSlotClosedEvent() {
    const targetSlot = googletag.defineOutOfPageSlot("/1234567/example", googletag.enums.OutOfPageFormat.REWARDED);

    // Slot returns null if the page or device does not support rewarded ads.
    if (targetSlot) {
        targetSlot.addService(googletag.pubads());

        // This listener is called when the user closes a rewarded ad slot.
        googletag.pubads().addEventListener("rewardedSlotClosed", event => {
            const slot = event.slot;
            console.log("Rewarded ad slot", slot.getSlotElementId(), "has been closed.");

            if (slot === targetSlot) {
                // Slot specific logic.
            }
        });
    }
}

// Test for googletag.events.RewardedSlotReadyEvent
function test_googletag_events_rewardedSlotReadyEvent() {
    // This listener is called when a rewarded ad slot becomes ready to be
    // displayed.
    const targetSlot = googletag.defineOutOfPageSlot("/1234567/example", googletag.enums.OutOfPageFormat.REWARDED);

    // Slot returns null if the page or device does not support rewarded ads.
    if (targetSlot) {
        targetSlot.addService(googletag.pubads());

        // This listener is called whenever a reward is granted for a
        // rewarded ad.
        googletag.pubads().addEventListener("rewardedSlotReady", event => {
            const slot = event.slot;
            console.log("Rewarded ad slot", slot.getSlotElementId(), "is ready to be displayed.");

            // Replace with custom logic.
            const userHasConsented = true;
            if (userHasConsented) {
                event.makeRewardedVisible();
            }

            if (slot === targetSlot) {
                // Slot specific logic.
            }
        });
    }
}

// Test for googletag.events.GameManualInterstitialSlotReadyEvent
function test_googletag_events_gameManualInterstitialSlotReadyEvent() {
    // This listener is called when a game manual interstitial slot is ready to
    // be displayed.
    const targetSlot = googletag.defineOutOfPageSlot(
        "/1234567/example",
        googletag.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
    );

    // Slot returns null if the page or device does not support game manual interstitial ads.
    if (targetSlot) {
        targetSlot.addService(googletag.pubads());

        googletag.pubads().addEventListener("gameManualInterstitialSlotReady", event => {
            const slot = event.slot;
            console.log("Game manual interstital slot", slot.getSlotElementId(), "is ready to be displayed.");

            // Replace with custom logic.
            const displayGmiAd = true;
            if (displayGmiAd) {
                event.makeGameManualInterstitialVisible();
            }

            if (slot === targetSlot) {
                // Slot specific logic.
            }
        });
    }
}

// Test for googletag.events.GameManualInterstitialSlotClosedEvent
function test_googletag_events_gameManualInterstitialSlotClosedEvent() {
    // This listener is called when a game manual interstitial slot is closed.
    const targetSlot = googletag.defineOutOfPageSlot(
        "/1234567/example",
        googletag.enums.OutOfPageFormat.GAME_MANUAL_INTERSTITIAL,
    );

    // Slot returns null if the page or device does not support game manual interstitial ads.
    if (targetSlot) {
        targetSlot.addService(googletag.pubads());

        googletag.pubads().addEventListener("gameManualInterstitialSlotClosed", event => {
            const slot = event.slot;
            console.log("Game manual interstital slot", slot.getSlotElementId(), "is closed.");

            if (slot === targetSlot) {
                // Slot specific logic.
            }
        });
    }
}
